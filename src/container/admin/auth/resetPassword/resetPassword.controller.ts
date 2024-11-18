import { useState } from "react";
import { ResetPasswordControllerProps } from "./resetPassword.interface";

const ResetPasswordController = (): ResetPasswordControllerProps => {
  const [email, setEmail] = useState<string>();

  return { email, setEmail };
};

export default ResetPasswordController;
