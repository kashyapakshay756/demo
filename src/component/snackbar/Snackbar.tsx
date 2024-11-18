import React, { memo } from "react";
import {
  IconButton,
  Snackbar as MUISnackBar,
  SnackbarProps,
  useTheme,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

interface ActionProps {
  onCloseClick?: () => void;
}

const Snackbar: React.FC<SnackbarProps & ActionProps> = (props) => {
  const theme = useTheme();
  const action = (
    <>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={props?.onCloseClick && props?.onCloseClick}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </>
  );
  return (
    <MUISnackBar
      action={action}
      ContentProps={{
        sx: {
          background: theme.palette.primary.main,
        },
      }}
      {...props}
    />
  );
};

export default memo(Snackbar);
