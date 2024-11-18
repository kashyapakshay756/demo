import React from "react";

export interface ResetPasswordControllerProps {
  email?: string;
  setEmail: React.Dispatch<React.SetStateAction<string | undefined>>;
}
