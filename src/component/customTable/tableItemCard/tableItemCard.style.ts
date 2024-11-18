import { IconButton, styled, TextField } from "@mui/material";

export const StyledIconButton = styled(IconButton)(({ theme }) => ({
  padding: 0,
  background: "#ED753F",
  height: 30,
  width: 30,
  borderRadius: 5,
  alignItems: "center",
  justifyContent: "center",
}));

export const StyledTextField = styled(TextField)(({ theme }) => ({
  "& .MuiInputBase-root.Mui-disabled": {
    background: "white",
  },
  "& .MuiInputBase-input.Mui-disabled": {
    WebkitTextFillColor: "black",
  },
}));
