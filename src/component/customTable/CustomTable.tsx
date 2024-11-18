import React, { memo } from "react";
import {
  Box,
  Paper,
  styled,
  Table,
  TableBody,
  TableCell,
  tableCellClasses,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
} from "@mui/material";
import CustomTableController from "./customTable.controller";
import { CustomTableProps, TableCellDataProps } from "./customTable.interface";
import DeleteDialog from "../deleteDialog/DeleteDialog";
import TableItemCard from "./tableItemCard/TableItemCard";

const StyledTableCell: any = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#027C8A",
    color: "white",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const CustomTable: React.FC<CustomTableProps> = ({
  tableData,
  tableCellData,
  isViewButton,
  isEditButton,
  onViewButton,
  onEditButton,
  tableClass,
  isDeleteButton,
  onDeleteButton,
  deleteSpinner,
  dialogTitle,
  handleCloseDialog,
  handleDelete,
  openDialog,
  isVoucher,
  isButton,
  end,
  listEmptyText,
  deleteDisabled,
  search,
}) => {
  const { page, rowsPerPage, handleChangePage, handleChangeRowsPerPage } =
    CustomTableController({
      tableData,
      tableCellData,
      isViewButton,
      isEditButton,
      onViewButton,
      onEditButton,
      tableClass,
      isDeleteButton,
      onDeleteButton,
      deleteSpinner,
      dialogTitle,
      handleCloseDialog,
      handleDelete,
      openDialog,
      isVoucher,
      isButton,
      end,
      listEmptyText,
      deleteDisabled,
      search,
    });
  return (
    <Box>
      <Box className="table-main-div">
        <TableContainer component={Paper}>
          <TableContainer>
            <Table aria-label="simple table" className={tableClass}>
              <TableHead>
                <TableRow>
                  {tableCellData?.map((item: TableCellDataProps) => (
                    <StyledTableCell key={item.id} align="center">
                      {item.title}
                    </StyledTableCell>
                  ))}
                </TableRow>
              </TableHead>
              {tableData?.length !== 0 && (
                <TableBody>
                  {tableData
                    ?.slice(
                      page * rowsPerPage,
                      page * rowsPerPage + rowsPerPage
                    )
                    ?.map((item: any, index: number) => (
                      <React.Fragment key={item?.id}>
                        <TableItemCard
                          item={item}
                          isViewButton={isViewButton}
                          isEditButton={isEditButton}
                          isVoucher={isVoucher}
                          isButton={isButton}
                          onViewButton={() =>
                            onViewButton && onViewButton(item.id)
                          }
                          onEditButton={() =>
                            onEditButton && onEditButton(item.id)
                          }
                          isDeleteButton={isDeleteButton}
                          onDeleteButton={() =>
                            onDeleteButton && onDeleteButton(item.id)
                          }
                          end={end}
                        />
                      </React.Fragment>
                    ))}
                </TableBody>
              )}
            </Table>
            {tableData?.length !== 0 && (
              <TablePagination
                rowsPerPageOptions={[10, 25, 50, 75, 100]}
                component="div"
                count={tableData?.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
              />
            )}
          </TableContainer>
          {tableData?.length === 0 && (
            <Box
              sx={{
                height: "30vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography
                sx={{
                  color: "#ed753f",
                  fontSize: 20,
                }}
              >
                {listEmptyText}
              </Typography>
            </Box>
          )}
        </TableContainer>
      </Box>
      {openDialog && (
        <DeleteDialog
          dialogTitle={dialogTitle}
          open={openDialog}
          onClose={handleCloseDialog}
          handleDelete={() => {
            handleDelete && handleDelete();
          }}
          handleCancel={handleCloseDialog}
          loading={deleteSpinner}
          deleteDisabled={deleteDisabled}
        />
      )}
    </Box>
  );
};

export default memo(CustomTable);
