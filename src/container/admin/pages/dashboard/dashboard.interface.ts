import { SelectChangeEvent } from "@mui/material";

export interface DashboardControllerProps {
  handleBackround: () => void;
  handleCloseDropdown: () => void;
  loading: boolean;
  select: number;
  handleSelection: (event: SelectChangeEvent) => void;
  dashboard?: DashboardProps;
  openSnackbar: boolean;
  handleCloseSnackbar: () => void;
  data: any;
}

export interface DashboardProps {
  user: number;
  business: number;
  businessTrasactions: number;
  businessFunds: number;
  businessCreditIssued: number;
  useCode: number;
}
