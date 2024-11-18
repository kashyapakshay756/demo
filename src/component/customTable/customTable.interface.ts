export interface CustomTableProps {
  tableData: any;
  tableCellData: TableCellDataProps[];
  isViewButton?: boolean;
  isEditButton?: boolean;
  onViewButton?: (id: string) => void;
  onEditButton?: (id: string) => void;
  tableClass?: string;
  isDeleteButton?: boolean;
  onDeleteButton?: (id: string) => void;
  dialogTitle?: string;
  openDialog?: boolean;
  handleCloseDialog?: () => void;
  handleDelete?: () => void;
  deleteSpinner?: boolean;
  isVoucher?: boolean;
  isButton?: boolean;
  end?: boolean;
  listEmptyText?: string;
  deleteDisabled?: boolean;
  search?: string;
}

export interface CustomTableControllerProps {
  page: number;
  rowsPerPage: number;
  handleChangePage: (event: unknown, newPage: number) => void;
  handleChangeRowsPerPage: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleUserDetails: (id: string, navigationTo: string) => void;
}

export interface TableCellDataProps {
  id: number;
  title: string;
}
