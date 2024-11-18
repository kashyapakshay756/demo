import React from "react";
import { SelectChangeEvent } from "@mui/material";
import { ItemsProps } from "../../../../component/chatCard/chatCard.interface";
import { TableCellDataProps } from "../../../../component/customTable/customTable.interface";

export interface CreatePostControllerProps {
  post: string;
  setPost: React.Dispatch<React.SetStateAction<string>>;
  info: string;
  setInfo: React.Dispatch<React.SetStateAction<string>>;
  university: string;
  handleUniversityChange: (event: SelectChangeEvent) => void;
  goBack: () => void;
  isStudent: string;
  setIsStudent: React.Dispatch<React.SetStateAction<string>>;
  isRequestOffer: string;
  setIsRequestOffer: React.Dispatch<React.SetStateAction<string>>;
  validation: () => void;
  postSpinner: boolean;
  deleteSpinner: boolean;
  error: ErrorProps;
  universityData: TableCellDataProps[];
  areaData: TableCellDataProps[];
  dropDownData?: TableCellDataProps[];
  setDropDownData: React.Dispatch<
    React.SetStateAction<TableCellDataProps[] | undefined>
  >;
  handleImageUpload: (e: any) => void;
  image?: any;
  openSnackbar: boolean;
  setOpenSnackbar: React.Dispatch<React.SetStateAction<boolean>>;
  snackbarMessage?: string;
  postId?: string;
  editable: boolean;
  setEditable: React.Dispatch<React.SetStateAction<boolean>>;
  deletePost: () => void;
  openDialog: boolean;
  handleOpenDialog: () => void;
  handleCloseDialog: () => void;
  from?: string;
  comment?: string;
  setComment: React.Dispatch<React.SetStateAction<string>>;
  parentId?: string;
  setParentId: React.Dispatch<React.SetStateAction<string>>;
  commentData: ItemsProps[];
  likeComment: (id: string) => void;
  deleteComment: (id: string) => void;
  addComment: () => void;
  username?: string;
  setUsername: React.Dispatch<React.SetStateAction<string | undefined>>;
  listRef: any;
  disable: boolean;
  handleInfo: (e: any, editor: any) => void;
  uploadPlugin: any;
}

export interface ErrorProps {
  postName: string | undefined;
  university: string | undefined;
  info: string | undefined;
  image: string | undefined;
}
