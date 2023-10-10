import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./taskSlice";
import userReducer from "./userSlice";
import todoTaskReducer from "./todoSlice";

const appStore = configureStore({
  reducer: {
    task: taskReducer,
    user: userReducer,
    todo: todoTaskReducer,
  },
});

export default appStore;
