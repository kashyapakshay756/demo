import React from "react";

export interface SuperLoginControllerProps {
  email?: string;
  setEmail: React.Dispatch<React.SetStateAction<string | undefined>>;
  password?: string;
  setPassword: React.Dispatch<React.SetStateAction<string | undefined>>;
  showPassword: boolean;
  handleClickShowPassword: () => void;
  handleMouseDownPassword: (event: React.MouseEvent<HTMLButtonElement>) => void;
  validation: () => void;
  loading: boolean;
  openSnackbar: boolean;
  setOpenSnackbar: React.Dispatch<React.SetStateAction<boolean>>;
  snackbarMessage?: string;
  error: ErrorProps;
}

export interface ErrorProps {
  email: string | undefined;
  password: string | undefined;
}
