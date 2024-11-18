import { useState } from "react";
import { SettingsControllerProps } from "./settings.interface";

const SettingsController = (): SettingsControllerProps => {
  const [index, setIndex] = useState(0);

  return { index, setIndex };
};

export default SettingsController;
