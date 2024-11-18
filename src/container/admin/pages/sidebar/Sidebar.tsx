import React from "react";
import { Outlet } from "react-router-dom";
import Index from "../../../../component/componentIndex";
import SidebarController from "./sidebar.controller";

const Sidebar: React.FC = () => {
  const { openSidebar, handleSidebarToggle } = SidebarController();
  return (
    <>
      <Index.Box className="back-f5">
        <Index.Box className="headerres">
          <Index.ResponsiveHeader
            openSidebar={openSidebar}
            handleSidebarToggle={handleSidebarToggle}
          />
        </Index.Box>
        <Index.Box className="sidebar-wrapper">
          <Index.Sidebar
            openSidebar={openSidebar}
            handleSidebarToggle={handleSidebarToggle}
          />
        </Index.Box>
        <Index.Box>
          <Index.Box className="content-main">
            <Index.Box className="dash-content">
              <Outlet />
            </Index.Box>
          </Index.Box>
        </Index.Box>
      </Index.Box>
    </>
  );
};

export default Sidebar;
