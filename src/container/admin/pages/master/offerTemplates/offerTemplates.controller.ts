import { useEffect, useState } from "react";
import moment from "moment";
import { axiosInstance } from "../../../../../services/api/api";
import { checkString } from "../../../../../utils/validation/validation";
import { constant } from "../../../../../services/constant";
import {
  OfferTemplatesControllerProps,
  ErrorProps,
  TemplateDataProps,
} from "./offerTemplates.interface";
import validationMessage from "../../../../../utils/validation/validationMessage";

const OfferTemplatesController = (): OfferTemplatesControllerProps => {
  const [templateData, setTemplateData] = useState<
    TemplateDataProps[] | undefined
  >();
  const [search, setSearch] = useState<string>();
  const [title, setTitle] = useState<string>();
  const [pdf, setPdf] = useState<any>();
  const [loading, setLoading] = useState<boolean>(false);
  const [disable, setDisable] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);
  const [index, setIndex] = useState<string>();
  const [addSpinner, setAddSpinner] = useState<boolean>(false);
  const [removeSpinner, setRemoveSpinner] = useState<boolean>(false);
  const [openDeleteDialog, setOpenDeleteDialog] = useState<boolean>(false);
  const [openSnackbar, setOpenSnackbar] = useState<boolean>(false);
  const [snackbarMessage, setSnackbarMessage] = useState<string>();
  const [filterData, setFilterData] = useState<
    TemplateDataProps[] | null | undefined
  >(null);
  const [error, setError] = useState<ErrorProps>({
    title: undefined,
    pdfError: undefined,
  });

  useEffect(() => {
    getAllTemplates("refresh");
  }, []);

  useEffect(() => {
    if (index?.length) {
      let data = templateData?.filter((item: any) => item.id === index);
      if (data) {
        setTitle(data[0].title);
        setPdf(data[0].template);
      }
    } else {
      setTitle("");
      setPdf("");
    }
  }, [index]);

  const getAllTemplates = async (refresh?: string) => {
    /* API call for getting template list */
    try {
      if (refresh) {
        setLoading(true);
      }
      const { data } = await axiosInstance.get(
        `${constant.admin}${constant.adminGetAllTemplates}`
      );
      const list = data?.data?.map((item: any, index: number) => ({
        id: item._id,
        searialNo: index + 1,
        title: item.title,
        template: item.template.toString(),
        date: moment(item.createdAt).format("DD/MM/YYYY"),
      }));
      setLoading(false);
      setTemplateData(list);
    } catch (error) {
      setLoading(false);
    }
  };

  const onEditButton = (id: string) => {
    setIndex(id);
    setOpen(true);
  };

  const handleOpen = (): void => {
    setOpen(true);
    setIndex("");
    setDisable(false);
  };

  const handleClose = (): void => {
    setOpen(false);
    setIndex("");
    setError({ title: undefined, pdfError: undefined });
    setTitle("");
    setPdf("");
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

  const handleSearch = (value: string): void => {
    /* Search functionality */
    const filterData = templateData?.filter((item: TemplateDataProps) => {
      let search = [item?.title];
      let regex = search?.toString()?.toLowerCase();
      return regex?.includes(value?.toLowerCase());
    });
    setSearch(value);
    setFilterData(filterData);
  };

  const handleUpload = (e: any): void => {
    /* Functionality to choose pdf file */
    const fileType = ["application/pdf"];
    let selectedFile = e.target.files[0];
    if (selectedFile) {
      if (selectedFile?.size > 20 * 1000000) {
        setPdf("");
        error.pdfError = validationMessage.pdfSize;
      } else {
        if (selectedFile && fileType.includes(selectedFile.type)) {
          setPdf(selectedFile);
          error.pdfError = undefined;
        } else {
          setPdf("");
          error.pdfError = validationMessage.emptyPdf;
        }
      }

      setError({ ...error });
    }
  };

  const addTemplate = async () => {
    /* API call for adding template */
    try {
      setAddSpinner(true);
      const formData = new FormData();
      if (title) {
        formData.append("title", title);
      }
      formData.append("template", pdf);
      setDisable(true);
      const { data } = await axiosInstance.post(
        `${constant.admin}${constant.addTemplate}`,
        formData
      );
      setAddSpinner(false);
      handleClose();
      setDisable(false);
      setOpenSnackbar(true);
      getAllTemplates();
      setSnackbarMessage(data?.message);
      setIndex("");
    } catch (error: any) {
      setAddSpinner(false);
      handleClose();
      setOpenSnackbar(true);
      setSnackbarMessage(error?.data?.message);
      setDisable(false);
    }
  };

  const editTemplate = async () => {
    /* API call for updating template */
    try {
      setAddSpinner(true);
      const formData = new FormData();
      if (index) {
        formData.append("id", index);
      }
      if (title) {
        formData.append("title", title);
      }
      if (pdf?.name) {
        formData.append("template", pdf);
      }
      setDisable(true);
      const { data } = await axiosInstance.post(
        `${constant.admin}${constant.updateTemplate}`,
        formData
      );
      setAddSpinner(false);
      setOpen(false);
      setDisable(false);
      setOpenSnackbar(true);
      getAllTemplates();
      setSnackbarMessage(data?.message);
      setIndex("");
    } catch (error: any) {
      setAddSpinner(false);
      setOpen(false);
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
    } else if (!checkString(title)) {
      isValid = false;
      error.title = validationMessage.invalidTitle;
    } else {
      error.title = undefined;
    }
    if (!pdf) {
      isValid = false;
      error.pdfError = validationMessage.emptyPdf;
    } else {
      error.pdfError = undefined;
    }
    setError({ ...error });
    if (isValid) {
      if (index) {
        editTemplate();
      } else {
        addTemplate();
      }
    }
  };

  const removeTemplate = async () => {
    /* API call for removing template */
    try {
      setRemoveSpinner(true);
      const formData = {
        id: index,
      };
      setDisable(true);
      const { data } = await axiosInstance.post(
        `${constant.admin}${constant.deleteTemplate}`,
        formData
      );
      setRemoveSpinner(false);
      setOpenDeleteDialog(false);
      setDisable(false);
      setOpenSnackbar(true);
      setIndex("");
      getAllTemplates();
      setSnackbarMessage(data?.message);
    } catch (error: any) {
      setRemoveSpinner(false);
      setOpenDeleteDialog(false);
      setOpenSnackbar(true);
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
    snackbarMessage,
    validation,
    handleUpload,
    pdf,
    templateData,
    setTitle,
    title,
    onEditButton,
    handleCloseDeleteDialog,
    handleOpenDeleteDialog,
    removeTemplate,
    disable,
  };
};

export default OfferTemplatesController;
