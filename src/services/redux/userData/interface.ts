import { TableCellDataProps } from "../../../component/customTable/customTable.interface";

export interface UserDataReducerProps {
  users: UserDataProps[] | null;
  posts: object[] | null;
  university: TableCellDataProps[] | null;
  area: TableCellDataProps[] | null;
  events: EventProps[] | null;
}

export interface UserDataProps {
  otp: number;
  is_otp_verified: boolean;
  is_deleted: number;
  _id: string;
  fullName: string;
  email: string;
  password: string;
  age: string;
  latitude: number;
  gender: string;
  longitude: number;
  is_student: boolean;
  createdAt: string;
  updatedAt: string;
  __v: number;
  distance: number;
  user_profile: string;
  university_id?: {
    _id: string;
    university_name: string;
    email: string;
  };
  area_down_id?: {
    _id: string;
    area_name: string;
  };
}

export interface PartnerDataProps {
  address: {
    Address1: string;
    Address2: string;
    Address3: string;
  };
  is_deleted: number;
  otp: number;
  is_otp_verified: boolean;
  average_price: number;
  _id: string;
  business_name: string;
  director: string;
  owner_surname: string;
  contact_nominated: string;
  limited_company_name: string;
  opening_time: string;
  closing_time: string;
  type_your_cuisine: string;
  post_code: string;
  town: string;
  country: string;
  business_phone_number: number;
  business_email: string;
  password: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
  business_logo: string;
  business_image: string;
  sector_Id: SectorProps;
  status: string;
  payment_Id: string;
  payment_method_id: string;
  payment_created_At: string;
  end_date_of_subscription: string;
  voucher_cost: number;
  voucher_vat: number;
  latitude: number;
  longitude: number;
  voucher_credit: number;
  device_token: string;
  amount: number;
}

export interface SectorProps {
  _id: string;
  sector_name: string;
  is_deleted: number;
  createdAt: string;
  updatedAt: string;
  __v: number;
}
export interface EventProps {
  is_deleted: number;
  _id: string;
  title: string;
  university_id: UniversityProps;
  area_down_id: AreaProps;
  info: string;
  is_student: boolean;
  non_student: boolean;
  image: string;
  date: string;
  time: string;
  address: string;
  number_of_tickets_available: string;
  price_per_ticket: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
  payments: PaymentProps[];
}

export interface PaymentProps {
  _id: string;
  user_id: string;
  status: string;
  payment_Id: string;
  createdAt: string;
  createdBy: string;
}

export interface AreaProps {
  _id: string;
  area_name: string;
}

export interface UniversityProps {
  _id: string;
  university_name: string;
  email: string;
}
