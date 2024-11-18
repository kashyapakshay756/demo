import types from "./type";
import { UserReducerProps } from "./interface";

const initialState: UserReducerProps = {
  userData: null,
  token: null,
  isLogin: false,
  dashboard: false,
};

const userReducer = (state: UserReducerProps = initialState, action: any) => {
  switch (action.type) {
    case types.loginSuccess:
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        token: action.payload.token,
        userData: action.payload,
        isLogin: true,
      };
    case types.getDashboard:
      return {
        ...state,
        dashboard: action.payload,
      };
    case types.logout:
      return initialState;
    default:
      return state;
  }
};

export default userReducer;
