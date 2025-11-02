import { configureStore } from "@reduxjs/toolkit";
import coursesReducer from "./Courses/reducer";
import modulesReducer from "./Courses/[cid]/Modules/reducer";
import accountReducer from "./Account/reducer";

const store = configureStore({
  reducer: { coursesReducer, modulesReducer, accountReducer },
});
export default store;
export type RootState = ReturnType<typeof store.getState>;

export interface User {
  _id: string;
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  email: string;
  dob: string;
  role: "FACULTY" | "STUDENT" | "ADMIN";
  loginId: string;
  section: string;
  lastActivity: string;
  totalActivity: string;
}

export interface AccountState {
  currentUser: User | null;
}
