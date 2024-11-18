import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { axiosInstance } from "../../../../services/api/api";
import { checkNumeric } from "../../../../utils/validation/validation";
import { constant } from "../../../../services/constant";
import { VerificationCodeControllerProps } from "./verificationCode.interface";
import validationMessage from "../../../../utils/validation/validationMessage";

const VerificationCodeController = (): VerificationCodeControllerProps => {
  const [verificationCode, setVerificationCode] = useState<string>();
  const [error, setError] = useState<string>();
  const [loading, setLoading] = useState<boolean>(false);
  const [otpSpinner, setOtpSpinner] = useState<boolean>(false);
  const [openSnackbar, setOpenSnackbar] = useState<boolean>(false);
  const [snackbarMessage, setSnackbarMessage] = useState<string>();

  const { userId } = useParams();
  const navigation = useNavigate();

  const validation = (): void => {
    /* Validation for OTP form */
    let isValid = true;
    if (!verificationCode?.trim()) {
      isValid = false;
      setError(validationMessage.emptyOTP);
    } else if (
      !checkNumeric(verificationCode) ||
      verificationCode.length != 6
    ) {
      isValid = false;
      setError(validationMessage.invalidOTP);
    } else {
      setError("");
    }
    if (isValid) {
      verifyOTP();
    }
  };

  const resendCode = async () => {
    /* API call for resend OTP code */
    try {
      setOtpSpinner(true);
      const formData = {
        id: userId,
      };
      const { data } = await axiosInstance.post(
        `${constant.admin}${constant.adminResendOtp}`,
        formData
      );
      setOtpSpinner(false);
      setOpenSnackbar(true);
      setSnackbarMessage(data?.message);
    } catch (error: any) {
      setOtpSpinner(false);
      setOpenSnackbar(true);
      setSnackbarMessage(error?.data?.message);
    }
  };

  const verifyOTP = async () => {
    /* API call for verifying OTP code */
    try {
      setLoading(true);
      const formData = {
        id: userId,
        otp: verificationCode,
      };
      const { data } = await axiosInstance.post(
        `${constant.admin}${constant.adminForgotPassword}`,
        formData
      );
      setLoading(false);
      navigation(`${userId}/strongpassword`);
    } catch (error: any) {
      setLoading(false);
      setOpenSnackbar(true);
      setSnackbarMessage(error?.data?.message);
    }
  };

  return {
    verificationCode,
    setVerificationCode,
    error,
    loading,
    validation,
    resendCode,
    otpSpinner,
    openSnackbar,
    setOpenSnackbar,
    snackbarMessage,
  };
};

export default VerificationCodeController;
