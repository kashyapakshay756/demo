export interface DeleteDialogProps {
  handleDelete?: () => void;
  handleCancel?: () => void;
  dialogTitle?: string;
  loading?: boolean;
  deleteDisabled?: boolean;
  open: boolean;
  onClose?: () => void;
}
