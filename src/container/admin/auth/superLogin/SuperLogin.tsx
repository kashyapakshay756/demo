import React from "react";
import { Link } from "react-router-dom";
import Index from "../../../../component/componentIndex";
import SuperLoginController from "./superLogin.controller";

const SuperLogin: React.FC = () => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    showPassword,
    handleClickShowPassword,
    handleMouseDownPassword,
    validation,
    loading,
    openSnackbar,
    setOpenSnackbar,
    snackbarMessage,
    error,
  } = SuperLoginController();
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
                <Index.Box className="input-design-div admin-design-div">
                  <Index.Stack
                    // component="form"
                    spacing={2}
                    // noValidate
                    // autoComplete="off"
                  >
                    <Index.TextField
                      hiddenLabel
                      id="filled-hidden-label-normal"
                      placeholder="Email"
                      variant="filled"
                      value={email}
                      onChange={(val) => setEmail(val?.target?.value)}
                      className="admin-input-design input-placeholder"
                      helperText={error.email}
                    />
                    <Index.FormControl
                      variant="outlined"
                      className="password-inputdesign"
                    >
                      <Index.TextField
                        id="outlined-adornment-password"
                        placeholder="Password"
                        value={password}
                        onChange={(val) => setPassword(val?.target?.value)}
                        type={showPassword ? "text" : "password"}
                        helperText={error.password}
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
                    </Index.FormControl>
                  </Index.Stack>
                </Index.Box>
                <Index.Box
                  onClick={preventDefault}
                  className="forgotpassword-main admin-forgotpassword-main"
                >
                  <Link to="/recoveryemail" className="forgotpassword-a">
                    Forgot password?
                  </Link>
                </Index.Box>
                <Index.Box className="orange-btn login-btn">
                  <Index.Button
                    variant="contained"
                    disableRipple
                    onClick={validation}
                    loading={loading}
                  >
                    Login
                  </Index.Button>
                </Index.Box>
                <Index.Snackbar
                  open={openSnackbar}
                  onClose={() => setOpenSnackbar(false)}
                  onCloseClick={() => setOpenSnackbar(false)}
                  anchorOrigin={{ vertical: "top", horizontal: "right" }}
                  message={snackbarMessage}
                  autoHideDuration={5000}
                />
              </Index.Box>
            </Index.Box>
          </Index.Box>
        </Index.Box>
      </Index.Box>
    </div>
  );
};

export default SuperLogin;
