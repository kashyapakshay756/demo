import { useEffect, useRef, useState } from "react";
import { SelectChangeEvent } from "@mui/material";
import moment from "moment";
import { useNavigate, useParams } from "react-router-dom";
import { axiosInstance } from "../../../../services/api/api";
import { constant } from "../../../../services/constant";
import { CreatePostControllerProps, ErrorProps } from "./createPost.interface";
import { ItemsProps } from "../../../../component/chatCard/chatCard.interface";
import { TableCellDataProps } from "../../../../component/customTable/customTable.interface";
import { useAppSelector } from "../../../../services/redux/controller";
import validationMessage from "../../../../utils/validation/validationMessage";

const CreatePostController = (): CreatePostControllerProps => {
  const [editable, setEditable] = useState<boolean>(false);
  const [universityData, setUniversityData] = useState<TableCellDataProps[]>(
    []
  );
  const [areaData, setAreaData] = useState<TableCellDataProps[]>([]);
  const [disable, setDisable] = useState<boolean>(false);
  const [dropDownData, setDropDownData] = useState<TableCellDataProps[]>();
  const [post, setPost] = useState<string>("");
  const [isStudent, setIsStudent] = useState<string>("Yes");
  const [university, setUniversity] = useState<string>("");
  const [info, setInfo] = useState<string>("");
  const [isRequestOffer, setIsRequestOffer] = useState<string>("Yes");
  const [image, setImage] = useState<any>();
  const [postSpinner, setPostSpinner] = useState<boolean>(false);
  const [deleteSpinner, setDeleteSpinner] = useState<boolean>(false);
  const [openDialog, setOpenDialog] = useState<boolean>(false);
  const [openSnackbar, setOpenSnackbar] = useState<boolean>(false);
  const [snackbarMessage, setSnackbarMessage] = useState<string>();
  const [comment, setComment] = useState<string>("");
  const [parentId, setParentId] = useState<string>("");
  const [commentData, setCommentData] = useState<ItemsProps[]>([]);
  const [username, setUsername] = useState<string>();
  const [error, setError] = useState<ErrorProps>({
    postName: undefined,
    university: undefined,
    info: undefined,
    image: undefined,
  });

  const listRef = useRef(null);

  const navigation = useNavigate();

  const { posts } = useAppSelector((state) => state.userDataReducer);

  const { postId, from } = useParams();

  const postInfo = posts?.filter((item: any) => item?._id === postId)[0];

  useEffect(() => {
    getComments();
    getUniversityData();
    getAreaData();
    if (!postId) {
      setEditable(true);
    }
  }, []);

  useEffect(() => {
    if (isStudent === "Yes") {
      setDropDownData(universityData);
    } else {
      setDropDownData(areaData);
    }
  }, [universityData, areaData, isStudent]);

  useEffect(() => {
    if (postId) {
      setPost(postInfo?.post_name?.toString());
      setIsStudent(postInfo?.is_student === true ? "Yes" : "No");
      setInfo(postInfo?.info?.toString());
      if (postInfo?.is_student === true) {
        setUniversity(postInfo?.university_name?._id?.toString());
      } else {
        setUniversity(postInfo?.area_down_name?._id?.toString());
      }
      setIsRequestOffer(postInfo?.is_offer_request === true ? "Yes" : "No");
      setImage(postInfo?.post_image?.toString());
    }
  }, [postId]);

  const goBack = (): void => {
    navigation(-1);
  };

  const handleUniversityChange = (event: SelectChangeEvent): void => {
    setUniversity(event.target.value);
  };

  const handleOpenDialog = (): void => {
    setOpenDialog(true);
    setDisable(false);
  };

  const handleCloseDialog = (): void => {
    setOpenDialog(false);
    setDisable(false);
  };

  const getUniversityData = async () => {
    /* API call for getting University Data */
    try {
      const { data } = await axiosInstance.get(
        `${constant.admin}${constant.universityGetallAdmin}`
      );
      const list = data?.data?.map((item: any) => ({
        id: item?._id,
        title: item?.university_name,
      }));
      setUniversityData(list);
    } catch (error: any) {}
  };

  const getAreaData = async () => {
    /* API call for getting Area Data */
    try {
      const { data } = await axiosInstance.get(
        `${constant.admin}${constant.areaGetallAdmin}`
      );
      const list = data?.data?.map((item: any) => ({
        id: item?._id,
        title: item?.area_name,
      }));
      setAreaData(list);
    } catch (error: any) {}
  };

  const handleImageUpload = (e: any): void => {
    /* Functionality to choose image file */
    const fileType = ["image/png", "image/jpeg"];
    let selectedFile = e.target.files[0];
    if (selectedFile) {
      if (selectedFile && fileType.includes(selectedFile.type)) {
        setImage(selectedFile);
        error.image = undefined;
      } else {
        setImage("");
        error.image = "Please select image file";
      }
      setError({ ...error });
    } else {
      alert("select your file");
    }
  };

  const createPost = async () => {
    /* API call for creating Post */
    try {
      setPostSpinner(true);
      const formData = new FormData();
      formData.append("post_name", post);
      if (isStudent === "Yes") {
        formData.append("university_name", university);
      } else {
        formData.append("area_down_name", university);
      }
      if (image) {
        formData.append("post_image", image);
      }
      formData.append("info", info);
      formData.append("is_student", isStudent === "Yes" ? "true" : "false");
      formData.append(
        "is_offer_request",
        isRequestOffer === "Yes" ? "true" : "false"
      );
      setDisable(true);
      const { data } = await axiosInstance.post(
        `${constant.admin}${constant.addPostInfo}`,
        formData
      );
      setPostSpinner(false);
      setOpenSnackbar(true);
      setSnackbarMessage(data?.message);
      setTimeout(() => {
        navigation(-1);
      }, 2000);
    } catch (error: any) {
      setPostSpinner(false);
      setOpenSnackbar(true);
      setSnackbarMessage(error?.data?.message);
      setDisable(false);
    }
  };

  const editPost = async () => {
    /* API call for editing Post */
    try {
      setPostSpinner(true);
      const formData = new FormData();
      if (postId) {
        formData.append("id", postId);
      }
      if (post) {
        formData.append("post_name", post);
      }
      formData.append("is_student", isStudent === "Yes" ? "true" : "false");
      if (info) {
        formData.append("info", info);
      }
      if (isStudent === "Yes") {
        formData.append("university_name", university);
      } else {
        formData.append("area_down_name", university);
      }
      if (image?.name) {
        formData.append("post_image", image);
      }
      formData.append(
        "is_offer_request",
        isRequestOffer === "Yes" ? "true" : "false"
      );
      setDisable(true);
      const { data } = await axiosInstance.post(
        `${constant.admin}${constant.postInfoUpdate}`,
        formData
      );
      setPostSpinner(false);
      setOpenSnackbar(true);
      setSnackbarMessage(data?.message);
      setTimeout(() => {
        navigation(-1);
      }, 2000);
    } catch (error: any) {
      setPostSpinner(false);
      setOpenSnackbar(true);
      setSnackbarMessage(error?.data?.message);
      setDisable(false);
    }
  };

  const validation = (): void => {
    let isValid = true;
    if (!post?.trim()) {
      isValid = false;
      error.postName = validationMessage.emptyPostName;
    } else {
      error.postName = "";
    }
    if (!university) {
      isValid = false;
      error.university = validationMessage.selection;
    } else {
      error.university = "";
    }
    if (!info?.trim()) {
      isValid = false;
      error.info = validationMessage.emptyInfo;
    } else {
      error.info = "";
    }
    setError({ ...error });
    if (isValid) {
      if (postId) {
        editPost();
      } else {
        createPost();
      }
    }
  };

  const deletePost = async () => {
    /* API call for deleting post */
    try {
      setDeleteSpinner(true);
      const formData = {
        id: postId,
      };
      setDisable(true);
      await axiosInstance.post(
        `${constant.admin}${constant.adminPostDelete}`,
        formData
      );
      setDeleteSpinner(false);
      handleCloseDialog();
      navigation(-1);
    } catch (error) {
      setDeleteSpinner(false);
      setDisable(false);
    }
  };

  const getComments = async () => {
    /* API call for getting comments */
    try {
      const formData = {
        id: postId,
      };
      const { data } = await axiosInstance.get(
        `${constant.admin}${constant.getAllComments}`,
        { params: formData }
      );

      const getReply = (id: string) => {
        let replyList: any = [];
        data.data.filter((item: any) => {
          if (item.parent_id === id) {
            replyList.push({
              id: item?._id,
              parentId: item?.parent_id,
              image: item?.admin_id
                ? item?.admin_id?.image
                : item?.user_id?.user_profile,
              message: item?.comment_message,
              userId: item?.admin_id ? item?.admin_id?._id : item?.user_id?._id,
              name: item?.admin_id
                ? item?.admin_id?.name
                : item?.user_id?.fullName,
              likes: item?.likes?.length,
              time: moment(item?.createdAt).format("h:mm a"),
            });
            return true;
          }
        });
        return replyList;
      };
      let final: any = [];
      data?.data?.filter((item: any) => {
        if (item.parent_id === null) {
          let temp = getReply(item?._id);
          final.push({
            id: item?._id,
            parentId: item?.parent_id,
            image: item?.admin_id
              ? item?.admin_id?.image
              : item?.user_id?.user_profile,
            message: item?.comment_message,
            userId: item?.admin_id ? item?.admin_id?._id : item?.user_id?._id,
            name: item?.admin_id
              ? item?.admin_id?.name
              : item?.user_id?.fullName,
            likes: item?.likes?.length,
            replies: temp,
            time: moment(item?.createdAt).format("h:mm a"),
          });
          return true;
        }
      });
      setCommentData(final);
    } catch (error) {}
  };

  const addComment = async () => {
    /* API call for adding comments */
    try {
      const formData = {
        post_id: postId,
        parent_id: parentId && parentId,
        comment_message: comment,
      };
      await axiosInstance.post(
        `${constant.admin}${constant.addCommentForPost}`,
        formData
      );
      setComment("");
      setParentId("");
      getComments();
    } catch (error) {}
  };

  const likeComment = async (id: string) => {
    /* API call for liking comment */
    try {
      const formData = {
        post_id: postId,
        comment_id: id,
      };
      await axiosInstance.post(
        `${constant.admin}${constant.likeOnComment}`,
        formData
      );
      getComments();
    } catch (error) {}
  };

  const deleteComment = async (id: string) => {
    /* API call for deleting comment */
    try {
      const formData = {
        post_id: postId,
        comment_id: id,
      };
      await axiosInstance.post(
        `${constant.admin}${constant.deleteComment}`,
        formData
      );
      getComments();
    } catch (error) {}
  };

  const uploadAdapter = (loader: any) => {
    return {
      upload: () => {
        return new Promise((resolve, reject) => {
          const body = new FormData();
          loader.file.then((file: any) => {
            body.append("ck_editer", file);
            axiosInstance
              .post(constant.ckEditorImage, body)
              .then((res) => {
                resolve({
                  default: `${constant.uploads}${res.data.data}`,
                });
              })
              .catch((err) => {
                reject(err);
              });
          });
        });
      },
    };
  };

  function uploadPlugin(editor: any) {
    editor.plugins.get("FileRepository").createUploadAdapter = (
      loader: any
    ) => {
      return uploadAdapter(loader);
    };
  }

  const handleInfo = (e: any, editor: any): void => {
    const data = editor.getData();
    setInfo(data);
  };

  return {
    post,
    setPost,
    university,
    handleUniversityChange,
    info,
    setInfo,
    goBack,
    isRequestOffer,
    setIsRequestOffer,
    isStudent,
    validation,
    error,
    setIsStudent,
    areaData,
    universityData,
    dropDownData,
    setDropDownData,
    handleImageUpload,
    postSpinner,
    image,
    openSnackbar,
    setOpenSnackbar,
    snackbarMessage,
    postId,
    editable,
    setEditable,
    deleteSpinner,
    deletePost,
    openDialog,
    handleCloseDialog,
    handleOpenDialog,
    from,
    commentData,
    likeComment,
    deleteComment,
    comment,
    setComment,
    addComment,
    parentId,
    setParentId,
    setUsername,
    username,
    listRef,
    disable,
    handleInfo,
    uploadPlugin,
  };
};

export default CreatePostController;
