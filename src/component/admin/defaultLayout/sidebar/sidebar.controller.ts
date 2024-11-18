import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { logout } from "../../../../services/redux/user/action";
import { SidebarControllerProps } from "./sidebar.interface";
import { useAppDispatch } from "../../../../services/redux/controller";

const SidebarController = (): SidebarControllerProps => {
  const [open, setOpen] = useState<boolean>(false);
  const [selected, setSelected] = useState<number>(1);
  const [openPartner, setOpenPartner] = useState<boolean>(false);
  const [screen, setScreen] = useState<string>("");

  const navigation = useNavigate();

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (window.screen.width < 768) {
      setScreen("Mobile");
    } else {
      setScreen("Desktop");
    }
  }, [window.screen.availHeight]);

  const handleMaster = (): void => {
    setOpen(!open);
  };

  const handleClickPartner = (): void => {
    setOpenPartner(!openPartner);
  };

  const onLogout = (): void => {
    navigation("/");
    dispatch(logout());
    localStorage.removeItem("token");
  };

  return {
    open,
    screen,
    handleMaster,
    handleClickPartner,
    onLogout,
    selected,
    setSelected,
  };
};

export default SidebarController;
