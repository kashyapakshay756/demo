import React from "react";
import { List, MenuItem, Paper, Select } from "@mui/material";
import { Close, Edit, Send } from "@mui/icons-material";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { constant } from "../../../../services/constant";
import CreatePostController from "./createPost.controller";
import { data } from "./createPost.const";
import Index from "../../../../component/componentIndex";
import {
  StyledItem,
  ErrorText,
  StyledTextField,
  StyledTitle,
  StyledImage,
} from "../../../../component/commonStyles";
import {
  StyledBox,
  StyledEditorContainer,
  StyledIconButton,
} from "./createPost.style";

const CreatePost: React.FC = () => {
  const {
    post,
    setPost,
    university,
    handleUniversityChange,
    info,
    setInfo,
    goBack,
    isRequestOffer,
    isStudent,
    validation,
    error,
    setIsStudent,
    setIsRequestOffer,
    areaData,
    universityData,
    dropDownData,
    setDropDownData,
    handleImageUpload,
    postSpinner,
    image,
    openSnackbar,
    setOpenSnackbar,
    snackbarMessage,
    postId,
    editable,
    setEditable,
    deletePost,
    deleteSpinner,
    handleCloseDialog,
    openDialog,
    handleOpenDialog,
    from,
    commentData,
    likeComment,
    deleteComment,
    comment,
    setComment,
    addComment,
    parentId,
    setParentId,
    setUsername,
    username,
    listRef,
    disable,
    handleInfo,
    uploadPlugin,
  } = CreatePostController();
  return (
    <div>
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
            {postId && !from && (
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
                    Post info
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
                                      Post Name
                                    </Index.Typography>
                                  </Index.Box>
                                  <StyledTextField
                                    hiddenLabel
                                    id="filled-hidden-label-normal"
                                    placeholder="Post Name"
                                    variant="filled"
                                    value={post}
                                    onChange={(val) =>
                                      setPost(val?.target?.value)
                                    }
                                    disabled={!editable}
                                    className=" input-top input-placeholder set-getting-box getstart-res input-design"
                                    helperText={error.postName}
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
                                          setIsStudent(item.title);
                                          setDropDownData(
                                            item.title === "Yes"
                                              ? universityData
                                              : areaData
                                          );
                                        }}
                                        checked={item.title === isStudent}
                                        disabled={!editable}
                                        key={index}
                                      />
                                    ))}
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
                                <StyledItem className="select-design">
                                  <Index.Box className="admin-profile-text">
                                    <Index.Typography
                                      className=" profile-text"
                                      variant="body1"
                                      component="p"
                                    >
                                      {isStudent === "Yes"
                                        ? "University Name"
                                        : "Area Name"}
                                    </Index.Typography>
                                  </Index.Box>
                                  <Index.FormControl
                                    sx={{ m: 1 }}
                                    className="set-select"
                                  >
                                    <Select
                                      value={university}
                                      onChange={handleUniversityChange}
                                      disabled={!editable}
                                      displayEmpty
                                      inputProps={{
                                        "aria-label": "Without label",
                                      }}
                                      className="select-menu-text getstart-res"
                                    >
                                      {dropDownData?.map((item) => (
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
                                  <StyledEditorContainer>
                                    <CKEditor
                                      disabled={!editable}
                                      editor={ClassicEditor}
                                      data={info}
                                      onReady={(editor: any) => {
                                        editor.editing.view.change(
                                          (writer: any) => {
                                            writer.setStyle(
                                              "height",
                                              "35vh",
                                              editor.editing.view.document.getRoot()
                                            );
                                            writer.setStyle(
                                              "color",
                                              "black",
                                              editor.editing.view.document.getRoot()
                                            );
                                          }
                                        );
                                      }}
                                      onChange={handleInfo}
                                      config={{
                                        extraPlugins: [uploadPlugin],
                                        mediaEmbed: { previewsInData: true },
                                      }}
                                    />
                                    <ErrorText>{error.info}</ErrorText>
                                  </StyledEditorContainer>
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
                                      Is this an offer request
                                    </Index.Typography>
                                  </Index.Box>
                                  <Index.Box className="set-admin-checkbox">
                                    {data?.map((item, index) => (
                                      <Index.CustomCheckbox
                                        title={item.title}
                                        onCheckboxClick={() => {
                                          setIsRequestOffer(item.title);
                                        }}
                                        checked={item.title === isRequestOffer}
                                        disabled={!editable}
                                        key={index}
                                      />
                                    ))}
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
                                <StyledItem>
                                  <Index.Box className="admin-profile-text">
                                    <Index.Typography
                                      className=" profile-text"
                                      variant="body1"
                                      component="p"
                                    >
                                      {from === "view" && !image?.length
                                        ? null
                                        : image && postId && image?.length > 0
                                        ? "Uploaded Image"
                                        : "Upload Image"}
                                    </Index.Typography>
                                  </Index.Box>
                                  {image && postId && image?.length > 0 ? (
                                    <StyledBox sx={{ marginBottom: 3 }}>
                                      <StyledImage
                                        src={`${constant.uploads}${image}`}
                                      />
                                      {from !== "view" && editable && (
                                        <StyledIconButton disableRipple>
                                          <Edit
                                            sx={{
                                              color: "#F76B10",
                                            }}
                                          />
                                          <input
                                            accept="image/*"
                                            type="file"
                                            className="upload-btn-input"
                                            onChange={handleImageUpload}
                                            disabled={!editable}
                                          />
                                        </StyledIconButton>
                                      )}
                                    </StyledBox>
                                  ) : (
                                    from !== "view" && (
                                      <StyledTextField
                                        hiddenLabel
                                        id="filled-hidden-label-normal"
                                        placeholder={
                                          image?.name?.length > 0
                                            ? image?.name
                                            : postId && image?.length
                                            ? image
                                            : "Upload Image"
                                        }
                                        variant="filled"
                                        disabled={!editable}
                                        multiline
                                        minRows={1}
                                        maxRows={3}
                                        sx={{
                                          "& .MuiInputBase-root.Mui-disabled": {
                                            paddingTop: 3,
                                            paddingBottom: 3,
                                          },
                                        }}
                                        helperText={error.image}
                                        className="input-design input-top input-placeholder set-getting-box set-admin-upload"
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
                                    )
                                  )}
                                  {/* <Index.Box className="orange-btn-modal payment-btn set-position-btn2 ">
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
                                  </Index.Box> */}
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
                                        loading={postSpinner}
                                        onClick={validation}
                                        disabled={disable}
                                      >
                                        {postId ? "Update" : "Post"}
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
                  dialogTitle={"Are you sure you want to delete this Post?"}
                  open={openDialog}
                  onClose={handleCloseDialog}
                  handleDelete={deletePost}
                  handleCancel={handleCloseDialog}
                  loading={deleteSpinner}
                  deleteDisabled={disable}
                />
              </Index.Box>
            </Index.Box>
          </Index.Box>
        </Index.Box>
        {from === "view" && isRequestOffer === "No" && (
          <Index.Grid container spacing={2} className="post-info-row">
            <StyledTitle>Comments</StyledTitle>
            <Index.Grid
              item
              xs={12}
              sm={6}
              md={6}
              lg={6}
              className="item-top"
            ></Index.Grid>
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
                sx={{ padding: 2, mb: 3, minHeight: "88vh" }}
              >
                <Paper
                  style={{
                    height: "72vh",
                    overflow: "auto",
                    marginBottom: 15,
                    display: "flex",
                    flexDirection: "column-reverse",
                  }}
                  elevation={0}
                >
                  {commentData?.length > 0 ? (
                    <List>
                      {commentData?.map((item: any) => (
                        <Index.ChatCard
                          item={item}
                          key={item.id}
                          onLike={likeComment}
                          onDelete={deleteComment}
                          onReply={(id, username) => {
                            setParentId(id);
                            setUsername(username);
                          }}
                        />
                      ))}
                      <div ref={listRef} />
                    </List>
                  ) : (
                    <Index.Box
                      sx={{
                        display: "flex",
                        height: "100%",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Index.Typography>No Comments</Index.Typography>
                    </Index.Box>
                  )}
                </Paper>
                <Index.TextField
                  id="chat-input"
                  multiline
                  minRows={1}
                  maxRows={2}
                  placeholder={
                    parentId ? `Replying @${username}` : "Type message"
                  }
                  className=" input-top input-placeholder set-getting-box getstart-res input-design"
                  value={comment}
                  onChange={(val) => setComment(val?.target?.value)}
                  InputProps={{
                    endAdornment: (
                      <Index.InputAdornment position="end">
                        <Index.IconButton
                          edge="end"
                          onClick={() => {
                            parentId && !comment
                              ? setParentId("")
                              : comment && addComment();
                          }}
                        >
                          {parentId && !comment ? (
                            <Close sx={{ color: "#ED753F" }} />
                          ) : (
                            <Send sx={{ color: "#ED753F" }} />
                          )}
                        </Index.IconButton>
                      </Index.InputAdornment>
                    ),
                  }}
                />
              </Index.Box>
            </Index.Grid>
          </Index.Grid>
        )}
      </Index.Box>
    </div>
  );
};

export default CreatePost;
