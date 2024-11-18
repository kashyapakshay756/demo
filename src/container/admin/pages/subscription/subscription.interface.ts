import React from "react";

export interface SubscriptionControllerProps {
  yearlyCost?: string;
  setYearlyCost: React.Dispatch<React.SetStateAction<string | undefined>>;
  vatAmount?: string;
  setVatAmount: React.Dispatch<React.SetStateAction<string | undefined>>;
  error: ErrorProps;
  validation: () => void;
  loading: boolean;
  updateSpinner: boolean;
  openSnackbar: boolean;
  setOpenSnackbar: React.Dispatch<React.SetStateAction<boolean>>;
  snackbarMessage?: string;
}

export interface ErrorProps {
  yearlyCost: string | undefined;
  vatAmount: string | undefined;
}
