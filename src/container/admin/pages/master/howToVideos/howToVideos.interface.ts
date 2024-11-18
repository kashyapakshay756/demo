import { SyntheticEvent } from "react";
import { TabChangeProps } from "../../users/personalInfo/personalInfo.interface";

export interface HowToVideosControllerProps {
  loading: boolean;
  search?: string;
  handleSearch: (value: string) => void;
  title?: string;
  setTitle: React.Dispatch<React.SetStateAction<string | undefined>>;
  videoLink?: any;
  index?: string;
  open: boolean;
  handleOpen: () => void;
  handleClose: () => void;
  videoList?: VideoListProps[];
  userVideoList?: VideoListProps[];
  filterData?: VideoListProps[] | null;
  openSnackbar: boolean;
  setOpenSnackbar: React.Dispatch<React.SetStateAction<boolean>>;
  snackbarMessage?: string;
  addSpinner: boolean;
  removeSpinner: boolean;
  openDeleteDialog: boolean;
  error: ErrorProps;
  validation: () => void;
  handleUpload: (e: any) => void;
  handleOpenDeleteDialog: (id: string) => void;
  handleCloseDeleteDialog: () => void;
  onEditButton: (id: string) => void;
  removeVideo: () => void;
  tabValue: number;
  handleTabValueChange: (event: SyntheticEvent, newValue: number) => void;
  tabChange: (index: number) => TabChangeProps;
  disable: boolean;
}

export interface ErrorProps {
  title: string | undefined;
  videoLink: string | undefined;
}

export interface VideoListProps {
  id: string;
  searialNo?: number;
  title: string;
  video: string;
  date: string;
}
