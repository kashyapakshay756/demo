import React from "react";
import { CircularProgress, Select } from "@mui/material";
import { Link } from "react-router-dom";
import DashboardController from "./dashboard.controller";
import Index from "../../../../component/componentIndex";
import { ProgressContainer } from "../../../../component/commonStyles";

const Dashboard: React.FC = () => {
  const {
    handleBackround,
    handleCloseDropdown,
    loading,
    handleSelection,
    select,
    dashboard,
    openSnackbar,
    handleCloseSnackbar,
    data,
  } = DashboardController();
  return (
    <>
      {loading ? (
        <ProgressContainer>
          <CircularProgress size={40} sx={{ color: "primary" }} />
        </ProgressContainer>
      ) : (
        <Index.Box className="content-inner-main">
          <Index.Box className="">
            <Index.Box className="select-right">
              <Index.FormControl className="select-main">
                <Select
                  native={false}
                  onOpen={() => handleBackround()}
                  onClose={() => handleCloseDropdown()}
                  value={select}
                  onChange={(e: any) => handleSelection(e)}
                  displayEmpty
                  inputProps={{ "aria-label": "Without label" }}
                  className="select-div"
                >
                  <Index.MenuItem value={1}>Daily</Index.MenuItem>
                  <Index.MenuItem value={7}>Weekly</Index.MenuItem>
                  <Index.MenuItem value={30}>Monthly</Index.MenuItem>
                  <Index.MenuItem value={365}>Yearly</Index.MenuItem>
                </Select>
              </Index.FormControl>
            </Index.Box>
            <Index.Box className="dash-row dash-topspace">
              <Index.Box className="dash-col">
                <Index.Box className="dash-card">
                  <Index.Box className="dash-card-top">
                    <Index.Typography
                      variant="body1"
                      component="p"
                      className="dashcard-num"
                    >
                      {dashboard?.user}
                    </Index.Typography>
                    <img
                      src={Index.Svg.dashcheck}
                      alt=""
                      className="dashcheck-img"
                    />
                  </Index.Box>
                  <Index.Typography
                    variant="body1"
                    component="p"
                    className="dashcard-text"
                  >
                    Total Zeebra Users
                  </Index.Typography>
                  <Link to="/admin/users" className="viewall-link">
                    <Index.Typography
                      variant="body1"
                      component="p"
                      className="dashcard-text text-center"
                    >
                      View all
                    </Index.Typography>
                  </Link>
                </Index.Box>
              </Index.Box>
              <Index.Box className="dash-col">
                <Index.Box className="dash-card">
                  <Index.Box className="dash-card-top">
                    <Index.Typography
                      variant="body1"
                      component="p"
                      className="dashcard-num"
                    >
                      {dashboard?.business}
                    </Index.Typography>
                    <img
                      src={Index.Svg.dashcheck}
                      alt=""
                      className="dashcheck-img"
                    />
                  </Index.Box>
                  <Index.Typography
                    variant="body1"
                    component="p"
                    className="dashcard-text"
                  >
                    Total Zeebra partners
                  </Index.Typography>
                  <Link to="/admin/partners" className="viewall-link">
                    <Index.Typography
                      variant="body1"
                      component="p"
                      className="dashcard-text text-center"
                    >
                      View all
                    </Index.Typography>
                  </Link>
                </Index.Box>
              </Index.Box>
              <Index.Box className="dash-col">
                <Index.Box className="dash-card">
                  <Index.Box className="dash-card-top">
                    <Index.Typography
                      variant="body1"
                      component="p"
                      className="dashcard-num"
                    >
                      {dashboard?.businessTrasactions}
                    </Index.Typography>
                    <img
                      src={Index.Svg.dashcheck}
                      alt=""
                      className="dashcheck-img"
                    />
                  </Index.Box>
                  <Index.Typography
                    variant="body1"
                    component="p"
                    className="dashcard-text"
                  >
                    Total Transactions
                  </Index.Typography>
                  <Link to="/admin/partners" className="viewall-link">
                    <Index.Box className="viewall-link">
                      <Index.Typography
                        variant="body1"
                        component="p"
                        className="dashcard-text text-center"
                      >
                        View all
                      </Index.Typography>
                    </Index.Box>
                  </Link>
                </Index.Box>
              </Index.Box>
              <Index.Box className="dash-col">
                <Index.Box className="dash-card">
                  <Index.Box className="dash-card-top">
                    <Index.Typography
                      variant="body1"
                      component="p"
                      className="dashcard-num"
                    >
                      £{dashboard?.businessFunds}
                    </Index.Typography>
                    <img
                      src={Index.Svg.dashcircle}
                      alt=""
                      className="dashcheck-img"
                    />
                  </Index.Box>
                  <Index.Typography
                    variant="body1"
                    component="p"
                    className="dashcard-text"
                  >
                    Total Funds made
                  </Index.Typography>
                </Index.Box>
              </Index.Box>
              <Index.Box className="dash-col">
                <Index.Box className="dash-card">
                  <Index.Box className="dash-card-top">
                    <Index.Typography
                      variant="body1"
                      component="p"
                      className="dashcard-num"
                    >
                      {dashboard?.businessCreditIssued}
                    </Index.Typography>
                    <img
                      src={Index.Svg.dashcircle}
                      alt=""
                      className="dashcheck-img"
                    />
                  </Index.Box>
                  <Index.Typography
                    variant="body1"
                    component="p"
                    className="dashcard-text"
                  >
                    Total Credits issued
                  </Index.Typography>
                  {data?.dashboard && (
                    <Index.Snackbar
                      open={openSnackbar}
                      onClose={handleCloseSnackbar}
                      onCloseClick={handleCloseSnackbar}
                      anchorOrigin={{
                        vertical: "top",
                        horizontal: "right",
                      }}
                      message="Logged in Successfully"
                      autoHideDuration={3000}
                    />
                  )}
                </Index.Box>
              </Index.Box>
            </Index.Box>
          </Index.Box>
        </Index.Box>
      )}
    </>
  );
};

export default Dashboard;
