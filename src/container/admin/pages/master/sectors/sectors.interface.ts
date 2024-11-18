export interface SectorControllerProps {
  sector?: string;
  setSector: React.Dispatch<React.SetStateAction<string | undefined>>;
  open: boolean;
  handleOpen: () => void;
  handleClose: () => void;
  loading: boolean;
  sectorData?: SectorDataProps[];
  filterData?: SectorDataProps[] | null;
  addSpinner: boolean;
  removeSpinner: boolean;
  openSnackbar: boolean;
  openDeleteDialog: boolean;
  snackbarMessage?: string;
  handleCloseSnackbar: () => void;
  handleCloseDialog: () => void;
  error?: string;
  index?: string;
  validation: () => void;
  onEditButton: (id: string) => void;
  onDeleteButton: (id: string) => void;
  removeSector: () => void;
  search?: string;
  sectorSearch: (value: string) => void;
  disable: boolean;
}

export interface SectorDataProps {
  id: string;
  serialNo?: number;
  sector: string;
  date: string;
}
