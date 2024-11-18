import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { axiosInstance } from "../../../../services/api/api";
import {
  ErrorProps,
  StrongPasswordControllerProps,
} from "./strongPassword.interface";
import validationMessage from "../../../../utils/validation/validationMessage";
import { constant } from "../../../../services/constant";

const StrongPasswordController = (): StrongPasswordControllerProps => {
  const [newPassword, setNewPassword] = useState<string>();
  const [confirmPassword, setConfirmPassword] = useState<string>();
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<ErrorProps>({
    newPassword: undefined,
    confirmPassword: undefined,
  });
  const [openSnackbar, setOpenSnackbar] = useState<boolean>(false);
  const [snackbarMessage, setSnackbarMessage] = useState<string>();

  const navigation = useNavigate();

  const { userId } = useParams();

  const handleClickShowPassword = (): void => {
    setShowPassword(!showPassword);
  };

  const handleClickShowConfirmPassword = (): void => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const validation = (): void => {
    let isValid = true;
    if (!newPassword?.trim()) {
      isValid = false;
      error.newPassword = validationMessage.emptyNewPassword;
    } else if (newPassword.length < 6) {
      isValid = false;
      error.newPassword = validationMessage.invalidNewPassword;
    } else {
      error.newPassword = "";
    }
    if (!confirmPassword?.trim()) {
      isValid = false;
      error.confirmPassword = validationMessage.emptyConfirmPassword;
    } else if (confirmPassword !== newPassword) {
      isValid = false;
      error.confirmPassword = validationMessage.invalidConfirmPassword;
    } else {
      error.confirmPassword = "";
    }
    setError({ ...error });
    if (isValid) {
      changePassword();
    }
  };

  const changePassword = async () => {
    /* API call for changing Password */
    try {
      setLoading(true);
      const formData = {
        id: userId,
        newPassword: newPassword,
        confirmPassword: confirmPassword,
      };
      const { data } = await axiosInstance.post(
        `${constant.admin}${constant.adminResetPassword}`,
        formData
      );
      setLoading(false);
      setOpenSnackbar(true);
      setSnackbarMessage(data?.message);
      setTimeout(() => {
        navigation("/");
      }, 2000);
    } catch (error: any) {
      setLoading(false);
      setOpenSnackbar(true);
      setSnackbarMessage(error?.data?.message);
    }
  };

  return {
    newPassword,
    setNewPassword,
    confirmPassword,
    setConfirmPassword,
    showPassword,
    handleClickShowPassword,
    handleMouseDownPassword,
    error,
    loading,
    validation,
    handleClickShowConfirmPassword,
    showConfirmPassword,
    openSnackbar,
    setOpenSnackbar,
    snackbarMessage,
  };
};

export default StrongPasswordController;
