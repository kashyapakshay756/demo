import { styled, alpha, TextField } from "@mui/material";
import Index from "./componentIndex";

export const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export const StyledSearch = styled("div")(({ theme }) => ({
  position: "relative",
  borderColor: "gray",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

export const StyledEditorContainer = styled(Index.Box)(({ theme }) => ({
  paddingTop: theme.spacing(2),
}));

export const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

export const StyledInputBase = styled(Index.InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "19vw",
    [theme.breakpoints.down("md")]: {
      width: "30vw",
    },
    [theme.breakpoints.down("sm")]: {
      width: "40vw",
    },
  },
}));

export const StyledItem = styled(Index.Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export const label = {
  inputProps: {
    "aria-label": "Checkbox demo",
  },
};

export const ProgressContainer = styled(Index.Box)(({ theme }) => ({
  display: "flex",
  flex: 1,
  alignItems: "center",
  justifyContent: "center",
  height: "100vh",
}));

export const ErrorText = styled(Index.Typography)(({ theme }) => ({
  fontSize: 12,
  textAlign: "left",
  color: "red",
  marginTop: 4,
  marginLeft: 3,
}));

export const TextButton = styled(Index.Button)(({ theme }) => ({
  paddingBottom: 0,
  borderBottom: "1px solid",
  borderColor: "#ED753F",
  textTransform: "initial",
  borderRadius: 0,
}));

export const StyledBox = styled(Index.Box)(({ theme }) => ({
  background: "white",
  alignSelf: "flex-end",
  marginTop: 6,
}));

export const StyledText = styled(Index.Typography)(({ theme }) => ({
  fontSize: 16,
  fontFamily: "inter-semibold",
  border: 0,
  color: "#0b0b19",
  alignSelf: "flex-end",
}));

export const InputText = styled(Index.Typography)(({ theme }) => ({
  fontSize: 16,
  fontFamily: "inter-semibold",
  border: 0,
  color: "#0b0b19",
  marginRight: 5,
}));

export const StyledTitle = styled(Index.Typography)(({ theme }) => ({
  fontSize: 22,
  fontFamily: "inter-bold",
  marginLeft: 15,
  marginTop: 1,
  marginBottom: 20,
}));

export const StyledTextField = styled(TextField)(({ theme }) => ({
  "& .MuiInputBase-root.Mui-disabled": {
    background: "white",
  },
  "& .MuiInputBase-input.Mui-disabled": {
    WebkitTextFillColor: "black",
  },
}));

export const StyledImage = styled("img")(({ theme }) => ({
  height: 100,
  width: 100,
  borderRadius: 10,
  marginLeft: 20,
}));
