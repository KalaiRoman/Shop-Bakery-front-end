import { createSlice } from "@reduxjs/toolkit";
import { login_reducer_initialstate } from "../../features/jsonDatas/ReduxInitialStates";

const login_reducer = createSlice({
  name: "login_data",
  initialState: login_reducer_initialstate,
  reducers: {
    loginUser() {},
    logoutUser() {},
  },
});

export const { loginUser, logoutUser } = login_reducer.actions;
export default login_reducer.reducer;
