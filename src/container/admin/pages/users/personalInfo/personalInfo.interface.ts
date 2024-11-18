import React from "react";
import { UserDataProps } from "../../../../../services/redux/userData/interface";

export interface PersonalInfoControllerProps {
  tabValue: number;
  handleTabValueChange: (event: React.SyntheticEvent, newValue: number) => void;
  tabChange: (index: number) => TabChangeProps;
  goBack: () => void;
  userInfo?: UserDataProps;
  deleteSpinner: boolean;
  disable: boolean;
  deleteUser: () => void;
  openDialog: boolean;
  handleOpenDialog: () => void;
  handleCloseDialog: () => void;
  voucherSpinner: boolean;
  voucherList: VoucherListProps[];
  loading: boolean;
  calculateAge: (birthDate: any) => number;
}

export interface TabChangeProps {
  id: string;
  "aria-controls": string;
}

export interface VoucherListProps {
  id: number;
  code: string;
  date: string;
  businessName: string;
  savingAmount: string;
}
