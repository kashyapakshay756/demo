import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { axiosInstance } from "../../../../services/api/api";
import { checkEmail } from "../../../../utils/validation/validation";
import { constant } from "../../../../services/constant";
import { ErrorProps, SuperLoginControllerProps } from "./superLogin.interface";
import {
  getDashboard,
  loginSuccess,
} from "../../../../services/redux/user/action";
import { useAppDispatch } from "../../../../services/redux/controller";
import validationMessage from "../../../../utils/validation/validationMessage";

const SuperLoginController = (): SuperLoginControllerProps => {
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [openSnackbar, setOpenSnackbar] = useState<boolean>(false);
  const [snackbarMessage, setSnackbarMessage] = useState<string>();
  const [error, setError] = useState<ErrorProps>({
    email: undefined,
    password: undefined,
  });

  const navigation = useNavigate();

  const dispatch = useAppDispatch();

  const handleClickShowPassword = (): void => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ): void => {
    event.preventDefault();
  };

  const validation = (): void => {
    /* Validation for login form */
    let isValid = true;
    if (!email?.trim()) {
      isValid = false;
      error.email = validationMessage.emptyEmail;
    } else if (!checkEmail(email?.toLocaleLowerCase())) {
      isValid = false;
      error.email = validationMessage.invalidEmail;
    } else {
      error.email = "";
    }
    if (!password?.trim()) {
      isValid = false;
      error.password = validationMessage.emptyPassword;
    } else if (password.length < 6) {
      isValid = false;
      error.password = validationMessage.invalidPassword;
    } else {
      error.password = "";
    }
    setError({ ...error });
    if (isValid) {
      login();
    }
  };

  const login = async () => {
    /* API call for user login */
    try {
      const formData = {
        email: email?.toLocaleLowerCase(),
        password: password,
      };
      setLoading(true);
      const { data } = await axiosInstance.post(
        `${constant.admin}${constant.login}`,
        formData
      );
      setLoading(false);
      dispatch(loginSuccess(data?.data));
      navigation("/admin/dashboard");
      dispatch(getDashboard(true));
    } catch (error: any) {
      setOpenSnackbar(true);
      setSnackbarMessage(error.data.message);
      setLoading(false);
    }
  };

  return {
    email,
    setEmail,
    password,
    setPassword,
    showPassword,
    handleClickShowPassword,
    handleMouseDownPassword,
    validation,
    loading,
    openSnackbar,
    setOpenSnackbar,
    snackbarMessage,
    error,
  };
};

export default SuperLoginController;
