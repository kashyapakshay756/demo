import { Box, styled } from "@mui/material";

export const StyledModal = styled(Box)(({ theme }) => ({
  background: "white",
  padding: theme.spacing(2),
  borderRadius: 10,
}));

export const StyledButtonContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  marginTop: 22,
  justifyContent: "flex-end",
}));

export const StyledContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100%",
}));
