import React from "react";
import { CircularProgress, InputAdornment } from "@mui/material";
import Index from "../../../../component/componentIndex";
import SubscriptionController from "./subscription.controller";
import {
  StyledItem,
  ProgressContainer,
} from "../../../../component/commonStyles";

const Subscription: React.FC = () => {
  const {
    setVatAmount,
    setYearlyCost,
    vatAmount,
    yearlyCost,
    error,
    validation,
    loading,
    updateSpinner,
    openSnackbar,
    setOpenSnackbar,
    snackbarMessage,
  } = SubscriptionController();
  return (
    <>
      {loading ? (
        <ProgressContainer>
          <CircularProgress size={40} sx={{ color: "primary" }} />
        </ProgressContainer>
      ) : (
        <>
          <Index.Box className="search-main-header">
            <Index.Box className="search-header space-between"></Index.Box>
          </Index.Box>
          <Index.Box className="back-f5">
            <Index.Box className="content-inner-main">
              <Index.Box className="profile-main">
                <Index.Box className="profile-card">
                  <Index.Box className="profile-card-inner">
                    <Index.Box className="">
                      <Index.Box className="input-design-div profile-div">
                        <Index.Grid container spacing={2} className="pt-15">
                          <Index.Grid
                            item
                            xs={12}
                            sm={6}
                            md={6}
                            lg={6}
                            className="item-top"
                          >
                            <StyledItem>
                              <Index.Box className="admin-profile-text">
                                <Index.Typography
                                  className=" profile-text"
                                  variant="body1"
                                  component="p"
                                >
                                  Master Yearly Cost
                                </Index.Typography>
                              </Index.Box>
                              <Index.TextField
                                hiddenLabel
                                id="filled-hidden-label-normal"
                                type="number"
                                placeholder="Master Yearly Cost"
                                value={yearlyCost}
                                onChange={(val) => {
                                  if (val.target.value.length <= 10) {
                                    setYearlyCost(val?.target?.value);
                                  }
                                }}
                                variant="filled"
                                className="input-design input-top input-placeholder set-getting-box"
                                inputProps={{ maxLength: 10 }}
                                helperText={error.yearlyCost}
                                InputProps={{
                                  startAdornment: (
                                    <InputAdornment position="start">
                                      £
                                    </InputAdornment>
                                  ),
                                }}
                              />
                            </StyledItem>
                          </Index.Grid>
                        </Index.Grid>
                        <Index.Grid container spacing={2} className="pt-15">
                          <Index.Grid
                            item
                            xs={12}
                            sm={6}
                            md={6}
                            lg={6}
                            className="item-top"
                          >
                            <StyledItem>
                              <Index.Box className="admin-profile-text">
                                <Index.Typography
                                  className=" profile-text"
                                  variant="body1"
                                  component="p"
                                >
                                  Vat Percentage
                                </Index.Typography>
                              </Index.Box>
                              <Index.TextField
                                hiddenLabel
                                id="filled-hidden-label-normal"
                                placeholder="Vat Percentage"
                                type="number"
                                value={vatAmount}
                                onChange={(val) => {
                                  if (val?.target?.value?.length <= 10) {
                                    setVatAmount(val?.target?.value);
                                  }
                                }}
                                variant="filled"
                                className="input-design input-top input-placeholder set-getting-box"
                                inputProps={{ maxLength: 10 }}
                                helperText={error.vatAmount}
                              />
                            </StyledItem>
                          </Index.Grid>
                        </Index.Grid>
                        <Index.Grid container spacing={2} className="pt-15">
                          <Index.Grid
                            item
                            xs={12}
                            sm={6}
                            md={6}
                            lg={6}
                            className="item-top"
                          >
                            <StyledItem></StyledItem>
                          </Index.Grid>
                        </Index.Grid>
                        <Index.Grid container spacing={2} className="pt-15">
                          <Index.Grid
                            item
                            xs={12}
                            sm={6}
                            md={6}
                            lg={6}
                            className="item-top"
                          >
                            <StyledItem>
                              <Index.Box className="orange-btn voucher-save-btn ">
                                <Index.Button
                                  variant="contained"
                                  disableRipple
                                  loading={updateSpinner}
                                  onClick={validation}
                                >
                                  Save
                                </Index.Button>
                              </Index.Box>
                            </StyledItem>
                          </Index.Grid>
                        </Index.Grid>
                      </Index.Box>
                      <Index.Snackbar
                        open={openSnackbar}
                        onClose={() => setOpenSnackbar(false)}
                        onCloseClick={() => setOpenSnackbar(false)}
                        anchorOrigin={{
                          vertical: "top",
                          horizontal: "right",
                        }}
                        message={snackbarMessage}
                        autoHideDuration={5000}
                      />
                    </Index.Box>
                  </Index.Box>
                </Index.Box>
              </Index.Box>
            </Index.Box>
          </Index.Box>
        </>
      )}
    </>
  );
};

export default Subscription;
