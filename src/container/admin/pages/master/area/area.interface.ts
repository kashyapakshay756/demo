import React from "react";

export interface AreaControllerProps {
  search?: string;
  area?: string;
  setArea: React.Dispatch<React.SetStateAction<string>>;
  open: boolean;
  handleOpen: () => void;
  handleClose: () => void;
  openSnackbar: boolean;
  snackbarMessage?: string;
  loading: boolean;
  addSpinner: boolean;
  error?: string;
  validation: () => void;
  areaData?: AreaDataProps[];
  filterData?: AreaDataProps[] | null;
  index?: string;
  removeSpinner: boolean;
  onEditButton: (id: string) => void;
  onDeleteButton: (id: string) => void;
  handleCloseSnackbar: () => void;
  openDeleteDialog: boolean;
  handleCloseDialog: () => void;
  removeArea: () => void;
  areaSearch: (value: string) => void;
  disable: boolean;
}

export interface AreaDataProps {
  id: string;
  serialNo?: number;
  areaName: string;
  date: string;
}
