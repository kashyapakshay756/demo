import { SyntheticEvent } from "react";
import { TabChangeProps } from "../users/personalInfo/personalInfo.interface";

export interface NoticeboardControllerProps {
  tabValue: number;
  handleTabValueChange: (event: SyntheticEvent, newValue: number) => void;
  tabChange: (index: number) => TabChangeProps;
  onEdit: (id: string) => void;
  onView: (id: string) => void;
  loading: boolean;
  postData: PostDataProps[];
  requestData: RequestDataProps[];
  search?: string;
  handleSearch: (value: string) => void;
  postFilter: PostDataProps[] | null;
  requestFilter: RequestDataProps[] | null;
  onAdd: () => void;
}

export interface PostDataProps {
  serialNo: number;
  id: string;
  title: string;
  userType: string;
  uniArea: string;
}

export interface RequestDataProps {
  id: string;
  serialNo: number;
  fullName: string;
  email: string;
  userType: string;
  uniArea: string;
  phoneNo: string;
}
