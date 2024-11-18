export interface TableItemCardProps {
  item: any;
  isViewButton?: boolean;
  isEditButton?: boolean;
  onViewButton?: () => void;
  onEditButton?: () => void;
  isDeleteButton?: boolean;
  onDeleteButton?: () => void;
  deleteLoading?: boolean;
  isVoucher?: boolean;
  isButton?: boolean;
  end?: boolean;
}
