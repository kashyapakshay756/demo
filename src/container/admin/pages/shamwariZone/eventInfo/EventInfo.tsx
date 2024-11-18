import React from "react";
import { MenuItem, Select } from "@mui/material";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import {
  DatePicker,
  LocalizationProvider,
  TimePicker,
} from "@mui/x-date-pickers";
import { constant } from "../../../../../services/constant";
import { data } from "../../createPost/createPost.const";
import EventInfoController from "./eventInfo.controller";
import Index from "../../../../../component/componentIndex";
import {
  ErrorText,
  StyledImage,
  StyledItem,
  StyledTextField,
} from "../../../../../component/commonStyles";

const EventInfo: React.FC = () => {
  const {
    goBack,
    eventId,
    handleCloseDialog,
    handleOpenDialog,
    openDialog,
    editable,
    setEditable,
    openSnackbar,
    setOpenSnackbar,
    snackbarMessage,
    setAddress,
    setInfo,
    setNoOfTickets,
    setTicketPrice,
    setTitle,
    address,
    areaName,
    date,
    image,
    info,
    isStudent,
    noOfTickets,
    ticketPrice,
    time,
    title,
    universityName,
    error,
    areaData,
    universityData,
    handleUniversityChange,
    handleAreaChange,
    handleImageUpload,
    postSpinner,
    validation,
    onSelect,
    deleteSpinner,
    deleteEvent,
    onChangeTime,
    onChangeDate,
    disable,
  } = EventInfoController();
  return (
    <>
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
            {eventId && (
              <Index.Box className="d-flex">
                <Index.Box className="orange-btn back-btn">
                  <Index.Button
                    variant="contained"
                    disableRipple
                    onClick={handleOpenDialog}
                  >
                    Delete
                  </Index.Button>
                </Index.Box>
                {!editable && (
                  <Index.Box className="orange-btn back-btn">
                    <Index.Button
                      variant="contained"
                      disableRipple
                      onClick={() => setEditable(true)}
                    >
                      Edit
                    </Index.Button>
                  </Index.Box>
                )}
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
                              <Index.Grid item xs={12} sm={6} md={6} lg={6}>
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
                                    placeholder="Title"
                                    variant="filled"
                                    value={title}
                                    onChange={(val) =>
                                      setTitle(val?.target?.value)
                                    }
                                    disabled={!editable}
                                    className=" input-top input-placeholder set-getting-box getstart-res input-design"
                                    helperText={error.title}
                                    inputProps={{ maxLength: 80 }}
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
                                      Student
                                    </Index.Typography>
                                  </Index.Box>
                                  <Index.Box className="set-admin-checkbox">
                                    {data?.map((item, index) => (
                                      <Index.CustomCheckbox
                                        title={item.title}
                                        onCheckboxClick={() => {
                                          // setIsStudent(item.title);
                                          onSelect(item.title);
                                        }}
                                        checked={isStudent?.includes(
                                          item.title
                                        )}
                                        disabled={eventId ? true : false}
                                        key={index}
                                      />
                                    ))}
                                  </Index.Box>
                                  <ErrorText sx={{ mt: 0 }}>
                                    {error.selection}
                                  </ErrorText>
                                </StyledItem>
                              </Index.Grid>
                              {isStudent?.includes("Yes") && (
                                <Index.Grid
                                  item
                                  xs={12}
                                  sm={12}
                                  md={12}
                                  lg={12}
                                  className="item-top"
                                >
                                  <StyledItem className="select-design">
                                    <Index.Box className="admin-profile-text">
                                      <Index.Typography
                                        className=" profile-text"
                                        variant="body1"
                                        component="p"
                                      >
                                        University Name
                                      </Index.Typography>
                                    </Index.Box>
                                    <Index.FormControl
                                      sx={{ m: 1, paddingBottom: 2 }}
                                      className="set-select"
                                    >
                                      <Select
                                        value={universityName}
                                        onChange={handleUniversityChange}
                                        disabled={eventId ? true : false}
                                        displayEmpty
                                        inputProps={{
                                          "aria-label": "Without label",
                                        }}
                                        className="select-menu-text getstart-res"
                                      >
                                        {universityData?.map((item) => (
                                          <MenuItem
                                            key={item.id}
                                            value={item?.id}
                                          >
                                            {item?.title}
                                          </MenuItem>
                                        ))}
                                      </Select>
                                      <ErrorText>{error.university}</ErrorText>
                                    </Index.FormControl>
                                  </StyledItem>
                                </Index.Grid>
                              )}
                              {isStudent?.includes("No") && (
                                <Index.Grid
                                  item
                                  xs={12}
                                  sm={12}
                                  md={12}
                                  lg={12}
                                  className="item-top"
                                >
                                  <StyledItem className="select-design">
                                    <Index.Box className="admin-profile-text">
                                      <Index.Typography
                                        className=" profile-text"
                                        variant="body1"
                                        component="p"
                                      >
                                        Area Name
                                      </Index.Typography>
                                    </Index.Box>
                                    <Index.FormControl
                                      sx={{ m: 1, paddingBottom: 2 }}
                                      className="set-select"
                                    >
                                      <Select
                                        value={areaName}
                                        onChange={handleAreaChange}
                                        disabled={eventId ? true : false}
                                        displayEmpty
                                        inputProps={{
                                          "aria-label": "Without label",
                                        }}
                                        className="select-menu-text getstart-res"
                                      >
                                        {areaData?.map((item) => (
                                          <MenuItem
                                            key={item.id}
                                            value={item?.id}
                                          >
                                            {item?.title}
                                          </MenuItem>
                                        ))}
                                      </Select>
                                      <ErrorText>{error.area}</ErrorText>
                                    </Index.FormControl>
                                  </StyledItem>
                                </Index.Grid>
                              )}
                              <Index.Grid
                                item
                                xs={12}
                                sm={6}
                                md={6}
                                lg={6}
                                className="item-top"
                              >
                                <StyledItem className="select-design">
                                  <Index.Box className="admin-profile-text">
                                    <Index.Typography
                                      className=" profile-text"
                                      variant="body1"
                                      component="p"
                                    >
                                      Date
                                    </Index.Typography>
                                  </Index.Box>
                                  <LocalizationProvider
                                    dateAdapter={AdapterDayjs}
                                  >
                                    <DatePicker
                                      sx={{ width: "100%" }}
                                      disablePast
                                      value={date}
                                      onChange={onChangeDate}
                                      disabled={!editable}
                                    />
                                  </LocalizationProvider>
                                  <ErrorText>{error.date}</ErrorText>
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
                                <StyledItem className="select-design">
                                  <Index.Box className="admin-profile-text">
                                    <Index.Typography
                                      className=" profile-text"
                                      variant="body1"
                                      component="p"
                                    >
                                      Time
                                    </Index.Typography>
                                  </Index.Box>
                                  <LocalizationProvider
                                    dateAdapter={AdapterMoment}
                                  >
                                    <TimePicker
                                      sx={{ width: "100%" }}
                                      value={time}
                                      onChange={onChangeTime}
                                      disabled={!editable}
                                    />
                                  </LocalizationProvider>
                                  <ErrorText>{error.time}</ErrorText>
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
                                      Address
                                    </Index.Typography>
                                  </Index.Box>
                                  <Index.Box className="input-design">
                                    <Index.Box className="viewedit-text "></Index.Box>
                                    <Index.Box className="">
                                      <Index.TextField
                                        multiline
                                        minRows={3}
                                        maxRows={4}
                                        className="set-textarea-box"
                                        aria-label="empty textarea"
                                        placeholder="Address"
                                        value={address}
                                        onChange={(val) =>
                                          setAddress(val?.target?.value)
                                        }
                                        helperText={error.address}
                                        disabled={!editable}
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
                                      Number of tickets available
                                    </Index.Typography>
                                  </Index.Box>
                                  <Index.Box className="input-design">
                                    <Index.Box className="viewedit-text "></Index.Box>
                                    <Index.Box className="">
                                      <Index.TextField
                                        className="set-textarea-box"
                                        type="number"
                                        inputProps={{ maxLength: 6 }}
                                        aria-label="empty textarea"
                                        placeholder=" Number of tickets available"
                                        value={noOfTickets}
                                        onChange={(val) => {
                                          if (val.target.value.length <= 9) {
                                            setNoOfTickets(val?.target?.value);
                                          }
                                        }}
                                        helperText={error.noOfTickets}
                                        disabled={!editable}
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
                                      Price per ticket
                                    </Index.Typography>
                                  </Index.Box>
                                  <Index.Box className="input-design">
                                    <Index.Box className="viewedit-text "></Index.Box>
                                    <Index.Box className="">
                                      <Index.TextField
                                        className="set-textarea-box"
                                        aria-label="empty textarea"
                                        placeholder="Price per ticket"
                                        inputProps={{ maxLength: 9 }}
                                        type="number"
                                        value={ticketPrice}
                                        onChange={(val) => {
                                          if (val.target.value.length <= 9) {
                                            setTicketPrice(val?.target?.value);
                                          }
                                        }}
                                        helperText={error.ticketPrice}
                                        disabled={!editable}
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
                                      Info
                                    </Index.Typography>
                                  </Index.Box>
                                  <Index.Box className="input-design">
                                    <Index.Box className="viewedit-text "></Index.Box>
                                    <Index.Box className="">
                                      <Index.TextField
                                        multiline
                                        minRows={3}
                                        maxRows={4}
                                        className="set-textarea-box"
                                        aria-label="empty textarea"
                                        placeholder="Info"
                                        value={info}
                                        onChange={(val) =>
                                          setInfo(val?.target?.value)
                                        }
                                        helperText={error.info}
                                        disabled={!editable}
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
                                className="add-btn"
                              >
                                <Index.Box className="admin-profile-text">
                                  <Index.Typography
                                    className=" profile-text"
                                    variant="body1"
                                    component="p"
                                  >
                                    {image && eventId && image?.length > 0
                                      ? "Uploaded image"
                                      : "Upload Image"}
                                  </Index.Typography>
                                </Index.Box>
                                {image && eventId && image?.length > 0 ? (
                                  <StyledImage
                                    src={`${constant.uploads}${image}`}
                                  />
                                ) : (
                                  <StyledItem>
                                    <StyledTextField
                                      hiddenLabel
                                      id="filled-hidden-label-normal"
                                      placeholder={
                                        image?.name?.length > 0
                                          ? image?.name
                                          : eventId && image?.length > 0
                                          ? image
                                          : "Upload Image"
                                      }
                                      variant="filled"
                                      multiline
                                      minRows={1}
                                      maxRows={3}
                                      sx={{
                                        "& .MuiInputBase-root.Mui-disabled": {
                                          paddingTop: 3,
                                          paddingBottom: 3,
                                        },
                                      }}
                                      disabled={editable}
                                      className="input-design input-top input-placeholder set-getting-box set-admin-upload"
                                      helperText={error.image}
                                      InputProps={{
                                        endAdornment: (
                                          <Index.InputAdornment position="end">
                                            <Index.Box className="orange-btn-modal payment-btn set-position-upload-btn">
                                              <Index.Box className="upload-btn">
                                                <Index.Button
                                                  variant="contained"
                                                  disableRipple
                                                  disabled={!editable}
                                                >
                                                  Upload
                                                </Index.Button>
                                                <input
                                                  accept="image/*"
                                                  type="file"
                                                  className="upload-btn-input"
                                                  onChange={handleImageUpload}
                                                  disabled={!editable}
                                                />
                                              </Index.Box>
                                            </Index.Box>
                                          </Index.InputAdornment>
                                        ),
                                      }}
                                    />
                                  </StyledItem>
                                )}
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
                                {editable && (
                                  <StyledItem>
                                    <Index.Box className="orange-btn payment-btn login-btn flex-end">
                                      <Index.Button
                                        variant="contained"
                                        disableRipple
                                        disabled={disable}
                                        loading={postSpinner}
                                        onClick={validation}
                                      >
                                        {eventId ? "Update" : "Post"}
                                      </Index.Button>
                                    </Index.Box>
                                  </StyledItem>
                                )}
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
                  autoHideDuration={3000}
                />
                <Index.DeleteDialog
                  dialogTitle={"Are you sure you want to delete this Event?"}
                  open={openDialog}
                  onClose={handleCloseDialog}
                  handleDelete={deleteEvent}
                  handleCancel={handleCloseDialog}
                  loading={deleteSpinner}
                  deleteDisabled={disable}
                />
              </Index.Box>
            </Index.Box>
          </Index.Box>
        </Index.Box>
      </Index.Box>
    </>
  );
};

export default EventInfo;
