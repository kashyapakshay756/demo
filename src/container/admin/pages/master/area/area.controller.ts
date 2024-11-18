import { useState, useEffect } from "react";
import moment from "moment";
import { AreaControllerProps, AreaDataProps } from "./area.interface";
import { axiosInstance } from "../../../../../services/api/api";
import {
  checkBlankString,
  checkString,
} from "../../../../../utils/validation/validation";
import { constant } from "../../../../../services/constant";
import validationMessage from "../../../../../utils/validation/validationMessage";

const AreaController = (): AreaControllerProps => {
  const [search, setSearch] = useState<string>();
  const [areaData, setAreaData] = useState<AreaDataProps[]>();
  const [filterData, setFilterData] = useState<
    AreaDataProps[] | null | undefined
  >(null);
  const [area, setArea] = useState<string>("");
  const [open, setOpen] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [addSpinner, setAddSpinner] = useState<boolean>(false);
  const [removeSpinner, setRemoveSpinner] = useState<boolean>(false);
  const [openSnackbar, setOpenSnackbar] = useState<boolean>(false);
  const [openDeleteDialog, setOpenDeleteDialog] = useState<boolean>(false);
  const [snackbarMessage, setSnackbarMessage] = useState<string>();
  const [disable, setDisable] = useState<boolean>(false);
  const [index, setIndex] = useState<string>();
  const [error, setError] = useState<string>();

  useEffect(() => {
    getArea("refresh");
  }, []);

  useEffect(() => {
    if (index) {
      const list = areaData?.filter((item: AreaDataProps) => item.id === index);
      if (list) {
        setArea(list[0]?.areaName);
      }
    } else {
      setArea("");
    }
  }, [index]);

  const handleOpen = (): void => {
    setOpen(true);
    setIndex("");
    setDisable(false);
  };

  const handleClose = (): void => {
    setOpen(false);
    setIndex("");
    setArea("");
    setError("");
    setDisable(false);
  };

  const areaSearch = (value: string): void => {
    /* Area search functionality */
    const filterData = areaData?.filter((item: AreaDataProps) => {
      let search = [item?.areaName];
      let regex = search?.toString()?.toLowerCase();
      return regex?.includes(value?.toLowerCase());
    });
    setSearch(value);
    setFilterData(filterData);
  };

  const getArea = async (refresh?: string) => {
    /* API call for getting area data */
    try {
      if (refresh) {
        setLoading(true);
      }
      const { data } = await axiosInstance.get(
        `${constant.admin}${constant.areaGetallAdmin}`
      );
      setLoading(false);
      let list = data.data.map((item: any, index: number) => ({
        id: item?._id,
        serialNo: index + 1,
        areaName: item?.area_name,
        date: moment(item?.createdAt).format("DD/MM/YYYY"),
      }));
      setAreaData(list);
    } catch (error) {
      setLoading(false);
    }
  };

  const onEditButton = (id: string): void => {
    setIndex(id);
    setOpen(true);
  };

  const onDeleteButton = (id: string): void => {
    setIndex(id);
    setOpenDeleteDialog(true);
    setDisable(false);
  };

  const handleCloseSnackbar = (): void => {
    setOpenSnackbar(false);
  };

  const handleCloseDialog = (): void => {
    setOpenDeleteDialog(false);
    setDisable(false);
  };

  const addArea = async () => {
    /* API call for adding area */
    try {
      const formData = {
        area_name: area,
        // have_option,
      };
      setAddSpinner(true);
      setDisable(true);
      const { data } = await axiosInstance.post(
        `${constant.admin}${constant.areaCreate}`,
        formData
      );
      setAddSpinner(false);
      handleClose();
      setOpenSnackbar(true);
      getArea();
      setSnackbarMessage(data.message);
    } catch (error: any) {
      setAddSpinner(false);
      handleClose();
      setOpenSnackbar(true);
      setSnackbarMessage(error.data.message);
      setDisable(false);
    }
  };

  const editArea = async () => {
    /* API call for editing Area */
    try {
      setAddSpinner(true);
      setDisable(true);
      const formData = {
        _id: index,
        area_name: area,
      };
      const { data } = await axiosInstance.post(
        `${constant.admin}${constant.areaUpdate}`,
        formData
      );
      setAddSpinner(false);
      handleClose();
      setOpenSnackbar(true);
      getArea();
      setSnackbarMessage(data.message);
    } catch (error: any) {
      setAddSpinner(false);
      handleClose();
      setOpenSnackbar(true);
      setSnackbarMessage(error.data.message);
      setDisable(false);
    }
  };

  const validation = (): void => {
    let isValid = true;
    if (!area.trim()) {
      isValid = false;
      setError(validationMessage.emptyArea);
    } else if (!checkBlankString(area) || !checkString(area)) {
      isValid = false;
      setError(validationMessage.invalidArea);
    } else {
      setError("");
    }
    if (isValid) {
      if (index) {
        editArea();
      } else {
        addArea();
      }
    }
  };

  const removeArea = async () => {
    /* API call for deleting area */
    try {
      setRemoveSpinner(true);
      const formData = {
        id: index,
      };
      setDisable(true);
      const { data } = await axiosInstance.post(
        `${constant.admin}${constant.areaDelete}`,
        formData
      );
      getArea();
      setRemoveSpinner(false);
      handleCloseDialog();
      setOpenSnackbar(true);
      setSnackbarMessage(data.message);
    } catch (error: any) {
      setRemoveSpinner(false);
      handleCloseDialog();
      setOpenSnackbar(true);
      setSnackbarMessage(error.data.message);
      setDisable(false);
    }
  };

  return {
    search,
    area,
    setArea,
    open,
    handleClose,
    handleOpen,
    addSpinner,
    error,
    validation,
    openSnackbar,
    snackbarMessage,
    areaData,
    loading,
    index,
    removeSpinner,
    onDeleteButton,
    onEditButton,
    handleCloseSnackbar,
    openDeleteDialog,
    handleCloseDialog,
    removeArea,
    areaSearch,
    filterData,
    disable,
  };
};

export default AreaController;
