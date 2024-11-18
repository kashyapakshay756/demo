export interface TermsAndConditionsControllerProps {
  termsAndConditions: string;
  handleTermsAndConditions: (e: any, editor: any) => void;
  updateSpinner: boolean;
  loading: boolean;
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
  termsAndConditions: string | undefined;
}
