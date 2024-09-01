import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./features/usersSlice";
import filterReducer from "./features/filterSlice";

export const store = configureStore({
  reducer: {
    users: usersReducer,
    filter: filterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
