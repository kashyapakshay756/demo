import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { axiosInstance } from "../../../../services/api/api";
import { checkEmail } from "../../../../utils/validation/validation";
import { RecoveryEmailControllerProps } from "./recoveryEmail.interface";
import validationMessage from "../../../../utils/validation/validationMessage";
import { constant } from "../../../../services/constant";

const RecoveryEmailController = (): RecoveryEmailControllerProps => {
  const [email, setEmail] = useState<string>();
  const [error, setError] = useState<string>();
  const [loading, setLoading] = useState<boolean>(false);
  const [snackbarMessage, setSnackbarMessage] = useState<string>();
  const [openSnackbar, setOpenSnackbar] = useState<boolean>(false);

  const navigation = useNavigate();

  const validation = (): void => {
    /* Validation for email form */
    let isValid = true;
    if (!email?.trim()) {
      isValid = false;
      setError(validationMessage.emptyEmail);
    } else if (!checkEmail(email)) {
      isValid = false;
      setError(validationMessage.invalidEmail);
    } else {
      setError("");
    }
    if (isValid) {
      recoveryEmail();
    }
  };

  const recoveryEmail = async () => {
    /* API call for recovery email address */
    try {
      setLoading(true);
      const formData = {
        email: email,
      };
      const { data } = await axiosInstance.post(
        `${constant.admin}${constant.adminVerifyOtp}`,
        formData
      );
      setLoading(false);
      const userId = data?.data?._id;
      navigation(`${userId}/verificationcode`);
    } catch (error: any) {
      setLoading(false);
      setOpenSnackbar(true);
      setSnackbarMessage(error?.data?.message);
    }
  };

  return {
    email,
    setEmail,
    error,
    loading,
    validation,
    openSnackbar,
    setOpenSnackbar,
    snackbarMessage,
  };
};

export default RecoveryEmailController;
