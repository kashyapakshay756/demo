export interface PartnersControllerProps {
  search?: string;
  onView: (id: string) => void;
  loading: boolean;
  partnersData?: PartnersDataProps[];
  filterData?: PartnersDataProps[] | null;
  partnerSearch: (value: string) => void;
}

export interface PartnersDataProps {
  id: string;
  serialNo: number;
  businessName: string;
  email: string;
  totalAmount: string;
  area: string;
}
