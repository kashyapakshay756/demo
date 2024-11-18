import React from "react";
import { CircularProgress } from "@mui/material";
import Index from "../../../../component/componentIndex";
import { tableCellData } from "./voucherCost.const";
import VoucherCostController from "./voucherCost.controller";
import {
  ProgressContainer,
  SearchIconWrapper,
  style,
  StyledInputBase,
  StyledItem,
  StyledSearch,
} from "../../../../component/commonStyles";

const VoucherCost: React.FC = () => {
  const {
    search,
    loading,
    businessData,
    filterData,
    businessSearch,
    handleClose,
    open,
    handleOpen,
    data,
    setVoucherCost,
    setVoucherVat,
    voucherCost,
    voucherVat,
    validation,
    id,
    error,
    editSpinner,
    setSnackbar,
    snackbar,
    toast,
    disable,
  } = VoucherCostController();
  return (
    <>
      {loading ? (
        <ProgressContainer>
          <CircularProgress size={40} sx={{ color: "primary" }} />
        </ProgressContainer>
      ) : (
        <>
          <Index.Box className="search-main-header">
            <Index.Box className="search-header space-between">
              <Index.Box className="d-flex">
                <Index.Box sx={{ flexGrow: 1 }} className="search-main">
                  <StyledSearch className="search">
                    <SearchIconWrapper className="search-icon">
                      <Index.SearchIcon />
                    </SearchIconWrapper>
                    <StyledInputBase
                      placeholder="Search…"
                      value={search}
                      onChange={(val) => businessSearch(val?.target?.value)}
                      inputProps={{ "aria-label": "search" }}
                    />
                  </StyledSearch>
                </Index.Box>
              </Index.Box>
            </Index.Box>
          </Index.Box>
          <Index.CustomTable
            tableClass="table-main user-table business-table"
            tableCellData={tableCellData}
            tableData={filterData === null ? businessData : filterData}
            isButton
            isEditButton
            onEditButton={handleOpen}
            isVoucher
            listEmptyText="No voucher cost available"
            search={search}
          />
          <Index.Box className="">
            <Index.Box className="table-main-div"></Index.Box>
          </Index.Box>
          <Index.Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Index.Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
              className="set-modal-back"
            >
              <Index.Box className="">
                <Index.Box sx={style} className="main-modal">
                  <Index.Box className=""></Index.Box>
                  <Index.Box className="modal-text modal-space ">
                    <Index.Typography
                      variant="body1"
                      component="p"
                      className=""
                    >
                      {data?.businessName}
                    </Index.Typography>
                  </Index.Box>
                  <Index.Box className="main-modal-scroll-set">
                    <Index.Box className="res-set-modal main-modal-scroll admin-modal">
                      <Index.Grid container spacing={2} className="pt-15">
                        <Index.Box className="input-design-div profile-div w-100 admin-sector2">
                          <Index.Grid
                            item
                            xs={12}
                            sm={12}
                            md={12}
                            lg={12}
                            className="item-top "
                          >
                            <StyledItem>
                              <Index.Box className="admin-profile-text">
                                <Index.Typography
                                  className=" profile-text"
                                  variant="body1"
                                  component="p"
                                >
                                  Voucher Cost
                                </Index.Typography>
                              </Index.Box>
                              <Index.TextField
                                hiddenLabel
                                id="filled-hidden-label-normal"
                                placeholder="Voucher Cost"
                                value={voucherCost}
                                type="number"
                                onChange={(val) => {
                                  if (val?.target?.value?.length <= 10) {
                                    setVoucherCost(val?.target?.value);
                                  }
                                }}
                                variant="filled"
                                inputProps={{ maxLength: 10 }}
                                className="input-design input-top input-placeholder set-getting-box"
                                helperText={error.voucherCost}
                              />
                            </StyledItem>
                          </Index.Grid>
                          <Index.Grid
                            item
                            xs={12}
                            sm={12}
                            md={12}
                            lg={12}
                            className="item-top "
                          >
                            <StyledItem>
                              <Index.Box className="admin-profile-text">
                                <Index.Typography
                                  className=" profile-text"
                                  variant="body1"
                                  component="p"
                                >
                                  Voucher Vat
                                </Index.Typography>
                              </Index.Box>
                              <Index.TextField
                                hiddenLabel
                                id="filled-hidden-label-normal"
                                placeholder="Voucher Vat"
                                value={voucherVat}
                                type="number"
                                onChange={(val) => {
                                  if (val?.target?.value?.length <= 10) {
                                    setVoucherVat(val?.target?.value);
                                  }
                                }}
                                variant="filled"
                                inputProps={{ maxLength: 10 }}
                                className="input-design input-top input-placeholder set-getting-box"
                                helperText={error.voucherVat}
                              />
                            </StyledItem>
                          </Index.Grid>
                        </Index.Box>
                      </Index.Grid>
                      <Index.Box className="orange-btn payment-btn login-btn">
                        <Index.Button
                          variant="contained"
                          disableRipple
                          onClick={validation}
                          loading={editSpinner}
                          disabled={disable}
                        >
                          Update
                        </Index.Button>
                      </Index.Box>
                    </Index.Box>
                  </Index.Box>
                </Index.Box>
              </Index.Box>
            </Index.Modal>
          </Index.Modal>
          <Index.Snackbar
            open={snackbar}
            onClose={() => setSnackbar(false)}
            onCloseClick={() => setSnackbar(false)}
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
            message={toast}
            autoHideDuration={3000}
          />
        </>
      )}
    </>
  );
};

export default VoucherCost;
