import React from "react";
import { CircularProgress } from "@mui/material";
import Index from "../../../../../component/componentIndex";
import OfferTemplatesController from "./offerTemplates.controller";
import { tableCellData } from "./offerTemplates.const";
import {
  ProgressContainer,
  StyledSearch,
  SearchIconWrapper,
  StyledInputBase,
  StyledItem,
  style,
  StyledTextField,
} from "../../../../../component/commonStyles";

const OfferTemplates: React.FC = () => {
  const {
    loading,
    handleSearch,
    search,
    handleClose,
    handleOpen,
    open,
    index,
    addSpinner,
    error,
    filterData,
    openDeleteDialog,
    openSnackbar,
    removeSpinner,
    setOpenSnackbar,
    snackbarMessage,
    validation,
    handleUpload,
    pdf,
    templateData,
    setTitle,
    title,
    onEditButton,
    handleCloseDeleteDialog,
    handleOpenDeleteDialog,
    removeTemplate,
    disable,
  } = OfferTemplatesController();
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
              <Index.Box className="d-flex res-admin-btn-set ">
                <Index.Box sx={{ flexGrow: 1 }} className="search-main">
                  <StyledSearch className="search">
                    <SearchIconWrapper className="search-icon">
                      <Index.SearchIcon />
                    </SearchIconWrapper>
                    <StyledInputBase
                      placeholder="Search…"
                      value={search}
                      onChange={(val) => handleSearch(val?.target.value)}
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
            tableClass="table-main user-table universitydropdown-table"
            tableCellData={tableCellData}
            tableData={filterData === null ? templateData : filterData}
            isButton
            isDeleteButton
            isEditButton
            onEditButton={onEditButton}
            onDeleteButton={handleOpenDeleteDialog}
            dialogTitle="Are you sure you want to delete this template?"
            openDialog={openDeleteDialog}
            handleCloseDialog={handleCloseDeleteDialog}
            handleDelete={removeTemplate}
            deleteSpinner={removeSpinner}
            listEmptyText="No offer template available"
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
                      Offer Template
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
                                  Title
                                </Index.Typography>
                              </Index.Box>
                              <Index.TextField
                                hiddenLabel
                                id="filled-hidden-label-normal"
                                placeholder="Title"
                                value={title}
                                onChange={(val) => setTitle(val?.target?.value)}
                                variant="filled"
                                className="input-design input-top input-placeholder set-getting-box"
                                helperText={error.title}
                              />
                            </StyledItem>
                          </Index.Grid>
                          <Index.Grid
                            item
                            xs={12}
                            sm={12}
                            md={12}
                            lg={12}
                            className="add-btn"
                          >
                            <StyledItem>
                              <StyledTextField
                                hiddenLabel
                                id="filled-hidden-label-normal"
                                helperText={error.pdfError}
                                disabled
                                multiline
                                minRows={1}
                                maxRows={3}
                                sx={{
                                  "& .MuiInputBase-root.Mui-disabled": {
                                    paddingTop: 3,
                                    paddingBottom: 3,
                                  },
                                }}
                                placeholder={
                                  pdf?.name
                                    ? pdf?.name
                                    : pdf
                                    ? pdf
                                    : "Upload PDF"
                                }
                                variant="filled"
                                className="input-design input-top input-placeholder set-getting-box set-admin-upload"
                                InputProps={{
                                  endAdornment: (
                                    <Index.InputAdornment position="end">
                                      <Index.Box className="orange-btn-modal payment-btn set-position-upload-btn ">
                                        <Index.Box className="upload-btn">
                                          <Index.Button
                                            variant="contained"
                                            disableRipple
                                          >
                                            Upload
                                          </Index.Button>
                                          <input
                                            accept="image/*"
                                            type="file"
                                            className="upload-btn-input"
                                            onChange={handleUpload}
                                          />
                                        </Index.Box>
                                      </Index.Box>
                                    </Index.InputAdornment>
                                  ),
                                }}
                              />
                            </StyledItem>
                            {/* <Index.Box>
                              <ErrorText error={error.pdfError} />
                            </Index.Box> */}
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

export default OfferTemplates;
