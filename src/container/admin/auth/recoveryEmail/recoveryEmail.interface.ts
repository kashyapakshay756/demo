import React from "react";

export interface RecoveryEmailControllerProps {
  email?: string;
  setEmail: React.Dispatch<React.SetStateAction<string | undefined>>;
  error?: string;
  loading: boolean;
  validation: () => void;
  openSnackbar: boolean;
  setOpenSnackbar: React.Dispatch<React.SetStateAction<boolean>>;
  snackbarMessage?: string;
}
