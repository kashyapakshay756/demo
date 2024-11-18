import React from "react";

export interface StrongPasswordControllerProps {
  newPassword?: string;
  setNewPassword: React.Dispatch<React.SetStateAction<string | undefined>>;
  confirmPassword?: string;
  setConfirmPassword: React.Dispatch<React.SetStateAction<string | undefined>>;
  showPassword: boolean;
  handleClickShowPassword: () => void;
  handleMouseDownPassword: (event: React.MouseEvent<HTMLButtonElement>) => void;
  error: ErrorProps;
  loading: boolean;
  validation: () => void;
  showConfirmPassword: boolean;
  handleClickShowConfirmPassword: () => void;
  openSnackbar: boolean;
  setOpenSnackbar: React.Dispatch<React.SetStateAction<boolean>>;
  snackbarMessage?: string;
}

export interface ErrorProps {
  newPassword: string | undefined;
  confirmPassword: string | undefined;
}
