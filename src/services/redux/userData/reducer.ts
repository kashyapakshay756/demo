import types from "./type";
import { UserDataReducerProps } from "./interface";

const initialState: UserDataReducerProps = {
  users: null,
  posts: null,
  university: null,
  area: null,
  events: null,
};

const userDataReducer = (
  state: UserDataReducerProps = initialState,
  action: any
) => {
  switch (action.type) {
    case types.getUsers:
      return {
        ...state,
        users: action.payload,
      };
    case types.getEvents:
      return {
        ...state,
        events: action.payload,
      };
    case types.getPosts:
      return {
        ...state,
        posts: action.payload,
      };
    case types.getUniversity:
      return {
        ...state,
        university: action.payload,
      };
    case types.getArea:
      return {
        ...state,
        area: action.payload,
      };
    default:
      return state;
  }
};

export default userDataReducer;
