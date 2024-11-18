import React, { memo } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import Index from "../../../componentIndex";
import { ResponsiveHeaderProps } from "./responsiveHeader.interface";

const ResponsiveHeader: React.FC<ResponsiveHeaderProps> = ({
  handleSidebarToggle,
}) => {
  return (
    <>
      <Index.Box className="header-responsive-main">
        <Index.Box className="header-responsive">
          <Index.Box className="reslogo">
            <img src={Index.Svg.Logo} alt="" className="reslogo" />
          </Index.Box>
          <Index.Box className="menulogo">
            <Index.Button className="p-0" onClick={handleSidebarToggle}>
              <MenuIcon className="menuimageres" />
            </Index.Button>
          </Index.Box>
        </Index.Box>
      </Index.Box>
    </>
  );
};

export default memo(ResponsiveHeader);
