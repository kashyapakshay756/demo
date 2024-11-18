import React from "react";
import { CircularProgress } from "@mui/material";
import { PDFExport } from "@progress/kendo-react-pdf";
import { constant } from "../../../../../services/constant";
import Index from "../../../../../component/componentIndex";
import Invoice from "./Invoice/Invoice";
import PartnerProfileController from "./partnerProfile.controller";
import {
  ProgressContainer,
  StyledImage,
  StyledItem,
  StyledTextField,
} from "../../../../../component/commonStyles";
import { StyledBox } from "./partnerProfile.style";
import moment from "moment";

const PartnerProfile: React.FC = () => {
  const {
    partnerInfo,
    goBack,
    deletePartner,
    deleteSpinner,
    handleCloseDialog,
    handleOpenDialog,
    openDialog,
    loading,
    setSnackbar,
    snackbar,
    toast,
    transactionList,
    handleInvoiceDownload,
    downloadInvoiceRef,
    invoiceDetails,
    disable,
  } = PartnerProfileController();
  return (
    <>
      {loading ? (
        <ProgressContainer>
          <CircularProgress size={40} sx={{ color: "primary" }} />
        </ProgressContainer>
      ) : (
        <Index.Box className="back-f5">
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
            </Index.Box>
          </Index.Box>
          <Index.Box className="content-inner-main">
            <Index.Box className="profile-main" sx={{ paddingTop: 0 }}>
              <Index.Box className="profile-card">
                <Index.Box className="profile-card-inner">
                  <Index.Box className="">
                    <Index.Box className="input-design-div profile-div">
                      <Index.Typography
                        className="orange-text profile-text"
                        variant="body1"
                        component="p"
                      >
                        Business details
                      </Index.Typography>
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
                                Business Name
                              </Index.Typography>
                            </Index.Box>
                            <StyledTextField
                              hiddenLabel
                              id="filled-hidden-label-normal"
                              value={partnerInfo?.business_name ?? "-"}
                              variant="filled"
                              className="input-design input-top input-placeholder set-getting-box"
                              disabled
                            />
                          </StyledItem>
                        </Index.Grid>
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
                                Post Code
                              </Index.Typography>
                            </Index.Box>
                            <StyledTextField
                              hiddenLabel
                              id="filled-hidden-label-normal"
                              value={partnerInfo?.post_code ?? "-"}
                              variant="filled"
                              className="input-design input-top input-placeholder set-getting-box"
                              disabled
                            />
                          </StyledItem>
                        </Index.Grid>
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
                                Owner / Director
                              </Index.Typography>
                            </Index.Box>
                            <StyledTextField
                              hiddenLabel
                              id="filled-hidden-label-normal"
                              value={partnerInfo?.director ?? "-"}
                              variant="filled"
                              className="input-design input-top input-placeholder set-getting-box"
                              disabled
                            />
                          </StyledItem>
                        </Index.Grid>
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
                                Address Line 1
                              </Index.Typography>
                            </Index.Box>
                            <StyledTextField
                              hiddenLabel
                              id="filled-hidden-label-normal"
                              value={partnerInfo?.address?.Address1 ?? "-"}
                              variant="filled"
                              className="input-design input-top input-placeholder set-getting-box"
                              disabled
                            />
                          </StyledItem>
                        </Index.Grid>
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
                                Owner Surname
                              </Index.Typography>
                            </Index.Box>
                            <StyledTextField
                              hiddenLabel
                              id="filled-hidden-label-normal"
                              value={partnerInfo?.owner_surname ?? "-"}
                              variant="filled"
                              className="input-design input-top input-placeholder set-getting-box"
                              disabled
                            />
                          </StyledItem>
                        </Index.Grid>
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
                                Address Line 2
                              </Index.Typography>
                            </Index.Box>
                            <StyledTextField
                              hiddenLabel
                              id="filled-hidden-label-normal"
                              value={partnerInfo?.address?.Address2 ?? "-"}
                              variant="filled"
                              className="input-design input-top input-placeholder set-getting-box"
                              disabled
                            />
                          </StyledItem>
                        </Index.Grid>
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
                                Nominated point of contact (if different form
                                above)
                              </Index.Typography>
                            </Index.Box>
                            <StyledTextField
                              hiddenLabel
                              id="filled-hidden-label-normal"
                              value={partnerInfo?.contact_nominated ?? "-"}
                              variant="filled"
                              className="input-design input-top input-placeholder set-getting-box"
                              disabled
                            />
                          </StyledItem>
                        </Index.Grid>
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
                                Address Line 3
                              </Index.Typography>
                            </Index.Box>
                            <StyledTextField
                              hiddenLabel
                              id="filled-hidden-label-normal"
                              value={partnerInfo?.address?.Address3 ?? "-"}
                              variant="filled"
                              className="input-design input-top input-placeholder set-getting-box"
                              disabled
                            />
                          </StyledItem>
                        </Index.Grid>
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
                                Limited Company Name
                              </Index.Typography>
                            </Index.Box>
                            <StyledTextField
                              hiddenLabel
                              id="filled-hidden-label-normal"
                              value={partnerInfo?.limited_company_name ?? "-"}
                              variant="filled"
                              className="input-design input-top input-placeholder set-getting-box"
                              disabled
                            />
                          </StyledItem>
                        </Index.Grid>
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
                                Town
                              </Index.Typography>
                            </Index.Box>
                            <StyledTextField
                              hiddenLabel
                              id="filled-hidden-label-normal"
                              value={partnerInfo?.town ?? "-"}
                              variant="filled"
                              className="input-design input-top input-placeholder set-getting-box"
                              disabled
                            />
                          </StyledItem>
                        </Index.Grid>
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
                                Opening Time
                              </Index.Typography>
                            </Index.Box>
                            <StyledTextField
                              hiddenLabel
                              id="filled-hidden-label-normal"
                              value={partnerInfo?.opening_time ?? "-"}
                              variant="filled"
                              className="input-design input-top input-placeholder set-getting-box"
                              disabled
                            />
                          </StyledItem>
                        </Index.Grid>
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
                                Country
                              </Index.Typography>
                            </Index.Box>
                            <StyledTextField
                              hiddenLabel
                              id="filled-hidden-label-normal"
                              value={partnerInfo?.country ?? "-"}
                              variant="filled"
                              className="input-design input-top input-placeholder set-getting-box"
                              disabled
                            />
                          </StyledItem>
                        </Index.Grid>
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
                                Closing Time
                              </Index.Typography>
                            </Index.Box>
                            <StyledTextField
                              hiddenLabel
                              id="filled-hidden-label-normal"
                              value={partnerInfo?.closing_time ?? "-"}
                              variant="filled"
                              className="input-design input-top input-placeholder set-getting-box"
                              disabled
                            />
                          </StyledItem>
                        </Index.Grid>
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
                                Business Phone Number
                              </Index.Typography>
                            </Index.Box>
                            <StyledTextField
                              hiddenLabel
                              id="filled-hidden-label-normal"
                              value={partnerInfo?.business_phone_number ?? "-"}
                              variant="filled"
                              className="input-design input-top input-placeholder set-getting-box"
                              disabled
                            />
                          </StyledItem>
                        </Index.Grid>
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
                                Sector
                              </Index.Typography>
                            </Index.Box>
                            <StyledTextField
                              hiddenLabel
                              id="filled-hidden-label-normal"
                              value={partnerInfo?.sector_Id?.sector_name ?? "-"}
                              variant="filled"
                              className="input-design input-top input-placeholder set-getting-box"
                              disabled
                            />
                          </StyledItem>
                        </Index.Grid>
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
                                Business Email
                              </Index.Typography>
                            </Index.Box>
                            <StyledTextField
                              hiddenLabel
                              id="filled-hidden-label-normal"
                              value={partnerInfo?.business_email ?? "-"}
                              variant="filled"
                              className="input-design input-top input-placeholder set-getting-box"
                              disabled
                            />
                          </StyledItem>
                        </Index.Grid>
                        <Index.Grid
                          item
                          xs={12}
                          sm={6}
                          md={6}
                          lg={6}
                          className="item-top"
                        >
                          <StyledItem></StyledItem>
                        </Index.Grid>
                      </Index.Grid>
                    </Index.Box>
                    <Index.Box className="input-design-div profile-div">
                      <Index.Grid container spacing={2} className="pt-10">
                        <Index.Grid
                          item
                          xs={12}
                          sm={6}
                          md={4}
                          lg={4}
                          className="item-top"
                        >
                          <Index.Typography
                            className="orange-text profile-text"
                            variant="body1"
                            component="p"
                          >
                            Uploaded logo
                          </Index.Typography>
                          {partnerInfo?.business_logo ? (
                            <StyledImage
                              src={`${constant.uploads}${partnerInfo?.business_logo}`}
                            />
                          ) : (
                            <StyledItem>
                              <Index.Box className="d-flex">
                                <StyledTextField
                                  hiddenLabel
                                  id="filled-hidden-label-normal"
                                  value={partnerInfo?.business_logo ?? "-"}
                                  variant="filled"
                                  className="input-design input-top input-placeholder set-getting-box"
                                  disabled
                                />
                              </Index.Box>
                            </StyledItem>
                          )}
                        </Index.Grid>

                        <Index.Grid
                          item
                          xs={12}
                          sm={6}
                          md={4}
                          lg={4}
                          className="item-top"
                        >
                          <Index.Typography
                            className="orange-text profile-text"
                            variant="body1"
                            component="p"
                          >
                            Uploaded business image
                          </Index.Typography>
                          {partnerInfo?.business_image ? (
                            <StyledImage
                              src={`${constant.uploads}${partnerInfo?.business_image}`}
                            />
                          ) : (
                            <StyledItem>
                              <Index.Box className="d-flex">
                                <StyledTextField
                                  hiddenLabel
                                  id="filled-hidden-label-normal"
                                  value={partnerInfo?.business_image ?? "-"}
                                  variant="filled"
                                  className="input-design input-top input-placeholder set-getting-box"
                                  disabled
                                />
                              </Index.Box>
                            </StyledItem>
                          )}
                        </Index.Grid>
                        <Index.Grid
                          item
                          xs={12}
                          sm={6}
                          md={4}
                          lg={4}
                          className="item-top"
                        >
                          <Index.Typography
                            className="orange-text profile-text"
                            variant="body1"
                            component="p"
                          >
                            Average spend per head
                          </Index.Typography>
                          <StyledItem>
                            <Index.Box className="d-flex">
                              <StyledTextField
                                hiddenLabel
                                id="filled-hidden-label-normal"
                                placeholder="£ Type amount"
                                value={partnerInfo?.average_price ?? "-"}
                                variant="filled"
                                className="input-design input-top input-placeholder set-getting-box"
                                disabled
                              />
                            </Index.Box>
                          </StyledItem>
                        </Index.Grid>
                      </Index.Grid>
                    </Index.Box>
                    <Index.Box className="input-design-div profile-div border-bottom-0">
                      <Index.Box>
                        <Index.Box className="orange-text ">
                          Transactions
                        </Index.Box>
                        {transactionList?.map((item) => (
                          <Index.Box className="book-row post-req-row">
                            <Index.Box className="book-col profile-col1">
                              <Index.Typography>
                                Offer title: {item?.business_id?.business_name}
                              </Index.Typography>
                            </Index.Box>
                            <Index.Box className="book-col profile-col2">
                              <Index.Typography>
                                Amount Paid: {item?.payment_data.amount}
                              </Index.Typography>
                            </Index.Box>
                            <Index.Box className="book-col profile-col3">
                              <Index.Typography>
                                Date:
                                <Index.Typography>
                                  {moment(item.createdAt).format("DD/MM/YYYY")}
                                </Index.Typography>
                              </Index.Typography>
                            </Index.Box>
                            <Index.Box className="book-col profile-col4 flex-end">
                              <Index.Box className="orange-btn accept-btn ">
                                <Index.Button
                                  variant="contained"
                                  disableRipple
                                  onClick={() => handleInvoiceDownload(item)}
                                >
                                  Download invoice
                                </Index.Button>
                              </Index.Box>
                            </Index.Box>
                          </Index.Box>
                        ))}
                      </Index.Box>
                    </Index.Box>
                    <Index.Box className="input-design-div profile-div admin-profile">
                      <Index.Grid container spacing={2} className="pt-15">
                        <Index.Grid
                          item
                          xs={12}
                          sm={6}
                          md={6}
                          lg={6}
                          className="item-top"
                        >
                          <StyledItem></StyledItem>
                        </Index.Grid>
                        <Index.Grid
                          item
                          xs={12}
                          sm={6}
                          md={6}
                          lg={6}
                          className="item-top"
                        >
                          <StyledItem>
                            <Index.Box className="orange-btn payment-btn flex-end login-btn del-user-btn">
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
          </Index.Box>
          <Index.DeleteDialog
            dialogTitle={"Are you sure you want to delete this Partner?"}
            open={openDialog}
            onClose={handleCloseDialog}
            handleDelete={deletePartner}
            handleCancel={handleCloseDialog}
            loading={deleteSpinner}
            deleteDisabled={disable}
          />
        </Index.Box>
      )}
      <Index.Snackbar
        open={snackbar}
        onClose={() => setSnackbar(false)}
        onCloseClick={() => setSnackbar(false)}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        message={toast}
        autoHideDuration={5000}
      />

      <StyledBox>
        <PDFExport ref={downloadInvoiceRef} paperSize="A4" margin="0.5cm">
          {invoiceDetails && <Invoice invoiceDetails={invoiceDetails} />}
        </PDFExport>
      </StyledBox>
    </>
  );
};

export default PartnerProfile;
