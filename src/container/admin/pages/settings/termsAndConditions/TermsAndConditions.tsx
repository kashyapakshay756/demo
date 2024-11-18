import React, { memo } from "react";
import { CircularProgress } from "@mui/material";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import Index from "../../../../../component/componentIndex";
import TermsAndConditionsController from "./termsAndConditions.controller";
import {
  StyledEditorContainer,
  ProgressContainer,
} from "../../../../../component/commonStyles";

const TermsAndConditions: React.FC = () => {
  const {
    termsAndConditions,
    handleTermsAndConditions,
    validation,
    loading,
    updateSpinner,
    openSnackbar,
    setOpenSnackbar,
    setTitle,
    snackbarMessage,
    title,
    error,
  } = TermsAndConditionsController();
  return (
    <>
      {loading ? (
        <ProgressContainer>
          <CircularProgress size={40} sx={{ color: "primary" }} />
        </ProgressContainer>
      ) : (
        <StyledEditorContainer>
          <Index.Box className="input-design-div admin-design-div">
            <Index.Typography sx={{ fontSize: 18 }}>Title:</Index.Typography>
            <Index.TextField
              hiddenLabel
              id="filled-hidden-label-normal"
              placeholder="Title"
              variant="filled"
              value={title}
              sx={{ width: "100%" }}
              onChange={(val) => setTitle(val?.target?.value)}
              className="admin-input-design input-placeholder"
              helperText={error.title}
            />
          </Index.Box>
          <Index.Typography sx={{ fontSize: 18 }}>
            Description:
          </Index.Typography>
          <CKEditor
            editor={ClassicEditor}
            data={termsAndConditions}
            onReady={(editor: any) => {
              editor.editing.view.change((writer: any) => {
                writer.setStyle(
                  "height",
                  "60vh",
                  editor.editing.view.document.getRoot()
                );
              });
            }}
            onChange={handleTermsAndConditions}
          />
          {error?.termsAndConditions && (
            <Index.Typography
              sx={{ fontSize: 12, color: "red", marginLeft: 1 }}
            >
              {error?.termsAndConditions}
            </Index.Typography>
          )}
          <Index.Box
            className="orange-btn"
            sx={{ marginTop: 3, paddingBottom: 5 }}
          >
            <Index.Button
              variant="contained"
              disableRipple
              loading={updateSpinner}
              onClick={validation}
            >
              Update
            </Index.Button>
          </Index.Box>
          <Index.Snackbar
            open={openSnackbar}
            onClose={() => setOpenSnackbar(false)}
            onCloseClick={() => setOpenSnackbar(false)}
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
            message={snackbarMessage}
            autoHideDuration={3000}
          />
        </StyledEditorContainer>
      )}
    </>
  );
};

export default memo(TermsAndConditions);
