import { useState } from "react";
import { ConfirmPasswordControllerProps } from "./confirmPassword.interface";

const ConfirmPasswordController = (): ConfirmPasswordControllerProps => {
  const [newPassword, setNewPassword] = useState<string>();
  const [confirmPassword, setConfirmPassword] = useState<string>();

  return { setConfirmPassword, setNewPassword, confirmPassword, newPassword };
};

export default ConfirmPasswordController;
