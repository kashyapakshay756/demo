export interface UsersControllerProps {
  onView: (id: string) => void;
  loading: boolean;
  userData: UserDataProps[];
  search?: string;
  filterData: UserDataProps[] | null;
  userSearch: (value: string) => void;
}

export interface UserDataProps {
  id: string;
  serialNo: number;
  fullName: string;
  email: string;
  type: string;
  area: string;
}
