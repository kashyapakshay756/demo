import { useEffect, useState } from "react";
import { axiosInstance } from "../../../../../services/api/api";
import {
  checkBlankString,
  checkString,
} from "../../../../../utils/validation/validation";
import { constant } from "../../../../../services/constant";
import {
  ErrorProps,
  PrivacyPolicyControllerProps,
} from "./privacyPolicy.interface";
import validationMessage from "../../../../../utils/validation/validationMessage";

const PrivacyPolicyController = (): PrivacyPolicyControllerProps => {
  const [privacyPolicy, setPrivacyPolicy] = useState<string>(
    "Write something here!"
  );
  const [title, setTitle] = useState<string>();
  const [loading, setLoading] = useState<boolean>(false);
  const [updateSpinner, setUpdateSpinner] = useState<boolean>(false);
  const [openSnackbar, setOpenSnackbar] = useState<boolean>(false);
  const [snackbarMessage, setSnackbarMessage] = useState<string>();
  const [error, setError] = useState<ErrorProps>({
    title: undefined,
    privacyPolicy: undefined,
  });

  useEffect(() => {
    getPrivacyPolicy();
  }, []);

  const handlePrivacyPolicy = (e: any, editor: any): void => {
    const data = editor.getData();
    setPrivacyPolicy(data);
  };

  const getPrivacyPolicy = async () => {
    /* API call for getting Privacy Policy */
    try {
      setLoading(true);
      const { data } = await axiosInstance.get(
        `${constant.common}${constant.getPrivacyPolicy}`
      );
      setLoading(false);
      setTitle(data?.data[0]?.privacyPolicy?.title);
      setPrivacyPolicy(data?.data[0]?.privacyPolicy?.description);
    } catch (error) {
      setLoading(false);
    }
  };

  const addEditPrivacyPolicy = async () => {
    /* API call for updating Privacy Policy */
    try {
      setUpdateSpinner(true);
      const formData = {
        title: title,
        description: privacyPolicy,
      };
      const { data } = await axiosInstance.post(
        `${constant.admin}${constant.addEditPrivacyPolicy}`,
        formData
      );
      setUpdateSpinner(false);
      setOpenSnackbar(true);
      setSnackbarMessage(data?.message);
      setTitle(data?.data[0]?.privacyPolicy?.title);
      setPrivacyPolicy(data?.data[0]?.privacyPolicy?.description);
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
    if (!privacyPolicy.trim()) {
      isValid = false;
      error.privacyPolicy = validationMessage.emptyPrivacyPolicy;
    } else {
      error.privacyPolicy = "";
    }
    setError({ ...error });
    if (isValid) {
      addEditPrivacyPolicy();
    }
  };

  return {
    privacyPolicy,
    handlePrivacyPolicy,
    validation,
    loading,
    updateSpinner,
    openSnackbar,
    setOpenSnackbar,
    setTitle,
    snackbarMessage,
    title,
    error,
  };
};

export default PrivacyPolicyController;
