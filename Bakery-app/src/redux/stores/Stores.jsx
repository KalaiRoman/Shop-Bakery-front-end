import indexReducer from "../reducers";
import {configureStore} from "@reduxjs/toolkit";
const Store = configureStore({
  reducer: indexReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default Store;
