import { styled, Box } from "@mui/material";

export const StyledContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  borderBottom: "1px solid",
  borderColor: "#ED753F",
  justifyContent: "space-between",
  paddingBottom: 13,
  marginBottom: 13,
}));
