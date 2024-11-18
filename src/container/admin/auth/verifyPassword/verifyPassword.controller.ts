import { useState } from "react";
import { VerifyPasswordControllerProps } from "./verifyPassword.interface";

const VerifyPasswordController = (): VerifyPasswordControllerProps => {
  const [verificationCode, setVerificationCode] = useState<string>();

  return { verificationCode, setVerificationCode };
};

export default VerifyPasswordController;
