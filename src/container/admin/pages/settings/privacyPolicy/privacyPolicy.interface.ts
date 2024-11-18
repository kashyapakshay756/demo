import React from "react";

export interface PrivacyPolicyControllerProps {
  privacyPolicy: string;
  handlePrivacyPolicy: (e: any, editor: any) => void;
  loading: boolean;
  updateSpinner: boolean;
  title?: string;
  setTitle: React.Dispatch<React.SetStateAction<string | undefined>>;
  openSnackbar: boolean;
  setOpenSnackbar: React.Dispatch<React.SetStateAction<boolean>>;
  snackbarMessage?: string;
  validation: () => void;
  error: ErrorProps;
}

export interface ErrorProps {
  title: string | undefined;
  privacyPolicy: string | undefined;
}
