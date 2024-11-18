import { useState } from "react";
import { axiosInstance } from "../../../../services/api/api";
import {
  checkEmail,
  checkPassword,
} from "../../../../utils/validation/validation";
import { constant } from "../../../../services/constant";
import {
  ErrorProps,
  PasswordResetControllerProps,
} from "./passwordReset.interface";
import { useAppSelector } from "../../../../services/redux/controller";
import validationMessage from "../../../../utils/validation/validationMessage";

const PasswordResetController = (): PasswordResetControllerProps => {
  const [email, setEmail] = useState<string>();
  const [newPassword, setNewPassword] = useState<string>();
  const [confirmPassword, setConfirmPassword] = useState<string>();
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [openSnackbar, setOpenSnackbar] = useState<boolean>(false);
  const [snackbarMessage, setSnackbarMessage] = useState<string>();
  const [error, setError] = useState<ErrorProps>({
    email: undefined,
    newPassword: undefined,
    confirmPassword: undefined,
  });

  const { userData } = useAppSelector((state) => state.userReducer);

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

  const resetPassword = async () => {
    /* API call for resetting Password */
    try {
      setLoading(true);
      const formData = {
        id: userData?._id,
        email: email,
        password: newPassword,
      };
      const { data } = await axiosInstance.post(
        `${constant.admin}${constant.changePassword}`,
        formData
      );
      setLoading(false);
      setEmail("");
      setNewPassword("");
      setConfirmPassword("");
      setOpenSnackbar(true);
      setSnackbarMessage(data?.message);
    } catch (error: any) {
      setLoading(false);
      setOpenSnackbar(true);
      setSnackbarMessage(error?.data?.message);
    }
  };

  const validation = (): void => {
    let isValid = true;
    if (!email?.trim()) {
      isValid = false;
      error.email = validationMessage.emptyEmail;
    } else if (!checkEmail(email)) {
      isValid = false;
      error.email = validationMessage.invalidEmail;
    } else {
      error.email = "";
    }
    if (!newPassword?.trim()) {
      isValid = false;
      error.newPassword = validationMessage.emptyNewPassword;
    } else if (newPassword?.length < 6 || !checkPassword(newPassword)) {
      isValid = false;
      error.newPassword = validationMessage.invalidNewPassword;
    } else {
      error.newPassword = "";
    }
    if (!confirmPassword?.trim()) {
      isValid = false;
      error.confirmPassword = validationMessage.emptyRetypePassword;
    } else if (confirmPassword !== newPassword) {
      isValid = false;
      error.confirmPassword = validationMessage.invalidConfirmPassword;
    } else {
      error.confirmPassword = "";
    }
    setError({ ...error });
    if (isValid) {
      resetPassword();
    }
  };

  return {
    setConfirmPassword,
    setEmail,
    setNewPassword,
    confirmPassword,
    email,
    newPassword,
    error,
    validation,
    loading,
    openSnackbar,
    setOpenSnackbar,
    snackbarMessage,
    handleClickShowPassword,
    handleMouseDownPassword,
    showPassword,
    handleClickShowConfirmPassword,
    showConfirmPassword,
  };
};

export default PasswordResetController;
