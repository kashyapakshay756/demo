import React, { memo } from "react";
import Index from "../componentIndex";
import { TabPanelProps } from "./tabPanel.interface";

const TabPanel: React.FC<TabPanelProps> = ({
  index,
  value,
  children,
  ...props
}) => {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...props}
    >
      {value === index && (
        <Index.Box sx={{ p: 3 }}>
          <Index.Typography>{children}</Index.Typography>
        </Index.Box>
      )}
    </div>
  );
};

export default memo(TabPanel);
