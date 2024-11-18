import React, { memo } from "react";
import { Modal } from "@mui/material";
import { DeleteDialogProps } from "./deleteDialog.interface";
import Index from "../componentIndex";
import {
  StyledButtonContainer,
  StyledContainer,
  StyledModal,
} from "./deleteDialog.style";

const DeleteDialog: React.FC<DeleteDialogProps> = ({
  open,
  onClose,
  handleCancel,
  handleDelete,
  dialogTitle,
  loading,
  deleteDisabled,
}) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="delete-modal-title"
      aria-describedby="delete-modal-description"
      className="set-modal-back"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}
    >
      <StyledContainer>
        <StyledModal>
          <Index.Typography
            className=" profile-text"
            variant="body1"
            component="p"
          >
            {dialogTitle}
          </Index.Typography>
          <StyledButtonContainer>
            <Index.Box
              className="orange-btn table-btn"
              sx={{ width: "23%", marginRight: 2 }}
            >
              <Index.Button onClick={handleCancel} sx={{ width: "100%" }}>
                Cancel
              </Index.Button>
            </Index.Box>
            <Index.Box className="orange-btn table-btn" sx={{ width: "23%" }}>
              <Index.Button
                onClick={handleDelete}
                loading={loading}
                sx={{ color: "white", width: "100%" }}
                disabled={deleteDisabled}
              >
                Delete
              </Index.Button>
            </Index.Box>
          </StyledButtonContainer>
        </StyledModal>
      </StyledContainer>
    </Modal>
  );
};

export default memo(DeleteDialog);
