import { createSlice, CaseReducer, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  userId: string;
  message: string;
  status: "Error" | "Logged" | "Not-Logged";
}

const initialState: UserState = {
  userId: "",
  message: "",
  status: "Not-Logged",
};

const login: CaseReducer<UserState, PayloadAction<string>> = (
  state,
  action
) => {
  state.userId = action.payload;
  state.status = "Logged";
};

const failed: CaseReducer<UserState, PayloadAction<string>> = (
  state,
  action
) => {
  state.message = action.payload;
  state.status = "Error";
};

export const userSlice = createSlice({
  name: "userData",
  initialState,
  reducers: {
    login,
    failed,
  },
});

export const userSliceActions = userSlice.actions;

export default userSlice.reducer;
