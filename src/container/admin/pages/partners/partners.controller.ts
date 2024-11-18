import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { axiosInstance } from "../../../../services/api/api";
import { constant } from "../../../../services/constant";
import {
  PartnersControllerProps,
  PartnersDataProps,
} from "./partners.interface";

const PartnersController = (): PartnersControllerProps => {
  const [loading, setLoading] = useState<boolean>(false);
  const [partnersData, setPartnersData] = useState<PartnersDataProps[]>();
  const [filterData, setFilterData] = useState<
    PartnersDataProps[] | null | undefined
  >(null);
  const [search, setSearch] = useState<string>();

  useEffect(() => {
    getPartners();
  }, []);

  const navigation = useNavigate();

  const onView = (id: string): void => {
    navigation(`/admin/${id}/partnerprofile`);
  };

  const partnerSearch = (value: string): void => {
    /* Partner search functionality */
    const filterData = partnersData?.filter((item: PartnersDataProps) => {
      let search = [item?.businessName, item?.email, item?.area];
      let regex = search?.toString()?.toLowerCase();
      return regex?.includes(value?.toLowerCase());
    });
    setSearch(value);
    setFilterData(filterData);
  };

  const getPartners = async () => {
    /* API call for getting partner list */
    try {
      setLoading(true);
      const { data } = await axiosInstance.get(
        `${constant.admin}${constant.adminGetAllPartners}`
      );
      setLoading(false);
      const list = data?.data?.map((item: any, index: number) => ({
        id: item?._id,
        serialNo: index + 1,
        businessName: item?.business_name,
        email: item?.business_email,
        totalAmount: `\u00A3 ${item?.amount?.toString()}`,
        area: item?.sector_Id?.sector_name,
      }));
      setPartnersData(list);
    } catch (error) {
      setLoading(false);
    }
  };

  return { search, onView, loading, partnersData, filterData, partnerSearch };
};

export default PartnersController;
