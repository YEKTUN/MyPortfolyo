import { configureStore } from "@reduxjs/toolkit";
import SendMessageSlice from "./SendMessageSlice";

export const store = configureStore({
  reducer: {
    sendMessage: SendMessageSlice,
  },
});


export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
