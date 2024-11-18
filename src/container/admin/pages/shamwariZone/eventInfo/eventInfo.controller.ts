import { useEffect, useState } from "react";
import { SelectChangeEvent } from "@mui/material";
import moment from "moment";
import { useNavigate, useParams } from "react-router-dom";
import { axiosInstance } from "../../../../../services/api/api";
import {
  checkBlankString,
  checkNumeric,
} from "../../../../../utils/validation/validation";
import { constant } from "../../../../../services/constant";
import dayjs from "dayjs";
import { ErrorProps, EventInfoControllerProps } from "./eventInfo.interface";
import { EventProps } from "../../../../../services/redux/userData/interface";
import { TableCellDataProps } from "../../../../../component/customTable/customTable.interface";
import { useAppSelector } from "../../../../../services/redux/controller";
import validationMessage from "../../../../../utils/validation/validationMessage";

const EventInfoController = (): EventInfoControllerProps => {
  const [postSpinner, setPostSpinner] = useState<boolean>(false);
  const [deleteSpinner, setDeleteSpinner] = useState<boolean>(false);
  const [openDialog, setOpenDialog] = useState<boolean>(false);
  const [editable, setEditable] = useState<boolean>(false);
  const [openSnackbar, setOpenSnackbar] = useState<boolean>(false);
  const [snackbarMessage, setSnackbarMessage] = useState<string>();
  const [title, setTitle] = useState<string>();
  const [isStudent, setIsStudent] = useState<string[]>([]);
  const [universityName, setUniversityName] = useState<string>("");
  const [areaName, setAreaName] = useState<string>();
  const [date, setDate] = useState<any>(dayjs(new Date()));
  const [time, setTime] = useState<any>(null);
  const [address, setAddress] = useState<string>();
  const [noOfTickets, setNoOfTickets] = useState<string>();
  const [ticketPrice, setTicketPrice] = useState<string>();
  const [info, setInfo] = useState<string>();
  const [image, setImage] = useState<any>();
  const [disable, setDisable] = useState<boolean>(false);
  const [universityData, setUniversityData] = useState<TableCellDataProps[]>(
    []
  );
  const [areaData, setAreaData] = useState<TableCellDataProps[]>([]);
  const [error, setError] = useState<ErrorProps>({
    title: undefined,
    university: undefined,
    area: undefined,
    date: undefined,
    time: undefined,
    address: undefined,
    noOfTickets: undefined,
    ticketPrice: undefined,
    info: undefined,
    image: undefined,
    selection: undefined,
  });

  const today = new Date().toISOString().split("T")[0];

  const { eventId } = useParams();

  const { area, university, events } = useAppSelector(
    (state) => state.userDataReducer
  );

  const eventInfo: EventProps = events?.filter(
    (item: EventProps) => item._id === eventId
  )[0];

  const onSelect = (title: string): void => {
    if (isStudent?.includes(title)) {
      setIsStudent((e: any) => e.filter((item: string) => item !== title));
    } else {
      setIsStudent((e: any) => [...e, title]);
    }
  };

  useEffect(() => {
    if (!eventId) {
      setEditable(true);
    }
    if (eventId) {
      setTitle(eventInfo?.title);
      if (eventInfo?.is_student === true) {
        setIsStudent((e: any) => [...e, "Yes"]);
      }
      if (eventInfo?.non_student === true) {
        setIsStudent((e: any) => [...e, "No"]);
      }
      if (eventInfo?.university_id?._id) {
        setUniversityName(eventInfo?.university_id?._id?.toString());
      }
      if (eventInfo?.area_down_id?._id) {
        setAreaName(eventInfo?.area_down_id?._id?.toString());
      }
      setAddress(eventInfo?.address);
      setNoOfTickets(eventInfo?.number_of_tickets_available?.toString());
      setTicketPrice(eventInfo?.price_per_ticket?.toString());
      setInfo(eventInfo?.info);
      setImage(eventInfo?.image);
      setDate(dayjs(eventInfo?.date));
      setTime(moment(eventInfo?.time));
    }
    setUniversityData(university);
    setAreaData(area);
  }, []);

  const navigation = useNavigate();

  const goBack = (): void => {
    navigation(-1);
  };

  const handleOpenDialog = (): void => {
    setOpenDialog(true);
    setDisable(false);
  };

  const handleCloseDialog = (): void => {
    setOpenDialog(false);
    setDisable(false);
  };

  const handleUniversityChange = (event: SelectChangeEvent): void => {
    setUniversityName(event.target.value);
  };

  const handleAreaChange = (event: SelectChangeEvent): void => {
    setAreaName(event.target.value);
  };

  const onChangeTime = (item: string | null): void => {
    setTime(moment(item));
  };

  const onChangeDate = (item: string | null): void => {
    setDate(item);
  };

  const handleImageUpload = (e: any): void => {
    /* Functionality to choose image file */
    const fileType = ["image/png", "image/jpeg"];
    let selectedFile = e.target.files[0];
    if (selectedFile) {
      if (selectedFile && fileType.includes(selectedFile.type)) {
        setImage(selectedFile);
        error.image = "";
      } else {
        setImage("");
        error.image = validationMessage.invalidImage;
      }
      setError({ ...error });
    }
  };

  const createEvent = async () => {
    /* API call for creating/updating event */
    try {
      const formData = new FormData();
      if (eventId) {
        formData.append("_id", eventId);
      }
      if (title) {
        formData.append("title", title);
      }
      if (isStudent?.includes("No") && areaName) {
        formData.append("area_down_id", areaName);
      }
      if (isStudent?.includes("Yes") && universityName) {
        formData.append("university_id", universityName);
      }
      formData.append(
        "non_student",
        isStudent?.includes("No") ? "true" : "false"
      );
      if (ticketPrice) {
        formData.append("price_per_ticket", ticketPrice);
      }
      if (noOfTickets) {
        formData.append("number_of_tickets_available", noOfTickets);
      }
      if (address) {
        formData.append("address", address);
      }
      if (time) {
        formData.append("time", moment(time).format("HH:mm"));
      }
      if (date) {
        formData.append("date", moment(date?.$d).format("YYYY-MM-DD"));
      }
      if (image?.name) {
        formData.append("event_image", image);
      }
      formData.append(
        "is_student",
        isStudent?.includes("Yes") ? "true" : "false"
      );
      if (info) {
        formData.append("info", info);
      }
      setPostSpinner(true);
      const url = eventId ? constant.updateZeebraEvent : constant.createEvent;
      setDisable(true);
      await axiosInstance.post(`${constant.admin}${url}`, formData);
      goBack();
      setPostSpinner(false);
    } catch (error: any) {
      setPostSpinner(false);
      setOpenSnackbar(true);
      setSnackbarMessage(error?.data?.message);
      setDisable(false);
    }
  };

  const validation = (): void => {
    let isValid = true;
    if (!title?.trim()) {
      isValid = false;
      error.title = validationMessage.emptyTitle;
    } else if (!checkBlankString(title)) {
      isValid = false;
      error.title = validationMessage.invalidTitle;
    } else {
      error.title = "";
    }
    if (isStudent?.length === 0) {
      isValid = false;
      error.selection = validationMessage.emptySelection;
    } else {
      error.selection = "";
    }
    if (isStudent.includes("Yes")) {
      if (!universityName) {
        isValid = false;
        error.university = validationMessage.universitySelection;
      } else {
        error.university = "";
      }
    }
    if (isStudent.includes("No")) {
      if (!areaName) {
        isValid = false;
        error.area = validationMessage.areaSelection;
      } else {
        error.area = "";
      }
    }
    if (!date) {
      isValid = false;
      error.date = validationMessage.dateSelection;
    } else {
      error.date = "";
    }
    if (!time) {
      isValid = false;
      error.time = validationMessage.timeSelection;
    } else {
      error.time = "";
    }
    if (!address?.trim()) {
      isValid = false;
      error.address = validationMessage.emptyAddress;
    } else {
      error.address = "";
    }
    if (!noOfTickets?.trim()) {
      isValid = false;
      error.noOfTickets = validationMessage.emptyNoOfTickets;
    } else if (!checkNumeric(noOfTickets) || parseInt(noOfTickets) === 0) {
      isValid = false;
      error.noOfTickets = validationMessage.invalidNoOfTickets;
    } else {
      error.noOfTickets = "";
    }
    if (!ticketPrice?.trim()) {
      isValid = false;
      error.ticketPrice = validationMessage.emptyTicketPrice;
    } else if (!checkNumeric(ticketPrice) || parseInt(ticketPrice) === 0) {
      isValid = false;
      error.ticketPrice = validationMessage.invalidTicketPrice;
    } else {
      error.ticketPrice = "";
    }
    if (!info?.trim()) {
      isValid = false;
      error.info = validationMessage.emptyInfo;
    } else {
      error.info = "";
    }
    setError({ ...error });
    if (isValid) {
      createEvent();
    }
  };

  const deleteEvent = async () => {
    /* API call for deleting event */
    try {
      const formData = {
        id: eventId,
      };
      setDeleteSpinner(true);
      setDisable(true);
      await axiosInstance.post(
        `${constant.admin}${constant.deleteEvent}`,
        formData
      );
      setDeleteSpinner(false);
      handleCloseDialog();
      goBack();
    } catch (error: any) {
      setDeleteSpinner(false);
      setOpenSnackbar(true);
      setSnackbarMessage(error.data.message);
      setDisable(false);
    }
  };

  return {
    goBack,
    eventId,
    handleCloseDialog,
    handleOpenDialog,
    openDialog,
    editable,
    setEditable,
    openSnackbar,
    setOpenSnackbar,
    snackbarMessage,
    setAddress,
    setInfo,
    setNoOfTickets,
    setTicketPrice,
    setTitle,
    address,
    areaName,
    date,
    image,
    info,
    isStudent,
    noOfTickets,
    ticketPrice,
    time,
    title,
    universityName,
    error,
    areaData,
    universityData,
    handleUniversityChange,
    handleAreaChange,
    handleImageUpload,
    postSpinner,
    validation,
    onSelect,
    deleteSpinner,
    deleteEvent,
    onChangeTime,
    onChangeDate,
    today,
    disable,
  };
};

export default EventInfoController;
