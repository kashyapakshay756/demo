import React from "react";
import Index from "../../../../component/componentIndex";
import ConfirmPasswordController from "./confirmPassword.controller";

const ConfirmPassword: React.FC = () => {
  const { setConfirmPassword, setNewPassword, confirmPassword, newPassword } =
    ConfirmPasswordController();
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
                  Choose a strong new password. Make sure it's unique!
                </Index.Typography>
                <Index.Box className="input-design-div  reset-input ">
                  <Index.Stack
                    component="form"
                    spacing={2}
                    noValidate
                    autoComplete="off"
                  >
                    <Index.TextField
                      hiddenLabel
                      id="filled-hidden-label-normal"
                      placeholder="New Password"
                      variant="filled"
                      type="password"
                      className="input-design input-placeholder"
                      value={newPassword}
                      onChange={(val) => setNewPassword(val?.target?.value)}
                    />
                    <Index.TextField
                      hiddenLabel
                      id="filled-hidden-label-normal"
                      placeholder="Confirm Password"
                      variant="filled"
                      type="password"
                      className="input-design input-placeholder reset-input-design"
                      value={confirmPassword}
                      onChange={(val) => setConfirmPassword(val?.target?.value)}
                    />
                  </Index.Stack>
                </Index.Box>
                <Index.Box className="orange-btn continue-btn">
                  <Index.Button variant="contained" disableRipple>
                    Reset
                  </Index.Button>
                </Index.Box>
              </Index.Box>
            </Index.Box>
          </Index.Box>
        </Index.Box>
      </Index.Box>
    </div>
  );
};

export default ConfirmPassword;
