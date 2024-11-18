import React from "react";
import Index from "../../../../component/componentIndex";
import RecoveryEmailController from "./recoveryEmail.controller";

const RecoveryEmail: React.FC = () => {
  const {
    email,
    setEmail,
    loading,
    validation,
    error,
    openSnackbar,
    setOpenSnackbar,
    snackbarMessage,
  } = RecoveryEmailController();

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
                <Index.Box className="admin-recovery">
                  <Index.Typography
                    variant="body1"
                    component="p"
                    className="reset-inner-text"
                  >
                    Please enter the recovery email address below to reset the
                    password
                  </Index.Typography>
                </Index.Box>
                <Index.Box className="input-design-div admin-design-div">
                  <Index.Stack
                    component="form"
                    spacing={2}
                    noValidate
                    autoComplete="off"
                  >
                    <Index.TextField
                      hiddenLabel
                      id="filled-hidden-label-normal"
                      placeholder="Email"
                      variant="filled"
                      className="admin-input-design input-placeholder"
                      value={email}
                      onChange={(val) => setEmail(val?.target?.value)}
                      helperText={error}
                    />
                    <Index.FormControl
                      variant="outlined"
                      className="password-inputdesign"
                    ></Index.FormControl>
                  </Index.Stack>
                </Index.Box>
                <Index.Box className="orange-btn login-btn">
                  <Index.Button
                    variant="contained"
                    disableRipple
                    onClick={validation}
                    loading={loading}
                  >
                    Continue
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

export default RecoveryEmail;
