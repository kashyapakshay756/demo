import React from "react";
import Index from "../../../../component/componentIndex";
import StrongPasswordController from "./strongPassword.controller";

const StrongPassword: React.FC = () => {
  const {
    newPassword,
    confirmPassword,
    setNewPassword,
    setConfirmPassword,
    showPassword,
    handleClickShowPassword,
    handleMouseDownPassword,
    error,
    loading,
    validation,
    handleClickShowConfirmPassword,
    showConfirmPassword,
    openSnackbar,
    setOpenSnackbar,
    snackbarMessage,
  } = StrongPasswordController();

  const preventDefault = (event: React.SyntheticEvent) =>
    event.preventDefault();
  return (
    <div>
      <Index.Box className="auto-innercontent super-auto-innercontent">
        <Index.Box>
          <Index.Box className="login-box-main">
            <Index.Box className="login-box">
              <Index.Box className="logo">
                <img src={Index.Svg.Logo} alt="" className="d-flex m-auto" />
                <Index.Box className="admin-recovery admin-code ">
                  <Index.Typography variant="body1" component="p">
                    Choose a strong new password.
                    <br />
                    Make sure it includes a number
                    <br /> and a capital letter
                  </Index.Typography>
                </Index.Box>
                <Index.Box className="input-design-div admin-design-div">
                  <Index.Stack
                    component="form"
                    spacing={2}
                    noValidate
                    autoComplete="off"
                  >
                    <Index.FormControl
                      variant="outlined"
                      className="password-inputdesign"
                    >
                      <Index.TextField
                        id="outlined-adornment-new-password"
                        placeholder="New Password"
                        value={newPassword}
                        onChange={(val) => setNewPassword(val?.target?.value)}
                        type={showPassword ? "text" : "password"}
                        inputProps={{ maxLength: 32 }}
                        helperText={error.newPassword}
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
                    </Index.FormControl>
                    <Index.FormControl
                      variant="outlined"
                      className="password-inputdesign"
                    >
                      <Index.TextField
                        id="outlined-adornment-confirm-password"
                        placeholder="Confirm Password"
                        value={confirmPassword}
                        onChange={(val) =>
                          setConfirmPassword(val?.target?.value)
                        }
                        type={showConfirmPassword ? "text" : "password"}
                        inputProps={{ maxLength: 32 }}
                        helperText={error.confirmPassword}
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
                    </Index.FormControl>
                  </Index.Stack>
                </Index.Box>
                <Index.Box className="orange-btn login-btn">
                  <Index.Button
                    variant="contained"
                    disableRipple
                    loading={loading}
                    onClick={validation}
                  >
                    Done
                  </Index.Button>
                </Index.Box>
                <Index.Snackbar
                  open={openSnackbar}
                  onClose={() => setOpenSnackbar(false)}
                  onCloseClick={() => setOpenSnackbar(false)}
                  anchorOrigin={{ vertical: "top", horizontal: "right" }}
                  message={snackbarMessage}
                  autoHideDuration={3000}
                />
              </Index.Box>
            </Index.Box>
          </Index.Box>
        </Index.Box>
      </Index.Box>
    </div>
  );
};

export default StrongPassword;
