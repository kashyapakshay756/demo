import React, { useState } from "react";
import { Box, CircularProgress, List, Modal, Paper } from "@mui/material";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Close, Collections, Send } from "@mui/icons-material";
import moment from "moment";
import { constant } from "../../../../../services/constant";
import Index from "../../../../../component/componentIndex";
import { ItemProps } from "../../../../../component/userInvitationCard/userInvitationCard.interface";
import {
  ProgressContainer,
  StyledItem,
  StyledTextField,
  StyledTitle,
} from "../../../../../component/commonStyles";
import UserEventInfoController from "./userEventInfo.controller";
import { StyledIconButton, StyledBox } from "./userEventInfo.style";

const UserEventInfo: React.FC = () => {
  const {
    goBack,
    userEventId,
    openDialog,
    handleCloseDialog,
    handleOpenDialog,
    deleteSpinner,
    deleteUserEvent,
    setOpenSnackbar,
    snackbarMessage,
    openSnackbar,
    loading,
    eventInfo,
    message,
    setMessage,
    onSendMessage,
    chat,
    onDelete,
    handleUpload,
    onMore,
    imageList,
    open,
    onClose,
    invitation,
  } = UserEventInfoController();
  const [dimensions, setDimensions] = useState({ width: null, height: null });

  const handleImageLoad = (event: any) => {
    const image = event.target;
    setDimensions({
      width: image.naturalWidth,
      height: image.naturalHeight,
    });
  };
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
                <Index.Box className="orange-btn back-btn">
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
              {userEventId && (
                <Index.Box className="d-flex">
                  <Index.Box className="orange-btn back-btn">
                    <Index.Button
                      variant="contained"
                      disableRipple
                      onClick={handleOpenDialog}
                    >
                      Delete Event
                    </Index.Button>
                  </Index.Box>
                  {/* {!editable && (
                  <Index.Box className="orange-btn back-btn">
                    <Index.Button
                      variant="contained"
                      disableRipple
                      onClick={() => setEditable(true)}
                    >
                      Edit
                    </Index.Button>
                  </Index.Box>
                )} */}
                </Index.Box>
              )}
            </Index.Box>
          </Index.Box>
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
                      Event Info
                    </Index.Typography>
                    <Index.Box>
                      <Index.Box className="">
                        <Index.Box className="input-design-div">
                          <Index.Box className="post-info">
                            <Index.Box sx={{ flexGrow: 1 }}>
                              <Index.Grid
                                container
                                spacing={2}
                                className="post-info-row"
                              >
                                <Index.Grid
                                  item
                                  xs={12}
                                  sm={12}
                                  md={12}
                                  lg={12}
                                >
                                  <StyledItem>
                                    <Index.Box className="admin-profile-text">
                                      <Index.Typography
                                        className=" profile-text"
                                        variant="body1"
                                        component="p"
                                      >
                                        Title
                                      </Index.Typography>
                                    </Index.Box>
                                    <StyledTextField
                                      hiddenLabel
                                      id="filled-hidden-label-normal"
                                      variant="filled"
                                      value={eventInfo?.title}
                                      disabled
                                      className=" input-top input-placeholder set-getting-box getstart-res input-design"
                                    />
                                  </StyledItem>
                                </Index.Grid>
                                <Index.Grid
                                  item
                                  xs={12}
                                  sm={12}
                                  md={12}
                                  lg={12}
                                  className="item-top"
                                >
                                  <StyledItem>
                                    <Index.Box className="admin-profile-text">
                                      <Index.Typography
                                        className=" profile-text"
                                        variant="body1"
                                        component="p"
                                        sx={{ marginTop: 2 }}
                                      >
                                        Group description
                                      </Index.Typography>
                                    </Index.Box>
                                    <Index.Box className="input-design">
                                      <Index.Box className="viewedit-text "></Index.Box>
                                      <Index.Box className="">
                                        <StyledTextField
                                          multiline
                                          minRows={1}
                                          maxRows={6}
                                          className="set-textarea-box"
                                          aria-label="empty textarea"
                                          value={eventInfo?.description}
                                          disabled
                                        />
                                      </Index.Box>
                                    </Index.Box>
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
                                        sx={{ marginTop: 2 }}
                                      >
                                        Event Date
                                      </Index.Typography>
                                    </Index.Box>
                                    <Index.Box className="input-design">
                                      <Index.Box className="viewedit-text "></Index.Box>
                                      <Index.Box className="">
                                        <StyledTextField
                                          className="set-textarea-box"
                                          aria-label="empty textarea"
                                          value={moment(eventInfo?.Date).format(
                                            "DD/MM/YYYY"
                                          )}
                                          disabled
                                        />
                                      </Index.Box>
                                    </Index.Box>
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
                                        sx={{ marginTop: 2 }}
                                      >
                                        Event Time
                                      </Index.Typography>
                                    </Index.Box>
                                    <Index.Box className="input-design">
                                      <Index.Box className="viewedit-text "></Index.Box>
                                      <Index.Box className="">
                                        <StyledTextField
                                          className="set-textarea-box"
                                          aria-label="empty textarea"
                                          value={moment(eventInfo?.Time).format(
                                            "LT"
                                          )}
                                          disabled
                                        />
                                      </Index.Box>
                                    </Index.Box>
                                  </StyledItem>
                                </Index.Grid>
                                <Index.Grid
                                  item
                                  xs={12}
                                  sm={12}
                                  md={12}
                                  lg={12}
                                  className="item-top"
                                >
                                  <StyledItem>
                                    <Index.Box className="admin-profile-text">
                                      <Index.Typography
                                        className=" profile-text"
                                        variant="body1"
                                        component="p"
                                        sx={{ marginTop: 2 }}
                                      >
                                        Event Address
                                      </Index.Typography>
                                    </Index.Box>
                                    <Index.Box className="input-design">
                                      <Index.Box className="viewedit-text "></Index.Box>
                                      <Index.Box className="">
                                        <StyledTextField
                                          className="set-textarea-box"
                                          aria-label="empty textarea"
                                          value={eventInfo?.event_address}
                                          multiline
                                          minRows={1}
                                          maxRows={3}
                                          disabled
                                        />
                                      </Index.Box>
                                    </Index.Box>
                                  </StyledItem>
                                </Index.Grid>
                                <StyledTitle>
                                  Users attending and invited
                                </StyledTitle>
                                <Index.Grid
                                  item
                                  xs={12}
                                  sm={12}
                                  md={12}
                                  lg={12}
                                  className="item-top"
                                >
                                  <Index.Box
                                    boxShadow={2}
                                    sx={{ padding: 2, mb: 3 }}
                                  >
                                    {!invitation?.length ? (
                                      <Index.Typography
                                        sx={{
                                          fontSize: 16,
                                          textAlign: "center",
                                        }}
                                      >
                                        No Invitation Available
                                      </Index.Typography>
                                    ) : (
                                      invitation?.map((item: ItemProps) => (
                                        <Index.UserInvitationCard
                                          item={item}
                                          key={item?._id}
                                        />
                                      ))
                                    )}
                                  </Index.Box>
                                </Index.Grid>
                                <StyledTitle>Group Messages</StyledTitle>
                                <Index.Grid
                                  item
                                  xs={12}
                                  sm={12}
                                  md={12}
                                  lg={6}
                                  className="item-top"
                                >
                                  <StyledItem></StyledItem>
                                </Index.Grid>
                                <Index.Grid
                                  item
                                  xs={12}
                                  sm={12}
                                  md={12}
                                  lg={6}
                                  className="item-top"
                                >
                                  <Index.Box
                                    boxShadow={2}
                                    sx={{
                                      padding: 2,
                                      mb: 3,
                                      height: "88vh",
                                    }}
                                  >
                                    <Paper
                                      style={{
                                        height: "72vh",
                                        overflow: "auto",
                                        marginBottom: 15,
                                        display: "flex",
                                        flexDirection: "column-reverse",
                                      }}
                                    >
                                      {chat?.length > 0 ? (
                                        <List>
                                          {chat?.map((item: any) => (
                                            <Index.ChatCard
                                              item={item}
                                              key={item.id}
                                              type="group"
                                              onDelete={onDelete}
                                              onMoreImages={() =>
                                                onMore(item?.images)
                                              }
                                            />
                                          ))}
                                        </List>
                                      ) : (
                                        <Index.Box
                                          sx={{
                                            display: "flex",
                                            height: "70vh",
                                            justifyContent: "center",
                                            alignItems: "center",
                                          }}
                                        >
                                          <Index.Typography>
                                            No Comments
                                          </Index.Typography>
                                        </Index.Box>
                                      )}
                                    </Paper>
                                    <Index.TextField
                                      id="chat-input"
                                      multiline
                                      minRows={1}
                                      maxRows={1}
                                      value={message}
                                      onChange={(val) =>
                                        setMessage(val?.target?.value)
                                      }
                                      placeholder="Type message"
                                      className=" input-top input-placeholder set-getting-box getstart-res input-design"
                                      InputProps={{
                                        endAdornment: (
                                          <Index.InputAdornment position="end">
                                            <Index.IconButton
                                              edge="end"
                                              onClick={onSendMessage}
                                            >
                                              <Send sx={{ color: "#ED753F" }} />
                                            </Index.IconButton>
                                          </Index.InputAdornment>
                                        ),
                                        startAdornment: (
                                          <Index.InputAdornment
                                            position="start"
                                            sx={{ marginLeft: 1 }}
                                          >
                                            <Index.IconButton edge="start">
                                              <Collections
                                                sx={{ color: "#ED753F" }}
                                              />
                                            </Index.IconButton>
                                            <input
                                              accept="image/*"
                                              type="file"
                                              onChange={handleUpload}
                                              style={{
                                                height: 20,
                                                width: 25,
                                                position: "absolute",
                                                opacity: 0,
                                              }}
                                            />
                                          </Index.InputAdornment>
                                        ),
                                      }}
                                    />
                                  </Index.Box>
                                </Index.Grid>
                                <Index.Grid
                                  item
                                  xs={12}
                                  sm={6}
                                  md={6}
                                  lg={6}
                                  className="item-top"
                                >
                                  {/* {editable && (
                                  <StyledItem>  
                                    <Index.Box className="orange-btn payment-btn login-btn flex-end">
                                      <Index.Button
                                        variant="contained"
                                        disableRipple
                                        loading={postSpinner}
                                        onClick={validation}
                                      >
                                        {userEventId ? "Update" : "Post"}
                                      </Index.Button>
                                    </Index.Box>
                                  </StyledItem>
                                )} */}
                                </Index.Grid>
                              </Index.Grid>
                            </Index.Box>
                          </Index.Box>
                        </Index.Box>
                      </Index.Box>
                    </Index.Box>
                  </Index.Box>
                  <Index.Snackbar
                    open={openSnackbar}
                    onClose={() => setOpenSnackbar(false)}
                    onCloseClick={() => setOpenSnackbar(false)}
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    message={snackbarMessage}
                    autoHideDuration={4000}
                  />
                  <Index.DeleteDialog
                    dialogTitle={"Are you sure you want to delete this Event?"}
                    open={openDialog}
                    onClose={handleCloseDialog}
                    handleDelete={deleteUserEvent}
                    handleCancel={handleCloseDialog}
                    loading={deleteSpinner}
                  />
                  <Modal
                    open={open}
                    onClose={onClose}
                    aria-labelledby="delete-modal-title"
                    aria-describedby="delete-modal-description"
                    className="set-modal-back"
                    sx={{
                      "& .MuiBackdrop-root": {
                        backgroundColor: "rgba(0,0,0,0.7)",
                      },
                    }}
                  >
                    <Modal
                      open={open}
                      onClose={onClose}
                      aria-labelledby="modal-modal-title"
                      aria-describedby="modal-modal-description"
                      className="set-modal-back"
                    >
                      <Box>
                        <StyledIconButton
                          onClick={onClose}
                          sx={{ zIndex: 9999 }}
                        >
                          <Close fontSize="medium" sx={{ color: "#000000" }} />
                        </StyledIconButton>
                        <Carousel swipeable emulateTouch showArrows={false}>
                          {imageList?.map((item, index) => (
                            <StyledBox>
                              <img
                                src={`${constant.uploads}${item}`}
                                onLoad={handleImageLoad}
                                style={{
                                  maxHeight: "100vh",
                                  width: "auto",
                                  verticalAlign: "middle",
                                }}
                              />
                            </StyledBox>
                          ))}
                        </Carousel>
                      </Box>
                    </Modal>
                  </Modal>
                </Index.Box>
              </Index.Box>
            </Index.Box>
          </Index.Box>
        </Index.Box>
      )}
    </>
  );
};

export default UserEventInfo;
