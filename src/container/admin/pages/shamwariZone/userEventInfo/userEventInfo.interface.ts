import React from "react";
import { ItemProps } from "../../../../../component/userInvitationCard/userInvitationCard.interface";

export interface UserEventInfoControllerProps {
  goBack: () => void;
  userEventId: string | undefined;
  openDialog: boolean;
  handleOpenDialog: () => void;
  handleCloseDialog: () => void;
  deleteSpinner: boolean;
  openSnackbar: boolean;
  setOpenSnackbar: React.Dispatch<React.SetStateAction<boolean>>;
  snackbarMessage?: string;
  deleteUserEvent: () => void;
  onSendMessage: () => void;
  loading: boolean;
  eventInfo?: EventInfoProps;
  message?: string;
  setMessage: React.Dispatch<React.SetStateAction<string | undefined>>;
  chat: any[];
  onDelete: (id: string) => void;
  handleUpload: (e: any) => void;
  imageList?: string[];
  onMore: (images: string[]) => void;
  open: boolean;
  onClose: () => void;
  invitation?: ItemProps[];
}

export interface EventInfoProps {
  _id: string;
  title: string;
  image: string;
  Date: string;
  Time: string;
  event_address: string;
  description: string;
  is_deleted: number;
  party_size: number;
  user_id: {
    _id: string;
    fullName: string;
    university_id: {
      _id: string;
      university_name: string;
    };
  };
  payment_created_At: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
  payment_Id: string;
  status: string;
}
