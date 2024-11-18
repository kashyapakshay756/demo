import { useState } from "react";
import { SidebarControllerProps } from "./Sidebar.interface";

const SidebarController = (): SidebarControllerProps => {
  const [openSidebar, setOpenSidebar] = useState<boolean>(false);

  const handleSidebarToggle = (): void => {
    setOpenSidebar(!openSidebar);
  };

  return { openSidebar, handleSidebarToggle };
};

export default SidebarController;
