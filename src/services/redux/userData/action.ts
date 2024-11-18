import { axiosInstance } from "../../api/api";
import { constant } from "../../constant";
import type from "./type";

export const getUserData = (payload: any) => ({
  type: type.getUsers,
  payload,
});

export const getPostData = (payload: any) => ({
  type: type.getPosts,
  payload,
});

export const getUniversity = (payload: any) => ({
  type: type.getUniversity,
  payload,
});

export const getArea = (payload: any) => ({
  type: type.getArea,
  payload,
});

export const getEvents = (payload: any) => ({
  type: type.getEvents,
  payload,
});

export const getUniversityData = () => {
  /* API call for getting university data */
  return async (dispatch: any) => {
    try {
      const { data } = await axiosInstance.get(
        `${constant.admin}${constant.universityGetallAdmin}`
      );
      const list = data?.data?.map((item: any) => ({
        id: item?._id,
        title: item?.university_name,
      }));
      dispatch(getUniversity(list));
    } catch (error) {}
  };
};

export const getAreaData = () => {
  /* API call for getting area data */
  return async (dispatch: any) => {
    try {
      const { data } = await axiosInstance.get(
        `${constant.admin}${constant.areaGetallAdmin}`
      );
      const list = data?.data?.map((item: any) => ({
        id: item?._id,
        title: item?.area_name,
      }));
      dispatch(getArea(list));
    } catch (error) {}
  };
};
