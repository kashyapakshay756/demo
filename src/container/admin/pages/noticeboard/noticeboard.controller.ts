import { SyntheticEvent, useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { axiosInstance } from "../../../../services/api/api";
import { constant } from "../../../../services/constant";
import { getPostData } from "../../../../services/redux/userData/action";
import {
  NoticeboardControllerProps,
  PostDataProps,
  RequestDataProps,
} from "./noticeboard.interface";
import { TabChangeProps } from "../users/personalInfo/personalInfo.interface";
import { useAppDispatch } from "../../../../services/redux/controller";

const NoticeboardController = (): NoticeboardControllerProps => {
  const [search, setSearch] = useState<string>();
  const [tabValue, setTabValue] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);
  const [postData, setPostData] = useState<PostDataProps[]>([]);
  const [requestData, setRequesetData] = useState<RequestDataProps[]>([]);
  const [postFilter, setPostFilter] = useState<PostDataProps[] | null>(null);
  const [requestFilter, setRequestFilter] = useState<RequestDataProps[] | null>(
    null
  );
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const selectedTabIndex = searchParams.get("selectedTab");
    if (selectedTabIndex !== null) {
      setTabValue(parseInt(selectedTabIndex));
    }
  }, [searchParams]);

  useEffect(() => {
    getPosts();
    getRequest();
  }, []);

  const navigation = useNavigate();

  const dispatch = useAppDispatch();

  const handleSearch = (value: string): void => {
    /* Search functionality */
    const postFilterList = postData.filter((item: PostDataProps) => {
      let search = [item?.title, item?.uniArea, item?.userType];
      let regex = value?.toString()?.toLowerCase();
      return search.some((item) =>
        item?.toString().toLowerCase().startsWith(regex)
      );
    });
    const requestFilterList = requestData.filter((item: RequestDataProps) => {
      let search = [
        item?.fullName,
        item?.email,
        item?.userType,
        item?.uniArea,
        item?.phoneNo,
      ];
      let regex = value?.toString()?.toLowerCase();
      return search.some((item) =>
        item?.toString().toLowerCase().startsWith(regex)
      );
    });
    setSearch(value);
    setPostFilter(postFilterList);
    setRequestFilter(requestFilterList);
  };

  const handleTabValueChange = (event: SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
    setSearchParams({ selectedTab: newValue.toString() });
    setSearch("");
    setPostFilter(null);
    setRequestFilter(null);
  };

  const tabChange = (index: number): TabChangeProps => {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  };

  const onAdd = (): void => {
    navigation("/admin/createpost");
  };

  const onEdit = (id: string): void => {
    navigation(`/admin/${id}/createpost`);
  };

  const onView = (id: string): void => {
    navigation(`/admin/${id}/view/createpost`);
  };

  const getPosts = async () => {
    /* API call for getting posts */
    try {
      setLoading(true);
      const { data } = await axiosInstance.get(
        `${constant.admin}${constant.adminPostInfoGetall}`
      );
      setLoading(false);
      const list = data?.data?.map((item: any, index: number) => ({
        serialNo: index + 1,
        id: item?._id,
        title: item?.post_name,
        userType: item?.is_student ? "Student" : "Non Student",
        uniArea: item?.area_down_name
          ? item?.area_down_name?.area_name
          : item?.university_name?.university_name,
      }));
      setPostData(list);
      dispatch(getPostData(data?.data));
    } catch (error) {
      setLoading(false);
    }
  };

  const getRequest = async () => {
    /* API call for getting request data */
    try {
      const { data } = await axiosInstance.get(
        `${constant.admin}${constant.adminGetAllOfferRequest}`
      );
      const list = data?.data?.map((item: any, index: number) => ({
        id: item?._id,
        serialNo: index + 1,
        fullName: item?.user_id?.fullName,
        email: item?.user_id?.email,
        userType:
          item?.user_id?.is_student === false ? "Non Student" : "Student",
        uniArea: item?.post_id?.university_name
          ? item?.post_id?.university_name?.university_name
          : item?.post_id?.area_down_name?.area_name,
        phoneNo: item?.user_mobile,
      }));
      setRequesetData(list);
    } catch (error) {}
  };

  return {
    tabValue,
    handleTabValueChange,
    tabChange,
    onEdit,
    loading,
    postData,
    requestData,
    search,
    handleSearch,
    postFilter,
    requestFilter,
    onView,
    onAdd,
  };
};

export default NoticeboardController;
