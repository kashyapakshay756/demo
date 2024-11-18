import axios from "axios";
import { constant } from "../constant";

// const CancelToken = axios.CancelToken;
// const source = CancelToken.source();

const axiosInstance = axios.create({
  baseURL: constant.baseUrl,
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
});

axiosInstance.interceptors.request.use(
  async (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers = {
        auth: token,
      };
    }
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

// Relogin the user if the token expires
axiosInstance.interceptors.response.use(
  async (response) => response,
  async function (error) {
    if (error?.response?.status === 401) {
      localStorage.removeItem("token");
      window.location.href = "/";
    } else if (error?.response?.status === 422) {
      // console.log({
      //   text:
      //     error?.response?.data?.error?.[
      //       Object.keys(error?.response?.data?.error)[0]
      //     ][0] ?? "Somthing went wrong! Please try again.",
      // });
      window.location.href = "/";
    }
    return Promise.reject(error.response);
  }
);

export { axiosInstance };
