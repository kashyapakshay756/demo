import { SyntheticEvent, useEffect, useState } from "react";
import moment from "moment";
import { useSearchParams, useNavigate } from "react-router-dom";
import { axiosInstance } from "../../../../services/api/api";
import { constant } from "../../../../services/constant";
import { EventListProps } from "./userEvent/userEvent.interface";
import {
  EventProps,
  ShamwariZoneControllerProps,
} from "./shamwariZone.interface";
import {
  getAreaData,
  getEvents,
  getUniversityData,
} from "../../../../services/redux/userData/action";
import { TabChangeProps } from "../users/personalInfo/personalInfo.interface";
import { useAppDispatch } from "../../../../services/redux/controller";

const ShamwariZoneController = (): ShamwariZoneControllerProps => {
  const [search, setSearch] = useState<string>();
  const [tabValue, setTabValue] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);
  const [events, setEvents] = useState<EventProps[] | undefined>();
  const [eventList, setEventList] = useState<EventListProps[]>([]);
  const [eventFilter, setEventFilter] = useState<EventListProps[] | null>(null);
  const [filterData, setFilterData] = useState<EventProps[] | null>(null);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const selectedTabIndex = searchParams.get("selectedTab");
    if (selectedTabIndex !== null) {
      setTabValue(parseInt(selectedTabIndex));
    }
  }, [searchParams]);

  useEffect(() => {
    getEventList();
    getUserEvents();
    dispatch(getUniversityData() as any);
    dispatch(getAreaData() as any);
  }, []);

  const navigation = useNavigate();

  const dispatch = useAppDispatch();

  const handleTabValueChange = (event: SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
    //@ts-ignore
    setSearchParams({ selectedTab: newValue });
    setSearch("");
    setFilterData(null);
    setEventFilter(null);
  };

  const tabChange = (index: number): TabChangeProps => {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  };

  const onAdd = (): void => {
    navigation("/admin/eventInfo");
  };

  const eventSearch = (value: string): void => {
    /* Event search functionality */
    const filterData = events?.filter((item: EventProps) => {
      let search = [item?.title, item?.uniArea, item?.userType];
      let regex = value?.toString()?.toLowerCase();
      return search.some((searchItem) =>
        searchItem?.toString().toLowerCase().startsWith(regex)
      );
    });
    const userEventFilter = eventList?.filter((item: EventListProps) => {
      let search = [item?.title, item?.uniArea, item?.userType];
      let regex = value?.toString()?.toLowerCase();
      return search.some((item) =>
        item?.toString().toLowerCase().startsWith(regex)
      );
    });
    setSearch(value);
    if (filterData) {
      setFilterData(filterData);
    }
    if (userEventFilter) {
      setEventFilter(userEventFilter);
    }
  };

  const getEventList = async () => {
    /* API call for getting events */
    try {
      setLoading(true);
      const { data } = await axiosInstance.get(
        `${constant.admin}${constant.getEvents}`
      );
      setLoading(false);
      dispatch(getEvents(data?.data));
      const list = data?.data?.map((item: any, index: number) => ({
        id: item._id,
        serialNo: index + 1,
        title: item.title,
        date: moment(item?.date).format("DD/MM/YYYY"),
        userType:
          item?.is_student && item?.non_student
            ? "Student/Non Student"
            : item?.is_student
            ? "Student"
            : "Non Student",
        uniArea:
          item?.area_down_id && item?.university_id
            ? ` ${item?.area_down_id?.area_name}/${item?.university_id?.university_name}`
            : item?.area_down_id
            ? item?.area_down_id?.area_name
            : item?.university_id?.university_name,
      }));
      setEvents(list);
    } catch (error) {
      setLoading(false);
    }
  };

  const getUserEvents = async () => {
    /* API call for getting user events */
    try {
      const { data } = await axiosInstance.get(
        `${constant.admin}${constant.getAllUserEvents}`
      );
      const list = data?.data?.map((item: any, index: number) => ({
        id: item?._id,
        serialNo: index + 1,
        title: item?.title,
        date: moment(item?.Date).format("DD/MM/YYYY"),
        userType: item?.user_id?.area_down_id ? "Non Student" : "Student",
        uniArea: item?.user_id?.area_down_id
          ? item?.user_id?.area_down_id?.area_name
          : item?.user_id?.university_id?.university_name,
      }));
      setEventList(list);
    } catch (error) {}
  };

  const onView = (id: string) => {
    navigation(`/admin/${id}/eventInfo`);
  };

  return {
    search,
    handleTabValueChange,
    tabChange,
    tabValue,
    onView,
    loading,
    events,
    eventSearch,
    filterData,
    onAdd,
    eventList,
    eventFilter,
  };
};

export default ShamwariZoneController;
