import React from "react";

export interface VerificationCodeControllerProps {
  verificationCode?: string;
  setVerificationCode: React.Dispatch<React.SetStateAction<string | undefined>>;
  error?: string;
  loading: boolean;
  validation: () => void;
  resendCode: () => void;
  otpSpinner: boolean;
  openSnackbar: boolean;
  setOpenSnackbar: React.Dispatch<React.SetStateAction<boolean>>;
  snackbarMessage?: string;
}
