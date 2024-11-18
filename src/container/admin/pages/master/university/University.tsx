import React from "react";
import { CircularProgress } from "@mui/material";
import Index from "../../../../../component/componentIndex";
import { tableCellData } from "./university.const";
import UniversityController from "./university.controller";
import {
  SearchIconWrapper,
  StyledInputBase,
  StyledItem,
  StyledSearch,
  style,
  ProgressContainer,
} from "../../../../../component/commonStyles";

const University: React.FC = () => {
  const {
    handleClose,
    handleOpen,
    open,
    search,
    setEmail,
    setUniversity,
    email,
    university,
    loading,
    universityData,
    openSnackbar,
    setOpenSnackbar,
    snackbarMessage,
    addSpinner,
    removeSpinner,
    error,
    validation,
    removeUniversity,
    index,
    onDeleteButton,
    handleCloseDialog,
    openDeleteDialog,
    onEditButton,
    filterData,
    universitySearch,
    disable,
  } = UniversityController();
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
                      onChange={(val) => universitySearch(val?.target.value)}
                      inputProps={{ "aria-label": "search" }}
                    />
                  </StyledSearch>
                </Index.Box>
              </Index.Box>
              <Index.AddButton onAdd={handleOpen} />
            </Index.Box>
          </Index.Box>
          <Index.CustomTable
            tableClass="table-main user-table universitydropdown-table"
            tableCellData={tableCellData}
            tableData={
              filterData === null ? universityData?.sort() : filterData
            }
            isButton
            isEditButton
            onEditButton={(id) => {
              onEditButton(id);
            }}
            isDeleteButton
            onDeleteButton={(id: string) => {
              onDeleteButton(id);
            }}
            dialogTitle="Are you sure you want to delete this university?"
            openDialog={openDeleteDialog}
            handleCloseDialog={handleCloseDialog}
            handleDelete={removeUniversity}
            deleteSpinner={removeSpinner}
            listEmptyText="No university available"
            deleteDisabled={disable}
            search={search}
          />
          <Index.Snackbar
            open={openSnackbar}
            onClose={() => setOpenSnackbar(false)}
            onCloseClick={() => setOpenSnackbar(false)}
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
                      University Name
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
                                  University Name
                                </Index.Typography>
                              </Index.Box>
                              <Index.TextField
                                hiddenLabel
                                id="filled-hidden-label-normal"
                                placeholder="University Name"
                                value={university}
                                onChange={(val) =>
                                  setUniversity(val?.target?.value)
                                }
                                variant="filled"
                                className="input-design input-top input-placeholder set-getting-box"
                                helperText={error.university}
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
                                  Email
                                </Index.Typography>
                              </Index.Box>
                              <Index.TextField
                                hiddenLabel
                                id="filled-hidden-label-normal"
                                placeholder="Email"
                                value={email}
                                onChange={(val) => setEmail(val?.target?.value)}
                                variant="filled"
                                className="input-design input-top input-placeholder set-getting-box"
                                helperText={error.email}
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

export default University;
