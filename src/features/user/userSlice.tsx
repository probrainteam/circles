import { createSlice } from "@reduxjs/toolkit";

export interface UserState {
  circleName: string;
  isLoggedIn: boolean;
  status: number;
  statusText: string;
}

const initialState: UserState = {
  circleName: "",
  isLoggedIn: false,
  status: 0,
  statusText: "loading",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // login
    login: (state, action) => {},
    loginSuccess: (state, action) => {
      console.log(action);
      state.status = action.payload;
      state.statusText = action.payload?.statusText ?? "Success";
      state.isLoggedIn = true;
      // state.circleName = action.payload.circleName;
    },
    loginError: (state, action) => {
      state.status = action.payload ?? 500;
      state.statusText = action.payload?.statusText ?? "Network Error";
    },

    // logout
    logout: (state) => {
      return {
        ...state,
        userData: {},
        isLoggedIn: false,
      };
    },
    logoutSuccess: (state, action) => {
      state.status = action.payload?.status;
      state.statusText = action.payload?.statusText ?? "Success";
    },
    logoutError: (state, action) => {
      state.status = action.payload?.status ?? 500;
      state.statusText = action.payload?.statusText ?? "Network Error";
    },
  },
});

export const userActions = userSlice.actions;
export default userSlice.reducer;
