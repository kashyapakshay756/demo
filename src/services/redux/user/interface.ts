export interface UserReducerProps {
  userData: UserDataProps[] | null;
  token: string | null;
  isLogin: boolean;
  dashboard: boolean;
}

export interface UserDataProps {
  otp: number;
  is_otp_verified: boolean;
  is_deleted: number;
  _id: string;
  name: string;
  email: string;
  password: string;
  mobile_number: number;
  image: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
  token: string;
}
