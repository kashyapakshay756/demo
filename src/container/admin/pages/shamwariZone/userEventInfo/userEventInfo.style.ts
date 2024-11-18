import { Box, IconButton, styled } from "@mui/material";

export const StyledBox = styled(Box)(({ theme }) => ({
  maxHeight: "100vh",
  overflow: "hidden",
  textAlign: "center",
}));

export const StyledIconButton = styled(IconButton)(({ theme }) => ({
  background: "rgba(255,255,255,0.5)",
  alignSelf: "flex-start",
  position: "absolute",
  marginTop: 7,
  marginLeft: 7,
}));
