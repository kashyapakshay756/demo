import { ButtonProps as MUIButtonProps } from "@mui/material";

export interface ButtonProps extends MUIButtonProps {
  loading?: boolean;
  progressColor?: string;
}
