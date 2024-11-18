import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { axiosInstance } from "../../../../services/api/api";
import { constant } from "../../../../services/constant";
import { getUserData } from "../../../../services/redux/userData/action";
import { useAppDispatch } from "../../../../services/redux/controller";
import { UserDataProps, UsersControllerProps } from "./users.interface";

const UsersController = (): UsersControllerProps => {
  const [loading, setLoading] = useState<boolean>(false);
  const [userData, setUserData] = useState<UserDataProps[]>([]);
  const [filterData, setFilterData] = useState<UserDataProps[] | null>(null);
  const [search, setSearch] = useState<string>();
  const navigation = useNavigate();

  const dispatch = useAppDispatch();

  useEffect(() => {
    getUsers();
  }, []);

  const onView = (id: string): void => {
    navigation(`/admin/${id}/personalinfo`);
  };

  const userSearch = (value: string): void => {
    /* User search functionality */
    const filterData = userData.filter((item: UserDataProps) => {
      let search = [item?.fullName, item?.email, item?.type, item?.area];
      let regex = value?.toString()?.toLowerCase();
      return search.some((item) =>
        item?.toString().toLowerCase().startsWith(regex)
      );
    });
    setSearch(value);
    setFilterData(filterData);
  };

  const getUsers = async () => {
    /* API call for getting user list */
    try {
      setLoading(true);
      const { data } = await axiosInstance.get(
        `${constant.admin}${constant.adminGetAllUsers}`
      );
      setLoading(false);
      const list = data?.data.map((item: any, index: number) => ({
        id: item?._id,
        serialNo: index + 1,
        fullName: item?.fullName,
        email: item?.email,
        type: item?.is_student ? "Student" : "Non Student",
        area: item?.university_id
          ? item?.university_id?.university_name
          : item?.area_down_id
          ? item?.area_down_id?.area_name
          : "-",
      }));
      dispatch(getUserData(data?.data));
      setUserData(list);
    } catch (error) {
      setLoading(false);
    }
  };

  return { onView, loading, userData, filterData, userSearch, search };
};

export default UsersController;
