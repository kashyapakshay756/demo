import types from "./type";

const loginSuccess = (payload: any) => ({
  type: types.loginSuccess,
  payload,
});

const getDashboard = (payload: any) => ({
  type: types.getDashboard,
  payload,
});

const logout = () => ({
  type: types.logout,
});

export { loginSuccess, logout, getDashboard };
