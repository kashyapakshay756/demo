import React from "react";

export interface UniversityControllerProps {
  search?: string;
  university?: string;
  setUniversity: React.Dispatch<React.SetStateAction<string | undefined>>;
  email?: string;
  setEmail: React.Dispatch<React.SetStateAction<string | undefined>>;
  index?: string;
  open: boolean;
  handleOpen: () => void;
  handleClose: () => void;
  loading: boolean;
  universityData?: UniversityDataProps[];
  filterData?: UniversityDataProps[] | null;
  openSnackbar: boolean;
  setOpenSnackbar: React.Dispatch<React.SetStateAction<boolean>>;
  snackbarMessage?: string;
  addSpinner: boolean;
  removeSpinner: boolean;
  openDeleteDialog: boolean;
  error: ErrorProps;
  validation: () => void;
  onDeleteButton: (id: string) => void;
  onEditButton: (id: string) => void;
  handleCloseDialog: () => void;
  removeUniversity: () => void;
  universitySearch: (value: string) => void;
  disable: boolean;
}

export interface UniversityDataProps {
  id: string;
  searialNo?: number;
  universityName: string;
  email: string;
  date: string;
}

export interface ErrorProps {
  university: string | undefined;
  email: string | undefined;
}
