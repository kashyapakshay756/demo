import { useEffect, useState } from "react";
import { SelectChangeEvent } from "@mui/material";
import { axiosInstance } from "../../../../services/api/api";
import { constant } from "../../../../services/constant";
import {
  DashboardControllerProps,
  DashboardProps,
} from "./dashboard.interface";
import { getDashboard } from "../../../../services/redux/user/action";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../services/redux/controller";

const DashboardController = (): DashboardControllerProps => {
  const [loading, setLoading] = useState<boolean>(false);
  const [select, setSelect] = useState<number>(30);
  const [dashboard, setDashboard] = useState<DashboardProps>();
  const [openSnackbar, setOpenSnackbar] = useState<boolean>(true);

  const data = useAppSelector((state) => state.userReducer);

  const dispatch = useAppDispatch();

  useEffect(() => {
    setTimeout(() => {
      dispatch(getDashboard(false));
      handleCloseSnackbar();
    }, 3000);
  }, []);

  useEffect(() => {
    getDashboardDetails(30, "refresh");
  }, []);

  const getDashboardDetails = async (days: number, refresh?: string) => {
    /* API call for getting dashboard details */
    try {
      if (refresh) {
        setLoading(true);
      }
      const { data } = await axiosInstance.get(
        `${constant.admin}${constant.getDashboardDetails}?days=${days}`
      );
      setLoading(false);
      setDashboard(data?.data);
    } catch (error) {
      setLoading(false);
    }
  };

  const handleSelection = (event: SelectChangeEvent): void => {
    setSelect(parseInt(event.target.value));
    getDashboardDetails(parseInt(event.target.value));
  };

  const handleBackround = (): void => {
    document.body.classList["add"]("dropdown-body");
  };

  const handleCloseDropdown = (): void => {
    document.body.classList["remove"]("dropdown-body");
  };

  const handleCloseSnackbar = (): void => {
    setOpenSnackbar(false);
    dispatch(getDashboard(false));
  };

  return {
    handleBackround,
    handleCloseDropdown,
    loading,
    handleSelection,
    select,
    dashboard,
    openSnackbar,
    handleCloseSnackbar,
    data,
  };
};

export default DashboardController;
