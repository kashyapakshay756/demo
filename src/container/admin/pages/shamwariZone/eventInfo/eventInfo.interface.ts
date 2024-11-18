import { SelectChangeEvent } from "@mui/material";
import { TableCellDataProps } from "../../../../../component/customTable/customTable.interface";

export interface EventInfoControllerProps {
  goBack: () => void;
  eventId: string | undefined;
  openDialog: boolean;
  handleOpenDialog: () => void;
  handleCloseDialog: () => void;
  editable: boolean;
  setEditable: React.Dispatch<React.SetStateAction<boolean>>;
  openSnackbar: boolean;
  setOpenSnackbar: React.Dispatch<React.SetStateAction<boolean>>;
  snackbarMessage?: string;
  title?: string;
  setTitle: React.Dispatch<React.SetStateAction<string | undefined>>;
  isStudent?: string[];
  universityName: string;
  areaName?: string;
  date?: any;
  time: any;
  address?: string;
  setAddress: React.Dispatch<React.SetStateAction<string | undefined>>;
  noOfTickets?: string;
  setNoOfTickets: React.Dispatch<React.SetStateAction<string | undefined>>;
  ticketPrice?: string;
  setTicketPrice: React.Dispatch<React.SetStateAction<string | undefined>>;
  info?: string;
  setInfo: React.Dispatch<React.SetStateAction<string | undefined>>;
  image?: any;
  error: ErrorProps;
  universityData: TableCellDataProps[];
  areaData: TableCellDataProps[];
  handleUniversityChange: (event: SelectChangeEvent) => void;
  handleAreaChange: (event: SelectChangeEvent) => void;
  handleImageUpload: (e: any) => void;
  postSpinner: boolean;
  validation: () => void;
  onSelect: (title: string) => void;
  deleteSpinner: boolean;
  deleteEvent: () => void;
  onChangeTime: (item: string | null) => void;
  onChangeDate: (item: string | null) => void;
  today?: string;
  disable: boolean;
}

export interface ErrorProps {
  title: string | undefined;
  university: string | undefined;
  area: string | undefined;
  date: string | undefined;
  time: string | undefined;
  address: string | undefined;
  noOfTickets: string | undefined;
  ticketPrice: string | undefined;
  info: string | undefined;
  image: string | undefined;
  selection: string | undefined;
}
