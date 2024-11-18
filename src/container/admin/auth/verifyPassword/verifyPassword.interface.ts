import React from "react";

export interface VerifyPasswordControllerProps {
  verificationCode?: string;
  setVerificationCode: React.Dispatch<React.SetStateAction<string | undefined>>;
}
