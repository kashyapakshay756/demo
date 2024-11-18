import React from "react";

export interface ConfirmPasswordControllerProps {
  newPassword?: string;
  setNewPassword: React.Dispatch<React.SetStateAction<string | undefined>>;
  confirmPassword?: string;
  setConfirmPassword: React.Dispatch<React.SetStateAction<string | undefined>>;
}
