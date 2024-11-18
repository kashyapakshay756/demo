import { Box, IconButton, styled } from "@mui/material";

export const StyledIconButton = styled(IconButton)(({ theme }) => ({
  background: "rgba(255,255,255, 0.7)",
  position: "absolute",
  marginLeft: 22,
}));

export const StyledBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

export const StyledEditorContainer = styled(Box)(({ theme }) => ({
  marginBottom: 15,
}));
