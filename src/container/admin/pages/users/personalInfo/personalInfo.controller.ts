import { useEffect, useState } from "react";
import moment from "moment";
import { useNavigate, useParams } from "react-router-dom";
import { axiosInstance } from "../../../../../services/api/api";
import { constant } from "../../../../../services/constant";
import {
  PersonalInfoControllerProps,
  TabChangeProps,
  VoucherListProps,
} from "./personalInfo.interface";
import { useAppSelector } from "../../../../../services/redux/controller";
import { UserDataProps } from "../../../../../services/redux/userData/interface";

const PersonalInfoController = (): PersonalInfoControllerProps => {
  const [tabValue, setTabValue] = useState<number>(0);
  const [deleteSpinner, setDeleteSpinner] = useState<boolean>(false);
  const [openDialog, setOpenDialog] = useState<boolean>(false);
  const [voucherSpinner, setVoucherSpinner] = useState<boolean>(false);
  const [disable, setDisable] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [userInfo, setUserInfo] = useState<UserDataProps>();
  const [voucherList, setVoucherList] = useState<VoucherListProps[]>([]);

  useEffect(() => {
    getUserVoucherList();
  }, [tabValue === 1]);

  useEffect(() => {
    getUsers();
  }, []);

  const navigation = useNavigate();

  const { userId } = useParams();

  const getUsers = async () => {
    /* API call for getting user list */
    try {
      setLoading(true);
      const { data } = await axiosInstance.get(
        `${constant.admin}${constant.adminGetAllUsers}`
      );
      setLoading(false);
      const list = data?.data?.filter((item: any) => item._id === userId)[0];
      setUserInfo(list);
    } catch (error) {
      setLoading(false);
    }
  };

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

  const handleTabValueChange = (
    event: React.SyntheticEvent,
    newValue: number
  ) => {
    setTabValue(newValue);
  };

  const tabChange = (index: number): TabChangeProps => {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  };

  const calculateAge = (birthDate: any): number => {
    const currentDate = new Date();
    const birthYear = birthDate.getFullYear();
    const currentYear = currentDate.getFullYear();

    let age = currentYear - birthYear;

    // Adjust age based on the month and day
    const birthMonth = birthDate.getMonth();
    const currentMonth = currentDate.getMonth();
    const birthDay = birthDate.getDate();
    const currentDay = currentDate.getDate();

    if (
      currentMonth < birthMonth ||
      (currentMonth === birthMonth && currentDay < birthDay)
    ) {
      age--;
    }

    return age;
  };

  const deleteUser = async () => {
    /* API call for deleting user */
    try {
      setDeleteSpinner(true);
      const formData = {
        id: userId,
      };
      setDisable(true);
      await axiosInstance.post(
        `${constant.admin}${constant.adminDeleteZeebraUser}`,
        formData
      );
      setDeleteSpinner(false);
      handleCloseDialog();
      goBack();
    } catch (error) {
      setDeleteSpinner(false);
      setDisable(false);
    }
  };

  const getUserVoucherList = async () => {
    /* API call for getting user voucher list */
    try {
      setVoucherSpinner(true);
      const { data } = await axiosInstance.get(
        `${constant.admin}${constant.getUserVoucher}?user_id=${userId}`
      );
      setVoucherSpinner(false);
      const list = data?.data?.map((item: any) => ({
        id: item._id,
        code: item?.code_number?.no_of_codes,
        date: moment(item?.Date).format("DD/MM/YYYY"),
        businessName: item?.business_id?.business_name,
        savingAmount: `\u00A3 ${item?.offer_id?.customer_saving}`,
      }));
      setVoucherList(list);
    } catch (error) {
      setVoucherSpinner(false);
    }
  };

  return {
    tabValue,
    handleTabValueChange,
    tabChange,
    goBack,
    userInfo,
    deleteSpinner,
    deleteUser,
    handleCloseDialog,
    handleOpenDialog,
    openDialog,
    voucherList,
    voucherSpinner,
    disable,
    loading,
    calculateAge,
  };
};

export default PersonalInfoController;
