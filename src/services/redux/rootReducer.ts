import { combineReducers } from "redux";
import userReducer from "./user/reducer";
import userDataReducer from "./userData/reducer";

const rootReducer = combineReducers({ userReducer, userDataReducer });

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
