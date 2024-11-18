import React from "react";
import { IndexKind } from "typescript";
import Index from "../../../../component/componentIndex";
import { styled, alpha } from "@mui/material/styles";
import { Link } from "react-router-dom";
import Select, { SelectChangeEvent } from "@mui/material/Select";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(Index.InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const Item = styled(Index.Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
// checkbox
const label = { inputProps: { "aria-label": "Checkbox demo" } };

function EditPost() {
  const [age, setAge] = React.useState("");

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };
  return (
    <div>
      <Index.Box className="back-f5">
        <Index.Box className="search-main-header">
          <Index.Box className="search-header space-between">
            <Index.Box className="d-flex res-admin-btn-set">
              {/* backbtn */}
              <Index.Box className="orange-btn back-btn">
                <Index.Button variant="contained" disableRipple>
                  <img
                    src={Index.Svg.Backarrow}
                    alt=""
                    className="mr-10 user-back"
                  />{" "}
                  Back
                </Index.Button>
              </Index.Box>
              {/* backbtn end*/}

              <Index.Box sx={{ flexGrow: 1 }} className="search-main">
                <Search className="search">
                  <SearchIconWrapper className="search-icon">
                    <Index.SearchIcon />
                  </SearchIconWrapper>
                  <StyledInputBase
                    placeholder="Search…"
                    inputProps={{ "aria-label": "search" }}
                  />
                </Search>
              </Index.Box>
            </Index.Box>
            <Index.Box className="d-flex">
              {/* backbtn */}
              <Index.Box className="orange-btn back-btn">
                <Index.Button variant="contained" disableRipple>
                  dELETE
                </Index.Button>
              </Index.Box>
              {/* backbtn end*/}
              {/* backbtn */}
              <Index.Box className="orange-btn back-btn">
                <Index.Button variant="contained" disableRipple>
                  edit
                </Index.Button>
              </Index.Box>
              {/* backbtn end*/}
            </Index.Box>
          </Index.Box>
        </Index.Box>

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
                                <Item>
                                  <Index.Box className="admin-profile-text">
                                    <Index.Typography
                                      className=" profile-text"
                                      variant="body1"
                                      component="p"
                                    >
                                      Post Name
                                    </Index.Typography>
                                  </Index.Box>
                                  <Index.TextField
                                    hiddenLabel
                                    id="filled-hidden-label-normal"
                                    placeholder="Post Name "
                                    variant="filled"
                                    className=" input-top input-placeholder set-getting-box getstart-res input-design"
                                  />
                                </Item>
                              </Index.Grid>
                              <Index.Grid
                                item
                                xs={12}
                                sm={6}
                                md={6}
                                lg={6}
                                className="item-top"
                              >
                                <Item>
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
                                    <Index.Box className="payment-inner-text admin-inner-text-space check-box-set">
                                      <Index.Box className="set-check-box">
                                        <Index.Checkbox
                                          {...label}
                                          defaultChecked
                                        />
                                      </Index.Box>
                                      <Index.Typography
                                        variant="body1"
                                        component="p"
                                        className=""
                                      >
                                        Student
                                      </Index.Typography>
                                    </Index.Box>
                                    <Index.Box className="payment-inner-text admin-inner-text-space check-box-set">
                                      <Index.Box className="set-check-box">
                                        <Index.Checkbox
                                          {...label}
                                          defaultChecked
                                        />
                                      </Index.Box>
                                      <Index.Typography
                                        variant="body1"
                                        component="p"
                                        className=""
                                      >
                                        Student
                                      </Index.Typography>
                                    </Index.Box>
                                  </Index.Box>
                                </Item>
                              </Index.Grid>
                              <Index.Grid
                                item
                                xs={12}
                                sm={12}
                                md={12}
                                lg={12}
                                className="item-top"
                              >
                                <Item className="select-design">
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
                                    sx={{ m: 1 }}
                                    className="set-select"
                                  >
                                    <Select
                                      value={age}
                                      onChange={handleChange}
                                      displayEmpty
                                      inputProps={{
                                        "aria-label": "Without label",
                                      }}
                                      className="select-menu-text getstart-res input-design"
                                    >
                                      <Index.MenuItem value="">
                                        <em>University Name </em>
                                      </Index.MenuItem>
                                      <Index.MenuItem value={10}>
                                        Ten
                                      </Index.MenuItem>
                                      <Index.MenuItem value={20}>
                                        Twenty
                                      </Index.MenuItem>
                                      <Index.MenuItem value={30}>
                                        Thirty
                                      </Index.MenuItem>
                                    </Select>
                                  </Index.FormControl>
                                </Item>
                              </Index.Grid>

                              <Index.Grid
                                item
                                xs={12}
                                sm={12}
                                md={12}
                                lg={12}
                                className="item-top"
                              >
                                <Item>
                                  <Index.Box className="admin-profile-text">
                                    <Index.Typography
                                      className=" profile-text"
                                      variant="body1"
                                      component="p"
                                    >
                                      Info
                                    </Index.Typography>
                                  </Index.Box>
                                  <Index.Box className="input-design">
                                    <Index.Box className="viewedit-text "></Index.Box>
                                    <Index.Box className="">
                                      <Index.TextareaAutosize
                                        className="set-textarea-box"
                                        aria-label="empty textarea"
                                        placeholder="Info"
                                        minRows="4"
                                      />
                                    </Index.Box>
                                  </Index.Box>
                                </Item>
                              </Index.Grid>
                              <Index.Grid
                                item
                                xs={12}
                                sm={6}
                                md={6}
                                lg={6}
                                className="item-top"
                              >
                                <Item>
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
                                    <Index.Box className="payment-inner-text admin-inner-text-space check-box-set">
                                      <Index.Box className="set-check-box">
                                        <Index.Checkbox
                                          {...label}
                                          defaultChecked
                                        />
                                      </Index.Box>
                                      <Index.Typography
                                        variant="body1"
                                        component="p"
                                        className=""
                                      >
                                        Yes
                                      </Index.Typography>
                                    </Index.Box>
                                    <Index.Box className="payment-inner-text admin-inner-text-space check-box-set">
                                      <Index.Box className="set-check-box">
                                        <Index.Checkbox
                                          {...label}
                                          defaultChecked
                                        />
                                      </Index.Box>
                                      <Index.Typography
                                        variant="body1"
                                        component="p"
                                        className=""
                                      >
                                        No
                                      </Index.Typography>
                                    </Index.Box>
                                  </Index.Box>
                                </Item>
                              </Index.Grid>
                              <Index.Grid
                                item
                                xs={12}
                                sm={6}
                                md={6}
                                lg={6}
                                className="add-btn"
                              >
                                <Item>
                                  <Index.Box className="admin-profile-text">
                                    <Index.Typography
                                      className=" profile-text"
                                      variant="body1"
                                      component="p"
                                    >
                                      Image uploaded
                                    </Index.Typography>
                                  </Index.Box>
                                  <Index.TextField
                                    hiddenLabel
                                    id="filled-hidden-label-normal"
                                    placeholder="Image Uploaded  "
                                    variant="filled"
                                    className="input-design input-top input-placeholder set-getting-box set-admin-upload"
                                  />
                                  <Index.Box className="orange-btn-modal payment-btn set-position-btn2 ">
                                    <Index.Box className="upload-btn">
                                      {" "}
                                      <Index.Button
                                        variant="contained"
                                        disableRipple
                                      >
                                        Upload
                                      </Index.Button>
                                      <input
                                        accept="image/*"
                                        type="file"
                                        className="upload-btn-input"
                                      />
                                    </Index.Box>
                                  </Index.Box>
                                </Item>
                              </Index.Grid>

                              <Index.Grid
                                item
                                xs={12}
                                sm={6}
                                md={6}
                                lg={6}
                                className="item-top"
                              >
                                <Item></Item>
                              </Index.Grid>
                              <Index.Grid
                                item
                                xs={12}
                                sm={6}
                                md={6}
                                lg={6}
                                className="item-top"
                              >
                                <Item>
                                  <Index.Box className="orange-btn payment-btn login-btn flex-end">
                                    <Index.Button
                                      variant="contained"
                                      disableRipple
                                    >
                                      Post
                                    </Index.Button>
                                  </Index.Box>
                                </Item>
                              </Index.Grid>
                            </Index.Grid>
                          </Index.Box>
                        </Index.Box>
                      </Index.Box>
                    </Index.Box>
                  </Index.Box>
                </Index.Box>
              </Index.Box>
            </Index.Box>
          </Index.Box>
        </Index.Box>
      </Index.Box>
    </div>
  );
}

export default EditPost;
