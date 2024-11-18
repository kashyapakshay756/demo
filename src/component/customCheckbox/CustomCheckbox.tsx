import React, { memo } from "react";
import Index from "../componentIndex";
import { CustomCheckboxProps } from "./customCheckbox.interface";
// import { label } from "../commonStyles";

const CustomCheckbox: React.FC<CustomCheckboxProps> = ({
  title,
  onCheckboxClick,
  checked,
  disabled,
}) => {
  return (
    <Index.Box className="payment-inner-text admin-inner-text-space check-box-set">
      <Index.Box
        className="set-check-box"
        onClick={() => {
          !disabled && onCheckboxClick();
        }}
      >
        <Index.Checkbox checked={checked} />
      </Index.Box>
      <Index.Typography variant="body1" component="p" className="">
        {title}
      </Index.Typography>
    </Index.Box>
  );
};

export default memo(CustomCheckbox);
