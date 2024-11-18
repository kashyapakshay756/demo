import React, { memo } from "react";
import { IconButton } from "@mui/material";
import { Add } from "@mui/icons-material";
import { AddButtonProps } from "./addButton.interface";

const AddButton: React.FC<AddButtonProps> = ({ onAdd }) => {
  return (
    <IconButton
      sx={{
        background: "#F6D3C3",
      }}
      disableRipple
      onClick={onAdd}
    >
      <Add sx={{ color: "#ED753F" }} />
    </IconButton>
  );
};

export default memo(AddButton);
