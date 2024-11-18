import React from "react";

export interface PasswordResetControllerProps {
  email?: string;
  setEmail: React.Dispatch<React.SetStateAction<string | undefined>>;
  newPassword?: string;
  setNewPassword: React.Dispatch<React.SetStateAction<string | undefined>>;
  confirmPassword?: string;
  setConfirmPassword: React.Dispatch<React.SetStateAction<string | undefined>>;
  showPassword: boolean;
  handleClickShowPassword: () => void;
  showConfirmPassword: boolean;
  handleClickShowConfirmPassword: () => void;
  handleMouseDownPassword: (event: React.MouseEvent<HTMLButtonElement>) => void;
  error: ErrorProps;
  validation: () => void;
  loading: boolean;
  openSnackbar: boolean;
  setOpenSnackbar: React.Dispatch<React.SetStateAction<boolean>>;
  snackbarMessage?: string;
}

export interface ErrorProps {
  email: string | undefined;
  newPassword: string | undefined;
  confirmPassword: string | undefined;
}
