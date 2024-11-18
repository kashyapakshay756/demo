import React from "react";
import Index from "../../../../component/componentIndex";
import PasswordResetController from "./passwordReset.controller";
import { StyledItem } from "../../../../component/commonStyles";

const PasswordReset: React.FC = () => {
  const {
    setConfirmPassword,
    setEmail,
    setNewPassword,
    confirmPassword,
    email,
    newPassword,
    error,
    validation,
    loading,
    openSnackbar,
    setOpenSnackbar,
    snackbarMessage,
    handleClickShowPassword,
    handleMouseDownPassword,
    showPassword,
    handleClickShowConfirmPassword,
    showConfirmPassword,
  } = PasswordResetController();
  return (
    <div>
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
                              Recovery Email Address
                            </Index.Typography>
                          </Index.Box>
                          <Index.TextField
                            hiddenLabel
                            id="filled-hidden-label-normal"
                            placeholder="Email Address"
                            value={email}
                            onChange={(val) => setEmail(val?.target?.value)}
                            variant="filled"
                            className="input-design input-top input-placeholder set-getting-box"
                            helperText={error.email}
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
                              Reset Password
                            </Index.Typography>
                          </Index.Box>
                          <Index.TextField
                            hiddenLabel
                            id="filled-hidden-label-normal"
                            placeholder="Reset Password"
                            value={newPassword}
                            onChange={(val) =>
                              setNewPassword(val?.target?.value)
                            }
                            variant="filled"
                            className="input-design input-top input-placeholder set-getting-box"
                            type={showPassword ? "text" : "password"}
                            helperText={error.newPassword}
                            inputProps={{ maxLength: 32 }}
                            InputProps={{
                              endAdornment: (
                                <Index.InputAdornment position="end">
                                  <Index.IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                  >
                                    {showPassword ? (
                                      <Index.VisibilityOff />
                                    ) : (
                                      <Index.Visibility />
                                    )}
                                  </Index.IconButton>
                                </Index.InputAdornment>
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
                              Retype Password
                            </Index.Typography>
                          </Index.Box>
                          <Index.TextField
                            hiddenLabel
                            id="filled-hidden-label-normal"
                            placeholder="Retype Password"
                            value={confirmPassword}
                            onChange={(val) =>
                              setConfirmPassword(val?.target?.value)
                            }
                            variant="filled"
                            className="input-design input-top input-placeholder set-getting-box"
                            type={showConfirmPassword ? "text" : "password"}
                            helperText={error.confirmPassword}
                            inputProps={{ maxLength: 32 }}
                            InputProps={{
                              endAdornment: (
                                <Index.InputAdornment position="end">
                                  <Index.IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowConfirmPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                  >
                                    {showConfirmPassword ? (
                                      <Index.VisibilityOff />
                                    ) : (
                                      <Index.Visibility />
                                    )}
                                  </Index.IconButton>
                                </Index.InputAdornment>
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
                        className="item-top admin-profile-button"
                      >
                        <StyledItem>
                          <Index.Box className="orange-btn payment-btn login-btn">
                            <Index.Button
                              variant="contained"
                              disableRipple
                              onClick={validation}
                              loading={loading}
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
    </div>
  );
};

export default PasswordReset;
