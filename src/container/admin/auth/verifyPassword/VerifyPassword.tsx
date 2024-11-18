import React from "react";
import { Link } from "react-router-dom";
import Index from "../../../../component/componentIndex";
import VerifyPasswordController from "./verifyPassword.controller";

const preventDefault = (event: React.SyntheticEvent) => event.preventDefault();

const VerifyPassword: React.FC = () => {
  const { verificationCode, setVerificationCode } = VerifyPasswordController();
  return (
    <div>
      <Index.Box className="back-header">
        <Index.Box className="backheader-inner">
          <Index.Link href="#" underline="none" className="back">
            <img src={Index.Svg.Backarrow} alt="" />
            Back
          </Index.Link>
        </Index.Box>
      </Index.Box>
      <Index.Box className="auto-innercontent">
        <Index.Box>
          <Index.Box className="logo mb-40">
            <img src={Index.Svg.Logo} alt="" className="d-flex m-auto" />
          </Index.Box>
          <Index.Box className="reset-box-main">
            <Index.Box className="reset-box">
              <Index.Box className="reset-box-content">
                <Index.Typography
                  variant="body1"
                  component="p"
                  className="reset-text"
                >
                  Reset your password
                </Index.Typography>
                <Index.Typography
                  variant="body1"
                  component="p"
                  className="reset-inner-text"
                >
                  Enter the verification code that we just sent you on your
                  email.
                </Index.Typography>
                <Index.Box className="input-design-div verify-design-div">
                  <Index.Stack
                    component="form"
                    spacing={1}
                    noValidate
                    autoComplete="off"
                    className="d-flex"
                  >
                    <Index.TextField
                      hiddenLabel
                      id="filled-hidden-label-normal"
                      variant="filled"
                      className="input-design input-placeholder verify-design"
                    />
                    <Index.TextField
                      hiddenLabel
                      id="filled-hidden-label-normal"
                      variant="filled"
                      className="input-design input-placeholder verify-design"
                    />
                    <Index.TextField
                      hiddenLabel
                      id="filled-hidden-label-normal"
                      variant="filled"
                      className="input-design input-placeholder verify-design"
                    />
                    <Index.TextField
                      hiddenLabel
                      id="filled-hidden-label-normal"
                      variant="filled"
                      className="input-design input-placeholder verify-design"
                    />
                    <Index.TextField
                      hiddenLabel
                      id="filled-hidden-label-normal"
                      variant="filled"
                      className="input-design input-placeholder verify-design"
                    />
                    <Index.TextField
                      hiddenLabel
                      id="filled-hidden-label-normal"
                      variant="filled"
                      className="input-design input-placeholder verify-design"
                    />
                  </Index.Stack>
                </Index.Box>
                <Index.Box className="orange-btn continue-btn verify-btn">
                  <Link to="/confirmpassword" className="underline-none">
                    <Index.Button variant="contained" disableRipple>
                      Verify
                    </Index.Button>
                  </Link>
                </Index.Box>
                <Index.Box onClick={preventDefault} className="have-account">
                  <Index.Typography
                    className="have-account-p receive-code-p"
                    variant="body1"
                    component="p"
                  >
                    Didn't receive a code?
                    <Index.Link
                      href="#"
                      underline="none"
                      className="resend-text"
                    >
                      Resend
                    </Index.Link>
                  </Index.Typography>
                </Index.Box>
              </Index.Box>
            </Index.Box>
          </Index.Box>
        </Index.Box>
      </Index.Box>
    </div>
  );
};

export default VerifyPassword;
