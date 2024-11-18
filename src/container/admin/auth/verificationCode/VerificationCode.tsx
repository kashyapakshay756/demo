import React from "react";
import OtpInput from "react-otp-input";
import { ErrorText, TextButton } from "../../../../component/commonStyles";
import Index from "../../../../component/componentIndex";
import VerificationCodeController from "./verificationCode.controller";

const VerificationCode: React.FC = () => {
  const {
    verificationCode,
    setVerificationCode,
    error,
    loading,
    validation,
    resendCode,
    otpSpinner,
    openSnackbar,
    setOpenSnackbar,
    snackbarMessage,
  } = VerificationCodeController();

  const preventDefault = (event: React.SyntheticEvent) =>
    event.preventDefault();
  return (
    <div>
      <Index.Box className="auto-innercontent super-auto-innercontent">
        <Index.Box>
          <Index.Box className="login-box-main verification-box-main">
            <Index.Box className="login-box">
              <Index.Box className="logo">
                <img src={Index.Svg.Logo} alt="" className="d-flex m-auto" />
                <Index.Box className="admin-recovery admin-code ">
                  <Index.Typography variant="body1" component="p">
                    Please enter the verification code that you just received
                  </Index.Typography>
                </Index.Box>
                <Index.Box className="input-design-div verify-design-div admin-mt-30">
                  <OtpInput
                    value={verificationCode}
                    onChange={setVerificationCode}
                    numInputs={6}
                    renderSeparator={<span style={{ margin: 5 }}> </span>}
                    renderInput={(props) => <input {...props} />}
                    inputStyle={{ width: "20%", borderRadius: 5 }}
                  />
                  <ErrorText>{error}</ErrorText>
                </Index.Box>
                <Index.Box
                  onClick={preventDefault}
                  className="forgotpassword-main admin-forgotpassword-main"
                >
                  <TextButton
                    variant="text"
                    disableRipple
                    onClick={resendCode}
                    className="forgotpassword-a"
                    loading={otpSpinner}
                    progressColor={"#ED753F"}
                  >
                    Resend Code
                  </TextButton>
                </Index.Box>
                <Index.Box className="orange-btn login-btn">
                  <Index.Button
                    variant="contained"
                    disableRipple
                    loading={loading}
                    onClick={validation}
                  >
                    Verify
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

export default VerificationCode;
