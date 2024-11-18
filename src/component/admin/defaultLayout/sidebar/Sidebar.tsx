import React, { memo } from "react";
import { Link } from "react-router-dom";
import {
  Apartment,
  LocalOffer,
  LocationOn,
  PeopleAlt,
  School,
  Settings,
  Slideshow,
  Star,
} from "@mui/icons-material";
import Index from "../../../componentIndex";
import SidebarController from "./sidebar.controller";
import { SidebarProps } from "./sidebar.interface";

const Sidebar: React.FC<SidebarProps> = ({ openSidebar }) => {
  const {
    open,
    screen,
    handleMaster,
    handleClickPartner,
    onLogout,
    selected,
    setSelected,
  } = SidebarController();
  return (
    <>
      <Index.Box
        className={
          openSidebar
            ? "sidebar-content sidebar-content-show"
            : "sidebar-content sidebar-content-hide"
        }
      >
        <Index.Box>
          <Index.Box className="sidebar-logo">
            <img src={Index.Svg.Logo} alt="" className="d-flex side-logo" />
          </Index.Box>
          <Index.Box className="sidebar-inner-content">
            <Index.List className="sidebar-ul">
              <Link to="/admin/dashboard" onClick={() => setSelected(1)}>
                <Index.ListItem
                  className={selected === 1 ? "active" : ""}
                  style={{ padding: 15, paddingLeft: 30 }}
                >
                  <Index.Box className="dash-inner-li">
                    <img src={Index.Svg.Dash} alt="" className="dash-img" />
                    <Index.Box className="side-title">Dashboard</Index.Box>
                  </Index.Box>
                </Index.ListItem>
              </Link>
              <Index.ListItem
                className={selected === 2 ? "active" : ""}
                style={{ padding: 0, paddingLeft: 18 }}
              >
                <Index.Link
                  className="admin-sidebar-link"
                  onClick={() => setSelected(2)}
                >
                  <Index.Box
                    className="admin-sidebar-main"
                    onClick={handleMaster}
                    style={{ padding: 10 }}
                  >
                    <Index.Box className="dash-inner-li">
                      <Index.Box className="admin-sidebar-icon">
                        <Star className="dash-img" fontSize="small" />
                      </Index.Box>
                      <Index.Box className="side-title">Masters</Index.Box>
                    </Index.Box>
                    <Index.Box className="admin-sidebar">
                      {open ? (
                        <Index.ExpandLess className="expandless-icon" />
                      ) : (
                        <Index.ExpandMore className="expandmore-icon" />
                      )}
                    </Index.Box>
                  </Index.Box>
                  <Index.Box className="submenu-main">
                    <Index.Collapse
                      in={open}
                      timeout="auto"
                      unmountOnExit
                      className="submenu-collapse"
                    >
                      <Index.List
                        component="div"
                        disablePadding
                        className="admin-sidebar-submenulist"
                      >
                        <Index.ListItem className="admin-sidebar-listitem">
                          <School
                            fontSize="small"
                            className="dash-img"
                            sx={{ color: " #027C8A" }}
                          />
                          <Link
                            className="admin-sidebar-link  active"
                            to="university"
                          >
                            University
                          </Link>
                        </Index.ListItem>
                        <Index.ListItem className="admin-sidebar-listitem">
                          <LocationOn
                            fontSize="small"
                            className="dash-img"
                            sx={{ color: " #027C8A" }}
                          />
                          <Link className="admin-sidebar-link " to="area">
                            Area
                          </Link>
                        </Index.ListItem>
                        <Index.ListItem className="admin-sidebar-listitem">
                          <Apartment
                            className="dash-img"
                            fontSize="small"
                            sx={{ color: " #027C8A" }}
                          />
                          <Link
                            className="admin-sidebar-link "
                            to="/admin/sector"
                          >
                            Sectors
                          </Link>
                        </Index.ListItem>
                        <Index.ListItem className="admin-sidebar-listitem">
                          <Slideshow
                            className="dash-img"
                            fontSize="small"
                            sx={{ color: "#027C8A" }}
                          />
                          <Link
                            className="admin-sidebar-link "
                            to="/admin/howToVideos"
                          >
                            How To Use Videos
                          </Link>
                        </Index.ListItem>
                        <Index.ListItem className="admin-sidebar-listitem">
                          <LocalOffer
                            className="dash-img"
                            fontSize="small"
                            sx={{ color: " #027C8A" }}
                          />
                          <Link
                            className="admin-sidebar-link "
                            to="/admin/offerTemplates"
                          >
                            Offer Templates
                          </Link>
                        </Index.ListItem>
                      </Index.List>
                    </Index.Collapse>
                  </Index.Box>
                </Index.Link>
              </Index.ListItem>
              <Link to="/admin/users" onClick={() => setSelected(3)}>
                <Index.ListItem
                  style={{ padding: 15, paddingLeft: 30 }}
                  className={selected === 3 ? "active" : ""}
                >
                  <Index.Box className="dash-inner-li">
                    <img src={Index.Svg.User} alt="" className="dash-img" />
                    <Index.Box className="side-title">Zeebra Users</Index.Box>
                  </Index.Box>
                </Index.ListItem>
              </Link>
              <Link
                className="admin-sidebar-link"
                to="/admin/partners"
                onClick={() => setSelected(4)}
              >
                <Index.ListItem
                  className={
                    selected === 4
                      ? "admin-sidebar-listitem admin-submenu-listitem-main active"
                      : "admin-sidebar-listitem admin-submenu-listitem-main"
                  }
                  onClick={handleClickPartner}
                  style={{ padding: 15, paddingLeft: 30 }}
                >
                  <Index.Box className="admin-sidebar-main">
                    <Index.Box className="dash-inner-li">
                      <img
                        src={Index.Svg.Users}
                        alt="sidebar icon"
                        className="dash-img"
                      />
                      <Index.Box className="side-title">
                        Zeebra Partners
                      </Index.Box>
                    </Index.Box>
                  </Index.Box>
                </Index.ListItem>
              </Link>
              <Link to="/admin/noticeboard" onClick={() => setSelected(5)}>
                <Index.ListItem
                  style={{ padding: 15, paddingLeft: 30 }}
                  className={selected === 5 ? "active" : ""}
                >
                  <Index.Box className="dash-inner-li">
                    <img src={Index.Svg.Notice} alt="" className="dash-img" />
                    <Index.Box className="side-title">Notice Board</Index.Box>
                  </Index.Box>
                </Index.ListItem>
              </Link>
              <Link to="/admin/shamwariZone" onClick={() => setSelected(6)}>
                <Index.ListItem
                  style={{ padding: 15, paddingLeft: 30 }}
                  className={selected === 6 ? "active" : ""}
                >
                  <Index.Box className="dash-inner-li">
                    <PeopleAlt
                      className="dash-img"
                      fontSize="small"
                      sx={{ color: " #027C8A" }}
                    />
                    <Index.Box className="side-title">Shamwari Zone</Index.Box>
                  </Index.Box>
                </Index.ListItem>
              </Link>
              <Link to="/admin/recommendation" onClick={() => setSelected(7)}>
                <Index.ListItem
                  style={{ padding: 15, paddingLeft: 30 }}
                  className={selected === 7 ? "active" : ""}
                >
                  <Index.Box className="dash-inner-li">
                    <PeopleAlt
                      className="dash-img"
                      fontSize="small"
                      sx={{ color: " #027C8A" }}
                    />
                    <Index.Box className="side-title">
                      User partner recommendation
                    </Index.Box>
                  </Index.Box>
                </Index.ListItem>
              </Link>
              <Link to="/admin/vouchercost" onClick={() => setSelected(8)}>
                <Index.ListItem
                  style={{ padding: 15, paddingLeft: 30 }}
                  className={selected === 8 ? "active" : ""}
                >
                  <Index.Box className="dash-inner-li">
                    <img src={Index.Svg.Offer} alt="" className="dash-img" />
                    <Index.Box className="side-title">Voucher Cost</Index.Box>
                  </Index.Box>
                </Index.ListItem>
              </Link>
              <Link to="/admin/subscription" onClick={() => setSelected(9)}>
                <Index.ListItem
                  style={{ padding: 15, paddingLeft: 30 }}
                  className={selected === 9 ? "active" : ""}
                >
                  <Index.Box className="dash-inner-li">
                    <img
                      src={Index.Svg.Subsction}
                      alt=""
                      className="dash-img"
                    />
                    <Index.Box className="side-title">
                      Yearly Subscription Cost
                    </Index.Box>
                  </Index.Box>
                </Index.ListItem>
              </Link>
              <Link to="/admin/passwordreset" onClick={() => setSelected(10)}>
                <Index.ListItem
                  style={{ padding: 15, paddingLeft: 30 }}
                  className={selected === 10 ? "active" : ""}
                >
                  <Index.Box className="dash-inner-li">
                    <img src={Index.Svg.Emailimg} alt="" className="dash-img" />
                    <Index.Box className="side-title">
                      Email & password
                    </Index.Box>
                  </Index.Box>
                </Index.ListItem>
              </Link>
              <Link to="/admin/settings" onClick={() => setSelected(11)}>
                <Index.ListItem
                  style={{ padding: 15, paddingLeft: 30 }}
                  className={selected === 11 ? "active" : ""}
                >
                  <Index.Box className="dash-inner-li">
                    <Settings
                      className="dash-img"
                      fontSize="small"
                      sx={{ color: " #027C8A" }}
                    />
                    <Index.Box className="side-title">Settings</Index.Box>
                  </Index.Box>
                </Index.ListItem>
              </Link>
            </Index.List>
          </Index.Box>
          <Index.Box className="support" onClick={onLogout}>
            Logout
          </Index.Box>
        </Index.Box>
      </Index.Box>
    </>
  );
};

export default memo(Sidebar);
