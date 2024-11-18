import { useState, useEffect } from "react";
import moment from "moment";
import { axiosInstance } from "../../../../../services/api/api";
import { constant } from "../../../../../services/constant";
import { SectorControllerProps, SectorDataProps } from "./sectors.interface";
import validationMessage from "../../../../../utils/validation/validationMessage";

const SectorController = (): SectorControllerProps => {
  const [search, setSearch] = useState<string>();
  const [sector, setSector] = useState<string>();
  const [index, setIndex] = useState<string>();
  const [open, setOpen] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [sectorData, setSectorData] = useState<SectorDataProps[] | undefined>();
  const [filterData, setFilterData] = useState<
    SectorDataProps[] | null | undefined
  >(null);
  const [addSpinner, setAddSpinner] = useState<boolean>(false);
  const [removeSpinner, setRemoveSpinner] = useState<boolean>(false);
  const [openSnackbar, setOpenSnackbar] = useState<boolean>(false);
  const [openDeleteDialog, setOpenDeleteDialog] = useState<boolean>(false);
  const [snackbarMessage, setSnackbarMessage] = useState<string>();
  const [error, setError] = useState<string>();
  const [disable, setDisable] = useState<boolean>(false);

  useEffect(() => {
    getSectors("refresh");
  }, []);

  useEffect(() => {
    if (index) {
      const list = sectorData?.filter((item) => item.id === index);
      if (list) {
        setSector(list[0].sector);
      }
    } else {
      setSector("");
    }
  }, [index]);

  const sectorSearch = (value: string): void => {
    /* Sector search functionality */
    const filterData = sectorData?.filter((item: SectorDataProps) => {
      let search = [item?.sector];
      let regex = search?.toString()?.toLowerCase();
      return regex?.includes(value?.toLowerCase());
    });
    setSearch(value);
    setFilterData(filterData);
  };

  const handleOpen = (): void => {
    setOpen(true);
    setIndex("");
    setDisable(false);
  };

  const handleClose = (): void => {
    setOpen(false);
    setIndex("");
    setSector("");
    setError("");
    setDisable(false);
  };

  const handleCloseSnackbar = (): void => {
    setOpenSnackbar(false);
  };

  const handleCloseDialog = (): void => {
    setOpenDeleteDialog(false);
    setDisable(false);
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

  const getSectors = async (refresh?: string) => {
    /* API call or getting sectors data */
    try {
      if (refresh) {
        setLoading(true);
      }
      const { data } = await axiosInstance.get(
        `${constant.admin}${constant.sectorGetall}`
      );
      setLoading(false);
      const list = data.data.map((item: any, index: number) => ({
        id: item._id,
        serialNo: index + 1,
        sector: item.sector_name,
        date: moment(item.createdAt).format("DD/MM/YYYY"),
      }));
      setSectorData(list);
    } catch (error) {
      setLoading(false);
    }
  };

  const addSector = async () => {
    /* API call for adding sector */
    try {
      setAddSpinner(true);
      setDisable(true);
      const formData = {
        sector_name: sector,
        // have_option,
      };
      const { data } = await axiosInstance.post(
        `${constant.admin}${constant.sectorCreate}`,
        formData
      );
      setAddSpinner(false);
      setSearch("");
      setFilterData(null);
      getSectors();
      handleClose();
      setOpenSnackbar(true);
      setSnackbarMessage(data?.message);
    } catch (error: any) {
      setAddSpinner(false);
      handleClose();
      setOpenSnackbar(true);
      setSnackbarMessage(error?.data?.message);
      setDisable(false);
    }
  };

  const editSector = async () => {
    /* API call for editing sector */
    try {
      setAddSpinner(true);
      setDisable(true);
      const formData = {
        _id: index,
        sector_name: sector,
        // have_option,
      };
      const { data } = await axiosInstance.post(
        `${constant.admin}${constant.sectorUpdate}`,
        formData
      );
      setAddSpinner(false);
      handleClose();
      setSearch("");
      setFilterData(null);
      setOpenSnackbar(true);
      setSnackbarMessage(data?.message);
      getSectors();
    } catch (error: any) {
      setAddSpinner(false);
      handleClose();
      setOpenSnackbar(true);
      setSnackbarMessage(error?.data?.message);
      setDisable(false);
    }
  };

  const validation = (): void => {
    /* Validation for sector form */
    let isValid = true;
    if (!sector?.trim()) {
      isValid = false;
      setError(validationMessage.emptySector);
    } else {
      setError("");
    }
    if (isValid) {
      if (index) {
        editSector();
      } else {
        addSector();
      }
    }
  };

  const removeSector = async () => {
    /* API call for removing sector */
    try {
      setRemoveSpinner(true);
      setDisable(true);
      const formData = {
        id: index,
      };
      const { data } = await axiosInstance.post(
        `${constant.admin}${constant.sectorDelete}`,
        formData
      );
      setSearch("");
      setFilterData(null);
      setRemoveSpinner(false);
      getSectors();
      handleCloseDialog();
      setOpenSnackbar(true);
      setSnackbarMessage(data?.message);
    } catch (error: any) {
      setRemoveSpinner(false);
      setOpenSnackbar(true);
      setSnackbarMessage(error?.data?.message);
      setDisable(false);
    }
  };

  return {
    setSector,
    sector,
    open,
    handleClose,
    handleOpen,
    loading,
    sectorData,
    addSpinner,
    openDeleteDialog,
    openSnackbar,
    removeSpinner,
    snackbarMessage,
    handleCloseDialog,
    handleCloseSnackbar,
    validation,
    error,
    index,
    onEditButton,
    onDeleteButton,
    removeSector,
    search,
    filterData,
    sectorSearch,
    disable,
  };
};

export default SectorController;
