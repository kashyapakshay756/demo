import { Box, styled } from "@mui/material";

export const StyledCostContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "flex-end",
  justifyContent: "flex-end",
  marginBottom: 10,
  marginRight: 15,
}));

export const StyledButton = styled(Box)(({ theme }) => ({
  marginRight: 10,
}));
