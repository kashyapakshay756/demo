import { SyntheticEvent, useEffect, useState } from "react";
import moment from "moment";
import { axiosInstance } from "../../../../../services/api/api";
import { constant } from "../../../../../services/constant";
import {
  ErrorProps,
  HowToVideosControllerProps,
  VideoListProps,
} from "./howToVideos.interface";
import validationMessage from "../../../../../utils/validation/validationMessage";
import { TabChangeProps } from "../../users/personalInfo/personalInfo.interface";

const HowToVideosController = (): HowToVideosControllerProps => {
  const [loading, setLoading] = useState<boolean>(false);
  const [search, setSearch] = useState<string>();
  const [title, setTitle] = useState<string>();
  const [videoLink, setVideoLink] = useState<any>();
  const [open, setOpen] = useState<boolean>(false);
  const [index, setIndex] = useState<string>();
  const [addSpinner, setAddSpinner] = useState<boolean>(false);
  const [removeSpinner, setRemoveSpinner] = useState<boolean>(false);
  const [openDeleteDialog, setOpenDeleteDialog] = useState<boolean>(false);
  const [openSnackbar, setOpenSnackbar] = useState<boolean>(false);
  const [snackbarMessage, setSnackbarMessage] = useState<string>();
  const [disable, setDisable] = useState<boolean>(false);
  const [videoList, setVideoList] = useState<VideoListProps[] | undefined>();
  const [userVideoList, setUserVideoList] = useState<
    VideoListProps[] | undefined
  >();
  const [tabValue, setTabValue] = useState<number>(0);
  const [filterData, setFilterData] = useState<
    VideoListProps[] | null | undefined
  >(null);
  const [error, setError] = useState<ErrorProps>({
    title: undefined,
    videoLink: undefined,
  });

  useEffect(() => {
    getVideoList("refresh");
  }, []);

  useEffect(() => {
    if (index?.length) {
      let data =
        tabValue === 0
          ? videoList?.filter((item: VideoListProps) => item.id === index)
          : userVideoList?.filter((item: VideoListProps) => item.id === index);
      if (data) {
        setTitle(data[0].title);
        setVideoLink(data[0].video);
      }
    } else {
      setTitle("");
      setVideoLink("");
    }
  }, [index]);

  const handleTabValueChange = (event: SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
    setSearch("");
    setFilterData(null);
  };

  useEffect(() => {
    if (tabValue === 1 && !userVideoList?.length) {
      getVideoList("refresh");
    }
  }, [tabValue]);

  const tabChange = (index: number): TabChangeProps => {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  };

  const getVideoList = async (refresh?: string) => {
    /* API call for getting video list */
    try {
      if (refresh) {
        setLoading(true);
      }
      const type = tabValue === 0 ? "business" : "user";
      const { data } = await axiosInstance.get(
        `${constant.admin}${constant.adminGetAllVideos}?type=${type}`
      );
      setLoading(false);
      const list = data?.data?.map((item: any, index: number) => ({
        id: item._id,
        searialNo: index + 1,
        title: item.title,
        video: item.video,
        date: moment(item.createdAt).format("DD/MM/YYYY"),
      }));
      if (tabValue === 0) {
        setVideoList(list);
      } else {
        setUserVideoList(list);
      }
    } catch (error) {
      setLoading(false);
    }
  };

  const handleOpen = (): void => {
    setOpen(true);
    setDisable(false);
  };

  const handleClose = (): void => {
    setOpen(false);
    setIndex("");
    setError({ title: undefined, videoLink: undefined });
    setTitle("");
    setVideoLink("");
  };

  const handleOpenDeleteDialog = (id: string): void => {
    setOpenDeleteDialog(true);
    setIndex(id);
    setDisable(false);
  };

  const handleCloseDeleteDialog = (): void => {
    setOpenDeleteDialog(false);
    setDisable(false);
  };

  const onEditButton = (id: string): void => {
    setOpen(true);
    setIndex(id);
  };

  const handleSearch = (value: string): void => {
    /* Search functionality */
    const filterData = videoList?.filter((item: VideoListProps) => {
      let search = [item?.title];
      let regex = search?.toString()?.toLowerCase();
      return regex?.includes(value?.toLowerCase());
    });
    const userVideoFilter = userVideoList?.filter((item: VideoListProps) => {
      let search = [item?.title];
      let regex = search?.toString()?.toLowerCase();
      return regex?.includes(value?.toLowerCase());
    });
    setSearch(value);
    setFilterData(tabValue === 0 ? filterData : userVideoFilter);
  };

  const handleUpload = (e: any): void => {
    /* Functionality to choose image file */
    const fileType = ["video/mp4"];
    let selectedFile = e.target.files[0];
    if (selectedFile) {
      if (selectedFile?.size > 20 * 1000000) {
        setVideoLink("");
        error.videoLink = validationMessage.videoSize;
      } else {
        if (selectedFile && fileType.includes(selectedFile.type)) {
          setVideoLink(selectedFile);
          error.videoLink = undefined;
        } else {
          setVideoLink("");
          error.videoLink = validationMessage.emptyVideo;
        }
      }
      setError({ ...error });
    }
  };

  const addVideo = async () => {
    /* API call for adding video */
    try {
      setAddSpinner(true);
      const formData = new FormData();
      if (title) {
        formData.append("title", title);
      }
      formData.append("video", videoLink);
      formData.append("type", tabValue === 0 ? "business" : "user");
      setDisable(true);
      const { data } = await axiosInstance.post(
        `${constant.admin}${constant.uploadVideo}`,
        formData
      );
      setAddSpinner(false);
      handleClose();
      setDisable(false);
      setOpenSnackbar(true);
      getVideoList();
      setSnackbarMessage(data?.message);
    } catch (error: any) {
      setAddSpinner(false);
      setDisable(false);
      handleClose();
      setOpenSnackbar(true);
      setSnackbarMessage(error?.data?.message);
    }
  };

  const updateVideo = async () => {
    /* API call for updating video */
    try {
      setAddSpinner(true);
      const formData = new FormData();
      if (index) {
        formData.append("id", index);
      }
      if (title) {
        formData.append("title", title);
      }
      if (videoLink?.name) {
        formData.append("video", videoLink);
      }
      setDisable(true);
      const { data } = await axiosInstance.post(
        `${constant.admin}${constant.updateVideo}`,
        formData
      );
      setAddSpinner(false);
      setOpen(false);
      setDisable(false);
      setOpenSnackbar(true);
      setIndex("");
      getVideoList();
      setSnackbarMessage(data?.message);
    } catch (error: any) {
      setAddSpinner(false);
      setOpen(false);
      setOpenSnackbar(true);
      setIndex("");
      setSnackbarMessage(error?.data?.message);
      setDisable(false);
    }
  };

  const validation = (): void => {
    let isValid = true;
    if (!title?.trim()) {
      isValid = false;
      error.title = validationMessage.emptyTitle;
    } else {
      error.title = undefined;
    }
    if (!videoLink) {
      isValid = false;
      error.videoLink = validationMessage.emptyVideo;
    } else {
      error.videoLink = undefined;
    }
    setError({ ...error });
    if (isValid) {
      if (index) {
        updateVideo();
      } else {
        addVideo();
      }
    }
  };

  const removeVideo = async () => {
    /* API call for removing video */
    try {
      setRemoveSpinner(true);
      const formData = {
        id: index,
      };
      setDisable(true);
      const { data } = await axiosInstance.post(
        `${constant.admin}${constant.deleteVideo}`,
        formData
      );
      setRemoveSpinner(false);
      setOpenDeleteDialog(false);
      setDisable(false);
      setOpenSnackbar(true);
      setIndex("");
      getVideoList();
      setSnackbarMessage(data?.message);
    } catch (error: any) {
      setRemoveSpinner(false);
      setOpenDeleteDialog(false);
      setOpenSnackbar(true);
      setIndex("");
      setSnackbarMessage(error?.data?.message);
      setDisable(false);
    }
  };

  return {
    loading,
    handleSearch,
    search,
    handleClose,
    handleOpen,
    open,
    index,
    addSpinner,
    error,
    filterData,
    openDeleteDialog,
    openSnackbar,
    removeSpinner,
    setOpenSnackbar,
    videoList,
    snackbarMessage,
    setTitle,
    validation,
    title,
    videoLink,
    handleUpload,
    handleCloseDeleteDialog,
    handleOpenDeleteDialog,
    onEditButton,
    removeVideo,
    handleTabValueChange,
    tabChange,
    tabValue,
    userVideoList,
    disable,
  };
};

export default HowToVideosController;
