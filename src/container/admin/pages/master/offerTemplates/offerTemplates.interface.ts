import React from "react";

export interface OfferTemplatesControllerProps {
  loading: boolean;
  search?: string;
  handleSearch: (value: string) => void;
  index?: string;
  open: boolean;
  handleOpen: () => void;
  handleClose: () => void;
  filterData?: TemplateDataProps[] | null;
  openSnackbar: boolean;
  disable: boolean;
  setOpenSnackbar: React.Dispatch<React.SetStateAction<boolean>>;
  snackbarMessage?: string;
  addSpinner: boolean;
  removeSpinner: boolean;
  openDeleteDialog: boolean;
  error: ErrorProps;
  validation: () => void;
  title?: string;
  setTitle: React.Dispatch<React.SetStateAction<string | undefined>>;
  pdf: any;
  handleUpload: (e: any) => void;
  templateData?: TemplateDataProps[];
  onEditButton: (id: string) => void;
  handleOpenDeleteDialog: (id: string) => void;
  handleCloseDeleteDialog: () => void;
  removeTemplate: () => void;
}

export interface ErrorProps {
  title: string | undefined;
  pdfError: string | undefined;
}

export interface TemplateDataProps {
  id: string;
  searialNo?: number;
  title: string;
  template: string;
  date: string;
}
