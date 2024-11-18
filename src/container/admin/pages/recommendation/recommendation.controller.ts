import { useEffect, useState } from "react";
import moment from "moment";
import { axiosInstance } from "../../../../services/api/api";
import { constant } from "../../../../services/constant";
import {
  RecommendationControllerProps,
  RecommendationProps,
} from "./recommendation.interface";

const RecommendationController = (): RecommendationControllerProps => {
  const [loading, setLoading] = useState<boolean>(false);
  const [search, setSearch] = useState<string>();
  const [filter, setFilter] = useState<RecommendationProps[] | null>(null);
  const [recommendation, setRecommendation] = useState<RecommendationProps[]>(
    []
  );

  useEffect(() => {
    getRecommendation();
  }, []);

  const handleSearch = (value: string) => {
    /* Recommendation search functionality */
    const filterData = recommendation?.filter((item: RecommendationProps) => {
      let search = [
        item?.username,
        item?.type,
        item?.suggestion,
        item?.address,
      ];
      let regex = value?.toString()?.toLowerCase();
      return search.some((item) =>
        item?.toString().toLowerCase().startsWith(regex)
      );
    });
    setSearch(value);
    setFilter(filterData);
  };

  const getRecommendation = async () => {
    /* API call for getting recommendation list */
    try {
      setLoading(true);
      const { data } = await axiosInstance.get(
        `${constant.admin}${constant.getRecommendation}`
      );
      setLoading(false);
      const list = data?.data?.map((item: any) => ({
        id: item?._id,
        username: item?.user_id?.fullName,
        date: moment(item?.createdAt).format("DD/MM/YYYY"),
        type: item?.user_id?.is_student ? "Student" : "Non Student",
        suggestion: item?.suggestion,
        address: item?.address,
      }));
      setRecommendation(list);
    } catch (error) {
      setLoading(false);
    }
  };

  return { loading, search, handleSearch, filter, recommendation };
};

export default RecommendationController;
