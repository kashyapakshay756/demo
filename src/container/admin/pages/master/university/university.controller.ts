import { useEffect, useState } from "react";
import moment from "moment";
import { axiosInstance } from "../../../../../services/api/api";
import {
  checkBlankString,
  checkEmail,
  checkString,
} from "../../../../../utils/validation/validation";
import { constant } from "../../../../../services/constant";
import {
  ErrorProps,
  UniversityControllerProps,
  UniversityDataProps,
} from "./university.interface";
import validationMessage from "../../../../../utils/validation/validationMessage";

const UniversityController = (): UniversityControllerProps => {
  const [search, setSearch] = useState<string>();
  const [open, setOpen] = useState<boolean>(false);
  const [university, setUniversity] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [index, setIndex] = useState<string>();
  const [loading, setLoading] = useState<boolean>(false);
  const [addSpinner, setAddSpinner] = useState<boolean>(false);
  const [removeSpinner, setRemoveSpinner] = useState<boolean>(false);
  const [openSnackbar, setOpenSnackbar] = useState<boolean>(false);
  const [openDeleteDialog, setOpenDeleteDialog] = useState<boolean>(false);
  const [disable, setDisable] = useState<boolean>(false);
  const [snackbarMessage, setSnackbarMessage] = useState<string>();
  const [universityData, setUniversityData] = useState<UniversityDataProps[]>();
  const [filterData, setFilterData] = useState<
    UniversityDataProps[] | null | undefined
  >(null);
  const [error, setError] = useState<ErrorProps>({
    university: undefined,
    email: undefined,
  });

  useEffect(() => {
    if (index?.length) {
      let data = universityData?.filter((item) => item.id === index);
      if (data) {
        setUniversity(data[0].universityName);
        setEmail(data[0].email);
      }
    } else {
      setUniversity("");
      setEmail("");
    }
  }, [index]);

  useEffect(() => {
    getUniversityDetails("refresh");
  }, []);

  const universitySearch = (value: string): void => {
    /* University search functionality */
    const filterData = universityData?.filter((item: UniversityDataProps) => {
      let search = [item?.universityName, item?.email];
      let regex = search?.toString()?.toLowerCase();
      return regex?.includes(value?.toLowerCase());
    });
    setSearch(value);
    setFilterData(filterData);
  };

  const getUniversityDetails = async (refresh?: string) => {
    /* API call for getting university details */
    try {
      if (refresh) {
        setLoading(true);
      }
      const { data } = await axiosInstance.get(
        `${constant.admin}${constant.universityGetallAdmin}`
      );
      setLoading(false);
      const list = data?.data?.map((item: any, index: number) => ({
        id: item._id,
        searialNo: index + 1,
        universityName: item.university_name,
        email: item.email,
        date: moment(item.createdAt).format("DD/MM/YYYY"),
      }));
      setUniversityData(list);
    } catch (error) {
      setLoading(false);
    }
  };

  const addUniversity = async () => {
    /** API call for adding University */
    try {
      const formData = {
        university_name: university,
        email: email,
      };
      setAddSpinner(true);
      setDisable(true);
      const { data } = await axiosInstance.post(
        `${constant.admin}${constant.universityCreate}`,
        formData
      );
      setAddSpinner(false);
      handleClose();
      setOpenSnackbar(true);
      getUniversityDetails();
      setSnackbarMessage(data.message);
    } catch (error: any) {
      setAddSpinner(false);
      handleClose();
      setOpenSnackbar(true);
      setSnackbarMessage(error.data.message);
      setDisable(false);
    }
  };

  const editUniversityDetail = async () => {
    /** API call for editing University detail */
    try {
      const formData = {
        _id: index,
        university_name: university,
        email: email,
      };
      setAddSpinner(true);
      setDisable(true);
      const { data } = await axiosInstance.post(
        `${constant.admin}${constant.universityUpdate}`,
        formData
      );
      setAddSpinner(false);
      handleClose();
      setOpenSnackbar(true);
      getUniversityDetails();
      setSnackbarMessage(data.message);
    } catch (error: any) {
      setAddSpinner(false);
      handleClose();
      setOpenSnackbar(true);
      setSnackbarMessage(error.data.message);
      setDisable(false);
    }
  };

  const removeUniversity = async () => {
    /** API call for removing University */
    try {
      const formData = {
        id: index,
      };
      setRemoveSpinner(true);
      setDisable(true);
      const { data } = await axiosInstance.post(
        `${constant.admin}${constant.universityDelete}`,
        formData
      );
      setRemoveSpinner(false);
      setOpenDeleteDialog(false);
      setOpenSnackbar(true);
      getUniversityDetails();
      setSnackbarMessage(data.message);
      setDisable(false)
    } catch (error: any) {
      setRemoveSpinner(false);
      setOpenDeleteDialog(false);
      setOpenSnackbar(true);
      setSnackbarMessage(error.data.message);
      setDisable(false);
    }
  };

  const validation = (): void => {
    let isValid = true;
    if (!university?.trim()) {
      isValid = false;
      error.university = validationMessage.emptyUniversityName;
    } else if (!checkBlankString(university) || !checkString(university)) {
      isValid = false;
      error.university = validationMessage.invalidUniversityName;
    } else {
      error.university = "";
    }
    if (!email?.trim()) {
      isValid = false;
      error.email = validationMessage.emptyEmail;
    } else if (!checkEmail(email)) {
      isValid = false;
      error.email = validationMessage.invalidEmail;
    } else {
      error.email = "";
    }
    setError({ ...error });
    if (isValid) {
      if (index) {
        editUniversityDetail();
      } else {
        addUniversity();
      }
    }
  };

  const handleOpen = (): void => {
    setOpen(true);
    setIndex("");
    setDisable(false);
  };

  const handleClose = (): void => {
    setOpen(false);
    setIndex("");
    setUniversity("");
    setEmail("");
    setError({
      university: undefined,
      email: undefined,
    });
    setDisable(false);
  };

  const onDeleteButton = (id: string): void => {
    setIndex(id);
    setOpenDeleteDialog(true);
    setDisable(false);
  };

  const onEditButton = (id: string): void => {
    setIndex(id);
    setOpen(true);
  };

  const handleCloseDialog = (): void => {
    setOpenDeleteDialog(false);
    setDisable(false);
  };

  return {
    handleClose,
    handleOpen,
    open,
    search,
    setEmail,
    setUniversity,
    email,
    university,
    loading,
    universityData,
    openSnackbar,
    setOpenSnackbar,
    snackbarMessage,
    addSpinner,
    removeSpinner,
    error,
    validation,
    removeUniversity,
    index,
    onDeleteButton,
    handleCloseDialog,
    openDeleteDialog,
    onEditButton,
    universitySearch,
    filterData,
    disable,
  };
};

export default UniversityController;
