import React, { memo } from "react";
import { CircularProgress, TextField } from "@mui/material";
import ErrorText from "../../../../../component/errorText/ErrorText";
import Index from "../../../../../component/componentIndex";
import {
  InputText,
  ProgressContainer,
  StyledBox,
  StyledText,
} from "../../../../../component/commonStyles";
import { tableCellData } from "./userEvent.const";
import UserEventController from "./userEvent.controller";
import { UserEventProps } from "./userEvent.interface";
import { StyledButton, StyledCostContainer } from "./userEvent.style";

const UserEvent: React.FC<UserEventProps> = ({
  eventList,
  filterData,
  search,
}) => {
  const {
    onView,
    loading,
    eventCost,
    setEventCost,
    validation,
    updateSpinner,
    error,
    setOpenSnackbar,
    openSnackbar,
    snackbarMessage,
  } = UserEventController();
  return (
    <>
      {loading ? (
        <ProgressContainer>
          <CircularProgress size={40} sx={{ color: "primary" }} />
        </ProgressContainer>
      ) : (
        <Index.Box className="back-f5 presonal-infospace">
          <StyledCostContainer>
            <StyledButton
              className="orange-btn "
              sx={{ marginBottom: error ? 2.5 : 0 }}
            >
              <Index.Button
                variant="contained"
                disableRipple
                onClick={validation}
                loading={updateSpinner}
              >
                Update
              </Index.Button>
            </StyledButton>
            <Index.Box>
              <StyledText>Master Meet Up Cost</StyledText>
              <StyledBox boxShadow={1}>
                <TextField
                  sx={{
                    "& fieldset": { border: "none" },
                    padding: 0,
                  }}
                  value={eventCost}
                  onChange={(val) => setEventCost(val?.target?.value)}
                  inputProps={{ maxLength: 9 }}
                  InputProps={{
                    startAdornment: (
                      <Index.InputAdornment position="end">
                        <InputText>£</InputText>
                      </Index.InputAdornment>
                    ),
                  }}
                />
              </StyledBox>
              {error && (
                <ErrorText
                  error={error}
                  props={{ sx: { alignSelf: "flex-end", textAlign: "right" } }}
                />
              )}
            </Index.Box>
          </StyledCostContainer>
          <Index.CustomTable
            tableClass="table-main  noticeboard-table"
            tableCellData={tableCellData}
            tableData={filterData === null ? eventList : filterData}
            isButton
            isViewButton
            onViewButton={(id) => onView(id)}
            listEmptyText="No user event available"
            search={search}
          />
          <Index.Snackbar
            open={openSnackbar}
            onClose={() => setOpenSnackbar(false)}
            onCloseClick={() => setOpenSnackbar(false)}
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
            message={snackbarMessage}
            autoHideDuration={5000}
          />
        </Index.Box>
      )}
    </>
  );
};

export default memo(UserEvent);
