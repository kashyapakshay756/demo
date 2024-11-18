import { useEffect, useState } from "react";
import { axiosInstance } from "../../../../services/api/api";
import {
  BusinessDataProps,
  ErrorProps,
  VoucherCostControllerProps,
} from "./voucherCost.interface";
import { checkNumeric } from "../../../../utils/validation/validation";
import { constant } from "../../../../services/constant";
import validationMessage from "../../../../utils/validation/validationMessage";

const VoucherCostController = (): VoucherCostControllerProps => {
  const [search, setSearch] = useState<string>();
  const [loading, setLoading] = useState<boolean>(false);
  const [editSpinner, setEditSpinner] = useState<boolean>(false);
  const [snackbar, setSnackbar] = useState<boolean>(false);
  const [toast, setToast] = useState<string>();
  const [open, setOpen] = useState<boolean>(false);
  const [disable, setDisable] = useState<boolean>(false);
  const [id, setId] = useState<string>();
  const [businessData, setBusinessData] = useState<
    BusinessDataProps[] | undefined
  >();
  const [filterData, setFilterData] = useState<
    BusinessDataProps[] | undefined | null
  >(null);
  const [voucherCost, setVoucherCost] = useState<string>();
  const [voucherVat, setVoucherVat] = useState<string>();
  const [error, setError] = useState<ErrorProps>({
    voucherCost: null,
    voucherVat: null,
  });

  useEffect(() => {
    getAllBusiness("refresh");
  }, []);

  const data: BusinessDataProps | undefined = businessData?.filter(
    (item) => item.id === id
  )[0];

  useEffect(() => {
    if (data) {
      const cost = data?.voucherCost?.split(",");
      setVoucherCost(cost[0]);
      setVoucherVat(cost[1]);
    }
    setError({
      voucherCost: null,
      voucherVat: null,
    });
  }, [id]);

  const getAllBusiness = async (refresh?: string) => {
    /* API call for getting all business */
    try {
      if (refresh) {
        setLoading(true);
      }
      const { data } = await axiosInstance.get(
        `${constant.admin}${constant.getZeebraBusiness}`
      );
      const list = data?.data?.map((item: any, index: number) => ({
        id: item?._id,
        serialNo: index + 1,
        businessName: item?.business_name,
        email: item?.business_email,
        totalAmount: `\u00A3 ${item?.amount}`,
        area: item?.sector_Id?.sector_name,
        voucherCost: `${item?.voucher_cost},${item?.voucher_vat}`,
      }));
      setBusinessData(list);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  const handleOpen = (id: string): void => {
    setOpen(true);
    setId(id);
    setDisable(false);
  };

  const handleClose = (): void => {
    setOpen(false);
    setId("");
    setDisable(false);
  };

  const businessSearch = (value: string): void => {
    /* Business search functionality */
    const filterData = businessData?.filter((item: BusinessDataProps) => {
      let search = [item?.businessName, item?.email, item?.area];
      let regex = search?.toString()?.toLowerCase();
      return regex?.includes(value?.toLowerCase());
    });
    setSearch(value);
    setFilterData(filterData);
  };

  const editVoucherCost = async () => {
    /* API call for editing voucher cost */
    try {
      const formData = {
        business_id: id,
        voucher_cost: voucherCost,
        voucher_vat: voucherVat,
      };
      setEditSpinner(true);
      setDisable(true);
      const { data } = await axiosInstance.post(
        `${constant.admin}${constant.updateZeebraBusinessVoucher}`,
        formData
      );
      handleClose();
      getAllBusiness();
      setEditSpinner(false);
      setSnackbar(true);
      setToast(data?.message);
    } catch (error: any) {
      setEditSpinner(false);
      handleClose();
      setSnackbar(true);
      setToast(error?.data?.message);
      setDisable(false);
    }
  };

  const validation = (): void => {
    let isValid = true;
    if (!voucherCost?.trim()) {
      isValid = false;
      error.voucherCost = validationMessage.emptyVoucherCost;
    } else if (!checkNumeric(voucherCost)) {
      isValid = false;
      error.voucherCost = validationMessage.invalidVoucherCost;
    } else {
      error.voucherCost = null;
    }
    if (!voucherVat?.trim()) {
      isValid = false;
      error.voucherVat = validationMessage.emptyVoucherVat;
    } else if (!checkNumeric(voucherVat)) {
      isValid = false;
      error.voucherVat = validationMessage.invalidVoucherVat;
    } else {
      error.voucherVat = null;
    }
    setError({ ...error });
    if (isValid) {
      editVoucherCost();
    }
  };

  return {
    search,
    loading,
    businessData,
    filterData,
    businessSearch,
    handleClose,
    open,
    handleOpen,
    data,
    setVoucherCost,
    setVoucherVat,
    voucherCost,
    voucherVat,
    validation,
    id,
    error,
    editSpinner,
    setSnackbar,
    snackbar,
    toast,
    disable,
  };
};

export default VoucherCostController;
