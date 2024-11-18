import React, { memo } from "react";
import { ErrorTextProps } from "./errorText.interface";
import { StyledText } from "./errorText.style";

const ErrorText: React.FC<ErrorTextProps> = ({ error, props }) => {
  return <StyledText>{error}</StyledText>;
};

export default memo(ErrorText);
