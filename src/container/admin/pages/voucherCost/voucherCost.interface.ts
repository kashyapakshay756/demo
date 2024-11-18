import React from "react";

export interface VoucherCostControllerProps {
  search?: string;
  loading: boolean;
  editSpinner: boolean;
  open: boolean;
  id?: string;
  businessData?: BusinessDataProps[];
  filterData?: BusinessDataProps[] | null;
  businessSearch: (value: string) => void;
  handleOpen: (id: string) => void;
  handleClose: () => void;
  data?: BusinessDataProps;
  voucherCost?: string;
  setVoucherCost: React.Dispatch<React.SetStateAction<string | undefined>>;
  voucherVat?: string;
  setVoucherVat: React.Dispatch<React.SetStateAction<string | undefined>>;
  validation: () => void;
  error: ErrorProps;
  snackbar: boolean;
  disable: boolean;
  setSnackbar: React.Dispatch<React.SetStateAction<boolean>>;
  toast?: string;
}

export interface BusinessDataProps {
  id: string;
  serialNo: number;
  businessName: string;
  email: string;
  totalAmount: string;
  area: string;
  voucherCost: string;
  voucherVat: string;
}

export interface ErrorProps {
  voucherCost: string | null;
  voucherVat: string | null;
}
