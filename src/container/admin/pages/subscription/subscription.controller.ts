import { useEffect, useState } from "react";
import { axiosInstance } from "../../../../services/api/api";
import { checkDecimal } from "../../../../utils/validation/validation";
import { constant } from "../../../../services/constant";
import {
  ErrorProps,
  SubscriptionControllerProps,
} from "./subscription.interface";
import validationMessage from "../../../../utils/validation/validationMessage";

const SubscriptionController = (): SubscriptionControllerProps => {
  const [subscriptionData, setSubscriptionData] = useState<any>([]);
  const [yearlyCost, setYearlyCost] = useState<string>();
  const [vatAmount, setVatAmount] = useState<string>();
  const [loading, setLoading] = useState<boolean>(false);
  const [updateSpinner, setUpdateSpinner] = useState<boolean>(false);
  const [snackbarMessage, setSnackbarMessage] = useState<string>();
  const [openSnackbar, setOpenSnackbar] = useState<boolean>(false);
  const [error, setError] = useState<ErrorProps>({
    yearlyCost: undefined,
    vatAmount: undefined,
  });

  useEffect(() => {
    getSubscriptionCost();
  }, []);

  useEffect(() => {
    setYearlyCost(subscriptionData[0]?.master_yearly_cost);
    setVatAmount(subscriptionData[0]?.vat_amount);
  }, [subscriptionData]);

  const getSubscriptionCost = async () => {
    /* API call for getting Subscription Cost */
    try {
      setLoading(true);
      const { data } = await axiosInstance.get(
        `${constant.common}${constant.masterCostGetall}`
      );
      setLoading(false);
      setSubscriptionData(data?.data);
    } catch (error) {
      setLoading(false);
    }
  };

  const subscriptionCost = async () => {
    /* API call for setting Subscription Cost */
    try {
      setUpdateSpinner(true);
      const formData = {
        id: subscriptionData[0]?._id,
        master_yearly_cost: yearlyCost,
        vat_amount: vatAmount,
      };
      const { data } = await axiosInstance.post(
        `${constant.admin}${constant.adminUpdateMasterCost}`,
        formData
      );
      setUpdateSpinner(false);
      setOpenSnackbar(true);
      setSnackbarMessage(data?.message);
    } catch (error: any) {
      setUpdateSpinner(false);
      setOpenSnackbar(true);
      setSnackbarMessage(error?.data?.message);
    }
  };

  const validation = (): void => {
    let isValid = true;
    if (!yearlyCost) {
      isValid = false;
      error.yearlyCost = validationMessage.emptyYearlyCost;
    } else if (!checkDecimal(yearlyCost)) {
      isValid = false;
      error.yearlyCost = validationMessage.invalidYearlyCost;
    } else {
      error.yearlyCost = "";
    }
    if (!vatAmount) {
      isValid = false;
      error.vatAmount = validationMessage.emptyVatAmount;
    } else if (!checkDecimal(vatAmount)) {
      isValid = false;
      error.vatAmount = validationMessage.invalidVatAmount;
    } else {
      error.vatAmount = "";
    }
    setError({ ...error });
    if (isValid) {
      subscriptionCost();
    }
  };

  return {
    setVatAmount,
    setYearlyCost,
    vatAmount,
    yearlyCost,
    error,
    validation,
    loading,
    updateSpinner,
    openSnackbar,
    setOpenSnackbar,
    snackbarMessage,
  };
};

export default SubscriptionController;
