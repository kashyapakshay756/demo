import React from "react";
import { CircularProgress } from "@mui/material";
import AreaController from "./area.controller";
import Index from "../../../../../component/componentIndex";
import { tableCellData } from "./area.const";
import {
  SearchIconWrapper,
  StyledInputBase,
  StyledItem,
  StyledSearch,
  style,
  ProgressContainer,
} from "../../../../../component/commonStyles";

const Area: React.FC = () => {
  const {
    search,
    area,
    setArea,
    open,
    handleClose,
    handleOpen,
    addSpinner,
    error,
    validation,
    openSnackbar,
    snackbarMessage,
    areaData,
    loading,
    index,
    removeSpinner,
    onDeleteButton,
    onEditButton,
    handleCloseSnackbar,
    openDeleteDialog,
    handleCloseDialog,
    removeArea,
    areaSearch,
    filterData,
    disable,
  } = AreaController();
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
              <Index.Box className="d-flex res-admin-btn-set">
                <Index.Box sx={{ flexGrow: 1 }} className="search-main">
                  <StyledSearch className="search">
                    <SearchIconWrapper className="search-icon">
                      <Index.SearchIcon />
                    </SearchIconWrapper>
                    <StyledInputBase
                      placeholder="Search…"
                      value={search}
                      onChange={(val) => areaSearch(val?.target.value)}
                      inputProps={{ "aria-label": "search" }}
                    />
                  </StyledSearch>
                </Index.Box>
              </Index.Box>
              <Index.AddButton onAdd={handleOpen} />
            </Index.Box>
          </Index.Box>
          <Index.CustomTable
            // tableClass="table-main user-table users-table"
            tableClass="table-main user-table area-table area-tbl-f-set"
            tableCellData={tableCellData}
            tableData={filterData === null ? areaData : filterData}
            isButton
            isEditButton
            onEditButton={(id: string) => {
              onEditButton(id);
            }}
            isDeleteButton
            onDeleteButton={(id: string) => {
              onDeleteButton(id);
            }}
            deleteDisabled={disable}
            dialogTitle="Are you sure you want to delete this area?"
            openDialog={openDeleteDialog}
            handleCloseDialog={handleCloseDialog}
            handleDelete={removeArea}
            deleteSpinner={removeSpinner}
            end
            listEmptyText="No area available"
            search={search}
          />
          <Index.Snackbar
            open={openSnackbar}
            onClose={handleCloseSnackbar}
            onCloseClick={handleCloseSnackbar}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            message={snackbarMessage}
            autoHideDuration={3000}
          />
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
                      Area Name
                    </Index.Typography>
                  </Index.Box>
                  <Index.Box className="main-modal-scroll-set">
                    <Index.Box className="res-set-modal main-modal-scroll admin-modal">
                      <Index.Grid container spacing={2} className="pt-15">
                        <Index.Box className="input-design-div profile-div w-100 admin-sector">
                          <Index.Grid
                            item
                            xs={12}
                            sm={12}
                            md={12}
                            lg={12}
                            className="item-top profile-info-label"
                          >
                            <StyledItem>
                              <Index.Box className="admin-profile-text">
                                <Index.Typography
                                  className=" profile-text"
                                  variant="body1"
                                  component="p"
                                >
                                  Area Name
                                </Index.Typography>
                              </Index.Box>
                              <Index.TextField
                                hiddenLabel
                                id="filled-hidden-label-normal"
                                placeholder="Area Name"
                                value={area}
                                onChange={(val) => setArea(val?.target?.value)}
                                variant="filled"
                                className="input-design input-top input-placeholder set-getting-box"
                                helperText={error}
                                inputProps={{ maxLength: 40 }}
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
                          loading={addSpinner}
                          disabled={disable}
                        >
                          {index ? "Update" : "Save"}
                        </Index.Button>
                      </Index.Box>
                    </Index.Box>
                  </Index.Box>
                </Index.Box>
              </Index.Box>
            </Index.Modal>
          </Index.Modal>
        </>
      )}
    </>
  );
};

export default Area;
