import React from "react";
import { Link } from "react-router-dom";
import Index from "../../../../component/componentIndex";
import ResetPasswordController from "./resetPassword.controller";

const ResetPassword: React.FC = () => {
  const { email, setEmail } = ResetPasswordController();
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
                  Enter your email address to receive a code to reset your
                  password
                </Index.Typography>
                <Index.Box className="input-design-div  reset-input">
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
                      className="input-design input-placeholder reset-input-design"
                      value={email}
                      onChange={(val) => setEmail(val?.target?.value)}
                    />
                  </Index.Stack>
                </Index.Box>
                <Index.Box className="orange-btn continue-btn">
                  <Link to="/verifypassword">
                    <Index.Button variant="contained" disableRipple>
                      Continue
                    </Index.Button>
                  </Link>
                </Index.Box>
              </Index.Box>
            </Index.Box>
          </Index.Box>
        </Index.Box>
      </Index.Box>
    </div>
  );
};

export default ResetPassword;
