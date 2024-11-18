import React, { memo } from "react";
import { Button as MUIButton, CircularProgress } from "@mui/material";
import { ButtonProps } from "./button.interface";

const Button: React.FC<ButtonProps> = ({
  loading,
  children,
  progressColor = "white",
  ...rest
}) => {
  return (
    <MUIButton {...rest}>
      {loading ? (
        <CircularProgress size={20} sx={{ color: progressColor }} />
      ) : (
        children
      )}
    </MUIButton>
  );
};

export default memo(Button);
