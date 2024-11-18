import { useEffect, useRef, useState } from "react";
import moment from "moment";
import socketIO from "socket.io-client";
import { useNavigate, useParams } from "react-router-dom";
import { axiosInstance } from "../../../../../services/api/api";
import { constant } from "../../../../../services/constant";
import {
  EventInfoProps,
  UserEventInfoControllerProps,
} from "./userEventInfo.interface";
import { ItemProps } from "../../../../../component/userInvitationCard/userInvitationCard.interface";
import { useAppSelector } from "../../../../../services/redux/controller";

const UserEventInfoController = (): UserEventInfoControllerProps => {
  const [openDialog, setOpenDialog] = useState<boolean>(false);
  const [eventInfo, setEventInfo] = useState<EventInfoProps>();
  const [deleteSpinner, setDeleteSpinner] = useState<boolean>(false);
  const [openSnackbar, setOpenSnackbar] = useState<boolean>(false);
  const [snackbarMessage, setSnackbarMessage] = useState<string>();
  const [loading, setLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<string>();
  const [socketData, setSocketData] = useState<any>(undefined);
  const [chat, setChat] = useState<any[]>([]);
  const [socketConnect, setSocketConnect] = useState<boolean>(false);
  const [imageList, setImageList] = useState<string[]>();
  const [open, setOpen] = useState<boolean>(false);
  const [invitation, setInvitation] = useState<ItemProps[]>();

  const { userData } = useAppSelector((state) => state?.userReducer);

  const { userEventId } = useParams();

  useEffect(() => {
    getUserEvents();
    getInvitation();
  }, []);

  useEffect(() => {
    initSocket();
    return () => {
      if (socketData) {
        setSocketConnect(false);
        socketData.disconnect();
      }
    };
  }, []);

  useEffect(() => {
    if (socketData) {
      socketData.emit("joinGroup", { chat_id: userEventId });
      socketData.on("getMessage", receivedData);
    }
  }, [socketData]);

  const getInvitation = async () => {
    /* API call for getting invitation list */
    try {
      const { data } = await axiosInstance.get(
        `${constant.admin}${constant.getInvitationList}?event_id=${userEventId}`
      );
      setInvitation(data?.data);
    } catch (error: any) {}
  };

  const initSocket = () => {
    const socket = socketIO(constant.socket, {
      autoConnect: true,
      transports: ["websocket"],
    });

    socket.on("connect", () => {
      setSocketData(socket);
      setSocketConnect(true);
    });
  };

  const onDelete = (id: string) => {
    /* Functionality to delete message */
    const data = {
      chat_id: userEventId,
      from: {
        id: userData?._id,
        type: "Admin",
      },
      message_id: id,
    };
    socketData.emit("Deletemessage", data);
  };

  const receivedData = (message: any) => {
    if (message && message?.messages) {
      const chatArray = message?.messages?.map((item: any) => {
        return {
          id: item?._id,
          image:
            item?.from?.id !== userData?._id
              ? item?.from?.profile
              : userData?.image,
          message: item?.messages,
          userId: item?.from?.id,
          name: item?.from?.name,
          time: moment(item?.time).format("h:mm A"),
          images: item?.image,
        };
      });
      setChat(chatArray);
    }
  };

  const onSendMessage = (): void => {
    let data = {
      messages: message,
      from: {
        id: userData?._id,
        type: "Admin",
      },
      chat_id: userEventId,
    };
    if (message?.trim()) {
      socketData?.emit("message", data);
      setMessage("");
    }
  };

  const handleUpload = async (e: any) => {
    /* Functionality to upload image file */
    let selectedFile = e.target.files[0];

    let isValid = true;
    const fileType = ["image/jpeg", "image/jpg", "image/png", "video/mp4"];
    if (!fileType.includes(selectedFile.type)) {
      isValid = false;
      setOpenSnackbar(true);
      setSnackbarMessage("Please choose valid file");
    } else if (selectedFile?.size > 5 * 1000000) {
      isValid = false;
      setOpenSnackbar(true);
      setSnackbarMessage("Please choose a file that is 5 MB or smaller.");
    }
    if (isValid) {
      const formData = new FormData();

      if (userEventId) {
        formData.append("event_id", userEventId);
      }
      formData.append("admin_id", userData?._id);
      formData.append("user_chat_image", selectedFile);
      formData.append("type", "Admin");

      try {
        const { data } = await axiosInstance.post(
          `${constant.admin}${constant.imageUpload}`,
          formData
        );

        const list = {
          id: data?.data?._id,
          image: userData?.image,
          userId: userData?._id,
          name: userData?.name,
          time: moment(data?.data?.time).format("h:mm A"),
          images: data?.data?.image,
        };
        setChat([...chat, list]);
      } catch (error: any) {}
    }
  };

  const onMore = (images: string[]): void => {
    setImageList(images);
    setOpen(true);
  };

  const onClose = (): void => {
    setOpen(false);
  };

  const navigation = useNavigate();

  const goBack = (): void => {
    navigation(-1);
  };

  const handleOpenDialog = (): void => {
    setOpenDialog(true);
  };

  const handleCloseDialog = (): void => {
    setOpenDialog(false);
  };

  const getUserEvents = async () => {
    /* API call for getting user events */
    try {
      setLoading(true);
      const { data } = await axiosInstance.get(
        `${constant.admin}${constant.getAllUserEvents}`
      );
      const list = data?.data?.filter(
        (item: any) => item?._id === userEventId
      )[0];
      setLoading(false);
      setEventInfo(list);
    } catch (error: any) {
      setLoading(false);
      setOpenSnackbar(true);
      setSnackbarMessage(error?.data?.message);
    }
  };

  const deleteUserEvent = async () => {
    /* API call for deleting user event */
    try {
      setDeleteSpinner(true);
      const formData = {
        event_id: userEventId,
      };
      await axiosInstance.post(
        `${constant.admin}${constant.deleteUserEvent}`,
        formData
      );
      setDeleteSpinner(false);
      handleCloseDialog();
      goBack();
    } catch (error: any) {
      setDeleteSpinner(false);
      handleCloseDialog();
      setOpenSnackbar(true);
      setSnackbarMessage(error?.data?.message);
    }
  };

  return {
    goBack,
    userEventId,
    openDialog,
    handleCloseDialog,
    handleOpenDialog,
    deleteSpinner,
    deleteUserEvent,
    setOpenSnackbar,
    snackbarMessage,
    openSnackbar,
    loading,
    eventInfo,
    onSendMessage,
    message,
    setMessage,
    chat,
    onDelete,
    handleUpload,
    onMore,
    imageList,
    open,
    onClose,
    invitation,
  };
};

export default UserEventInfoController;
