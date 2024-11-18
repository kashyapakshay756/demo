import { Box, styled } from "@mui/material";

export const StyleMainContainer = styled(Box)(({ theme }) => ({
  marginBottom: 15,
}));

export const StyledContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
}));

export const StyledMessageContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
}));

export const StyledDetailsContainer = styled(Box)(({ theme }) => ({
  background: "#DEDEDE",
  width: "75%",
  borderRadius: 10,
  padding: theme.spacing(1, 1),
}));

export const StyledButtonContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "flex-end",
  marginTop: 7,
  alignItems: "center",
}));

export const StyledBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-between",
}));

export const StyledPlus = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginTop: -55,
}));

export const StyledBorder = styled(Box)(({ theme }) => ({
  height: "1px",
  width: 16,
  rotate: "90deg",
  backgroundColor: "black",
}));

export const StyledImage = styled("img")(({ theme }) => ({
  marginTop: 10,
  height: "100%",
  width: "100%",
  borderRadius: 5,
}));
