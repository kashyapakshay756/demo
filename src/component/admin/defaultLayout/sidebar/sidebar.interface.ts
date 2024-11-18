import React from "react";

export interface SidebarControllerProps {
  open: boolean;
  screen: string;
  handleMaster: () => void;
  handleClickPartner: () => void;
  onLogout: () => void;
  selected: number;
  setSelected: React.Dispatch<React.SetStateAction<number>>;
}

export interface SidebarProps {
  openSidebar: boolean;
  handleSidebarToggle: () => void;
}

export interface SidebarDataProps {
  id: number;
  name: string;
}
