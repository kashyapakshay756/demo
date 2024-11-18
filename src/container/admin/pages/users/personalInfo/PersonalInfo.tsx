import React from "react";
import { CircularProgress } from "@mui/material";
import Index from "../../../../../component/componentIndex";
import PersonalInfoController from "./personalInfo.controller";
import { tableCellData } from "./personalInfo.const";
import {
  ProgressContainer,
  StyledItem,
} from "../../../../../component/commonStyles";

const PersonalInfo: React.FC = () => {
  const {
    tabValue,
    handleTabValueChange,
    tabChange,
    goBack,
    userInfo,
    deleteSpinner,
    deleteUser,
    handleCloseDialog,
    handleOpenDialog,
    openDialog,
    voucherList,
    voucherSpinner,
    disable,
    loading,
    calculateAge,
  } = PersonalInfoController();
  return (
    <div>
      {loading ? (
        <ProgressContainer>
          <CircularProgress size={40} sx={{ color: "primary" }} />
        </ProgressContainer>
      ) : (
        <Index.Box className="back-f5 presonal-infospace">
          <Index.Box className="search-main-header">
            <Index.Box className="search-header space-between">
              <Index.Box className="d-flex">
                <Index.Box className="orange-btn back-btn res-admin-btn-set">
                  <Index.Button
                    variant="contained"
                    disableRipple
                    onClick={goBack}
                  >
                    <img
                      src={Index.Svg.Backarrow}
                      alt=""
                      className="mr-10 user-back"
                    />
                    Back
                  </Index.Button>
                </Index.Box>
              </Index.Box>
              <Index.Box className="w-100">
                <Index.Box className="">
                  <Index.Box
                    sx={{ borderBottom: 1, borderColor: "divider" }}
                    className="seatcreation-inner-tab"
                  >
                    <Index.Tabs
                      value={tabValue}
                      onChange={handleTabValueChange}
                      aria-label="basic tabs example"
                      className="seatcreation-tab"
                    >
                      <Index.Tab
                        label="user info"
                        {...tabChange(0)}
                        className="seatcreation"
                      />
                      <Index.Tab
                        label="user vouchers"
                        {...tabChange(1)}
                        className="seatcreation active"
                      />
                    </Index.Tabs>
                  </Index.Box>
                </Index.Box>
              </Index.Box>
            </Index.Box>
          </Index.Box>
          <Index.TabPanel value={tabValue} index={0}>
            <Index.Box className="profile-main">
              <Index.Box className="profile-card">
                <Index.Box className="profile-card-inner">
                  <Index.Box className="">
                    <Index.Box className="input-design-div profile-div">
                      <Index.Typography
                        className="orange-text profile-text"
                        variant="body1"
                        component="p"
                      >
                        Personal Info
                      </Index.Typography>
                      <Index.Grid container spacing={2} className="pt-15">
                        <Index.Grid
                          item
                          xs={12}
                          sm={6}
                          md={6}
                          lg={6}
                          className="item-top profile-info-label"
                        >
                          <StyledItem>
                            <Index.Box className="admin-profile-text">
                              <Index.Typography
                                className=" profile-text"
                                variant="body1"
                                component="p"
                              >
                                Full name
                              </Index.Typography>
                            </Index.Box>
                            <Index.Box className="admin-profile-info">
                              <Index.Typography
                                className=""
                                variant="body1"
                                component="p"
                              >
                                {userInfo?.fullName ?? "-"}
                              </Index.Typography>
                            </Index.Box>
                          </StyledItem>
                        </Index.Grid>
                        <Index.Grid
                          item
                          xs={12}
                          sm={6}
                          md={6}
                          lg={6}
                          className="item-top profile-info-label"
                        >
                          <StyledItem>
                            <Index.Box className="admin-profile-text">
                              <Index.Typography
                                className=" profile-text"
                                variant="body1"
                                component="p"
                              >
                                Email
                              </Index.Typography>
                            </Index.Box>
                            <Index.Box className="admin-profile-info">
                              <Index.Typography
                                className=""
                                variant="body1"
                                component="p"
                              >
                                {userInfo?.email ?? "-"}
                              </Index.Typography>
                            </Index.Box>
                          </StyledItem>
                        </Index.Grid>
                        <Index.Grid
                          item
                          xs={12}
                          sm={6}
                          md={6}
                          lg={6}
                          className="item-top profile-info-label"
                        >
                          <StyledItem>
                            <Index.Box className="admin-profile-text">
                              <Index.Typography
                                className=" profile-text"
                                variant="body1"
                                component="p"
                              >
                                Age
                              </Index.Typography>
                            </Index.Box>
                            <Index.Box className="admin-profile-info">
                              <Index.Typography
                                className=""
                                variant="body1"
                                component="p"
                              >
                                {(userInfo?.age &&
                                  calculateAge(new Date(userInfo?.age))) ??
                                  "-"}
                              </Index.Typography>
                            </Index.Box>
                          </StyledItem>
                        </Index.Grid>
                        <Index.Grid
                          item
                          xs={12}
                          sm={6}
                          md={6}
                          lg={6}
                          className="item-top profile-info-label"
                        >
                          <StyledItem>
                            <Index.Box className="admin-profile-text">
                              <Index.Typography
                                className=" profile-text"
                                variant="body1"
                                component="p"
                              >
                                Gender
                              </Index.Typography>
                            </Index.Box>
                            <Index.Box className="admin-profile-info">
                              <Index.Typography
                                className=""
                                variant="body1"
                                component="p"
                              >
                                {userInfo?.gender ?? "-"}
                              </Index.Typography>
                            </Index.Box>
                          </StyledItem>
                        </Index.Grid>
                        <Index.Grid
                          item
                          xs={12}
                          sm={6}
                          md={6}
                          lg={12}
                          className="item-top profile-info-label"
                        >
                          <StyledItem>
                            <Index.Box className="admin-profile-text">
                              <Index.Typography
                                className=" profile-text"
                                variant="body1"
                                component="p"
                              >
                                University or area
                              </Index.Typography>
                            </Index.Box>
                            <Index.Box className="admin-profile-info">
                              <Index.Typography
                                className=""
                                variant="body1"
                                component="p"
                              >
                                {userInfo?.university_id
                                  ? userInfo?.university_id?.university_name
                                  : userInfo?.area_down_id?.area_name ?? "-"}
                              </Index.Typography>
                            </Index.Box>
                          </StyledItem>
                        </Index.Grid>
                        <Index.Grid
                          item
                          xs={12}
                          sm={12}
                          md={6}
                          lg={12}
                          className="item-top "
                        >
                          <StyledItem>
                            <Index.Box className="orange-btn  profile-info-label-btn">
                              <Index.Button
                                variant="contained"
                                disableRipple
                                onClick={handleOpenDialog}
                              >
                                Delete User
                              </Index.Button>
                            </Index.Box>
                          </StyledItem>
                        </Index.Grid>
                      </Index.Grid>
                    </Index.Box>
                  </Index.Box>
                </Index.Box>
              </Index.Box>
            </Index.Box>
          </Index.TabPanel>
          <Index.DeleteDialog
            dialogTitle={"Are you sure you want to delete this User?"}
            open={openDialog}
            onClose={handleCloseDialog}
            handleDelete={deleteUser}
            handleCancel={handleCloseDialog}
            loading={deleteSpinner}
            deleteDisabled={disable}
          />
          <Index.TabPanel value={tabValue} index={1}>
            {voucherSpinner ? (
              <ProgressContainer>
                <CircularProgress size={40} sx={{ color: "primary" }} />
              </ProgressContainer>
            ) : (
              <Index.CustomTable
                tableClass="table-main user-table user-voucher-table"
                tableCellData={tableCellData}
                tableData={voucherList}
                listEmptyText="No user voucher available"
              />
            )}
          </Index.TabPanel>
        </Index.Box>
      )}
    </div>
  );
};

export default PersonalInfo;
