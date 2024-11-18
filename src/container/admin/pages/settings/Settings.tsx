import React from "react";
import Index from "../../../../component/componentIndex";
import PrivacyPolicy from "./privacyPolicy/PrivacyPolicy";
import SettingsController from "./settings.controller";
import { TableCellDataProps } from "../../../../component/customTable/customTable.interface";
import { tabData } from "./settings.const";
import TermsAndConditions from "./termsAndConditions/TermsAndConditions";

const Settings: React.FC = () => {
  const { index, setIndex } = SettingsController();
  return (
    <>
      <Index.Box sx={{ display: "flex", paddingTop: 3 }}>
        {tabData?.map((item: TableCellDataProps, id: number) => (
          <Index.Box sx={{ marginRight: 2 }} key={id}>
            <Index.Button
              variant="contained"
              disableRipple
              sx={{
                background: index === id ? "#027C8A" : "#ED753F",
                boxShadow: 0,
                borderRadius: 2,
                "&:hover": {
                  backgroundColor: index === id ? "#027C8A" : "#ED753F",
                },
              }}
              onClick={() => setIndex(id)}
            >
              {item.title}
            </Index.Button>
          </Index.Box>
        ))}
      </Index.Box>
      {index === 0 ? <PrivacyPolicy /> : <TermsAndConditions />}
    </>
  );
};

export default Settings;
