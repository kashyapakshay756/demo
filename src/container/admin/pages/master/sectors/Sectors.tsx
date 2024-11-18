import React from "react";
import { CircularProgress } from "@mui/material";
import Index from "../../../../../component/componentIndex";
import SectorController from "./sectors.controller";
import { tableCellData } from "./sectors.const";
import {
  style,
  StyledItem,
  ProgressContainer,
  StyledSearch,
  SearchIconWrapper,
  StyledInputBase,
} from "../../../../../component/commonStyles";

const Sectors: React.FC = () => {
  const {
    setSector,
    sector,
    open,
    handleClose,
    handleOpen,
    loading,
    sectorData,
    addSpinner,
    openDeleteDialog,
    openSnackbar,
    removeSpinner,
    snackbarMessage,
    handleCloseDialog,
    handleCloseSnackbar,
    validation,
    error,
    index,
    onDeleteButton,
    onEditButton,
    removeSector,
    search,
    filterData,
    sectorSearch,
    disable,
  } = SectorController();
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
                      onChange={(val) => sectorSearch(val?.target.value)}
                      inputProps={{ "aria-label": "search" }}
                    />
                  </StyledSearch>
                </Index.Box>
              </Index.Box>
              <Index.AddButton onAdd={handleOpen} />
            </Index.Box>
            <Index.CustomTable
              tableClass="table-main user-table area-table area-tbl-f-set"
              // tableClass="table-main user-table areadropdown-table"
              tableCellData={tableCellData}
              tableData={filterData === null ? sectorData : filterData}
              end
              isButton
              isEditButton
              onEditButton={(id: string) => {
                onEditButton(id);
              }}
              isDeleteButton
              onDeleteButton={(id: string) => {
                onDeleteButton(id);
              }}
              dialogTitle="Are you sure you want to delete this sector?"
              openDialog={openDeleteDialog}
              handleCloseDialog={handleCloseDialog}
              handleDelete={removeSector}
              deleteSpinner={removeSpinner}
              listEmptyText="No sector available"
              deleteDisabled={disable}
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
            {/* <Index.Box className="profile-main">
              <Index.Box className="profile-card">
                <Index.Box className="profile-card-inner">
                  <Index.Box className="">
                    <Index.Box className="input-design-div profile-div">
                      <Index.Typography
                        className="orange-text profile-text"
                        variant="body1"
                        component="p"
                      >
                        Sector
                      </Index.Typography>
                      <Index.Grid container spacing={2} className="pt-15">
                        <Index.Grid
                          item
                          xs={12}
                          sm={6}
                          md={6}
                          lg={6}
                          className="item-top profile-info-label"
                        >
                          <StyledItem>
                            <Index.Box className="admin-profile-text">
                              <Index.Typography
                                className=" profile-text"
                                variant="body1"
                                component="p"
                              >
                                Food
                              </Index.Typography>
                            </Index.Box>
                            <Index.TextField
                              hiddenLabel
                              id="filled-hidden-label-normal"
                              placeholder="Food"
                              value={food}
                              onChange={(val) => setFood(val?.target?.value)}
                              variant="filled"
                              className="input-design input-top input-placeholder set-getting-box"
                            />
                          </StyledItem>
                        </Index.Grid>
                        <Index.Grid
                          item
                          xs={12}
                          sm={6}
                          md={6}
                          lg={6}
                          className="item-top profile-info-label"
                        >
                          <StyledItem>
                            <Index.Box className="admin-profile-text">
                              <Index.Typography
                                className=" profile-text"
                                variant="body1"
                                component="p"
                              >
                                Hotel
                              </Index.Typography>
                            </Index.Box>
                            <Index.TextField
                              hiddenLabel
                              id="filled-hidden-label-normal"
                              placeholder="Hotel"
                              value={hotel}
                              onChange={(val) => setHotel(val?.target?.value)}
                              variant="filled"
                              className="input-design input-top input-placeholder set-getting-box"
                            />
                          </StyledItem>
                        </Index.Grid>
                      </Index.Grid>
                    </Index.Box>
                  </Index.Box>
                </Index.Box>
              </Index.Box>
            </Index.Box> */}
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
                  <Index.Box className="">
                    {/* <Index.Box className="modal-logo">
                <img src={Index.Svg.Logo} alt="" className="d-flex m-auto" />
              </Index.Box> */}
                  </Index.Box>
                  <Index.Box className="modal-text modal-space ">
                    <Index.Typography
                      variant="body1"
                      component="p"
                      className=""
                    >
                      {index ? "Update Sector" : "Add Sector"}
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
                                  {"Sector Name"}
                                </Index.Typography>
                              </Index.Box>
                              <Index.TextField
                                hiddenLabel
                                id="filled-hidden-label-normal"
                                placeholder="Sector Name"
                                value={sector}
                                onChange={(val) =>
                                  setSector(val?.target?.value)
                                }
                                variant="filled"
                                className="input-design input-top input-placeholder set-getting-box"
                                helperText={error}
                              />
                            </StyledItem>
                          </Index.Grid>
                        </Index.Box>
                      </Index.Grid>
                      <Index.Box className="orange-btn payment-btn login-btn">
                        <Index.Button
                          variant="contained"
                          disableRipple
                          loading={addSpinner}
                          onClick={validation}
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

export default Sectors;
