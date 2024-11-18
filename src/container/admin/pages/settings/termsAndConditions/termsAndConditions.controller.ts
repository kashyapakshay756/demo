import { useEffect, useState } from "react";
import { axiosInstance } from "../../../../../services/api/api";
import {
  checkBlankString,
  checkString,
} from "../../../../../utils/validation/validation";
import { constant } from "../../../../../services/constant";
import {
  ErrorProps,
  TermsAndConditionsControllerProps,
} from "./termsAndConditions.interface";
import validationMessage from "../../../../../utils/validation/validationMessage";

const TermsAndConditionsController = (): TermsAndConditionsControllerProps => {
  const [termsAndConditions, setTermsAndConditions] = useState<string>(
    "Write something here!"
  );
  const [title, setTitle] = useState<string>();
  const [updateSpinner, setUpdateSpinner] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [openSnackbar, setOpenSnackbar] = useState<boolean>(false);
  const [snackbarMessage, setSnackbarMessage] = useState<string>();
  const [error, setError] = useState<ErrorProps>({
    title: undefined,
    termsAndConditions: undefined,
  });

  useEffect(() => {
    getTermsAndConditions();
  }, []);

  const handleTermsAndConditions = (e: any, editor: any): void => {
    const data = editor.getData();
    setTermsAndConditions(data);
  };

  const getTermsAndConditions = async () => {
    /* API call for getting Terms And Conditions */
    try {
      setLoading(true);
      const { data } = await axiosInstance.get(
        `${constant.common}${constant.getTermsAndCondition}`
      );
      setLoading(false);
      setTitle(data?.data[0]?.termsAndCondition?.title);
      setTermsAndConditions(data?.data[0]?.termsAndCondition?.description);
    } catch (error) {
      setLoading(false);
    }
  };

  const addEditTermsAndConditions = async () => {
    /* API call for updating Terms & Conditions */
    try {
      setUpdateSpinner(true);
      const formData = {
        title: title,
        description: termsAndConditions,
      };
      const { data } = await axiosInstance.post(
        `${constant.admin}${constant.addEditTermsCondition}`,
        formData
      );
      setUpdateSpinner(false);
      setOpenSnackbar(true);
      setSnackbarMessage(data?.message);
      setTitle(data?.data?.termsAndCondition?.title);
      setTermsAndConditions(data?.data?.termsAndCondition?.description);
    } catch (error: any) {
      setUpdateSpinner(false);
      setOpenSnackbar(true);
      setSnackbarMessage(error?.data?.message);
    }
  };

  const validation = (): void => {
    let isValid = true;
    if (!title?.trim()) {
      isValid = false;
      error.title = validationMessage.emptyTitle;
    } else if (!checkBlankString(title) || !checkString(title)) {
      isValid = false;
      error.title = validationMessage.invalidTitle;
    } else {
      error.title = "";
    }
    if (!termsAndConditions.trim()) {
      isValid = false;
      error.termsAndConditions = validationMessage.emptyTermsAndConditions;
    } else {
      error.termsAndConditions = "";
    }
    setError({ ...error });
    if (isValid) {
      addEditTermsAndConditions();
    }
  };

  return {
    handleTermsAndConditions,
    termsAndConditions,
    validation,
    updateSpinner,
    openSnackbar,
    setOpenSnackbar,
    setTitle,
    snackbarMessage,
    title,
    loading,
    error,
  };
};

export default TermsAndConditionsController;
