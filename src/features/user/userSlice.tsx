import { createSlice } from "@reduxjs/toolkit";

export interface UserState {
  circleName: string;
  isLoggedIn: boolean;
  status: number;
  statusText: string;
}

const initialState: UserState = {
  circleName: "",
  // TODO : 이후 false로 변경
  isLoggedIn: true,
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
      state.status = action.payload?.status;
      state.statusText = action.payload?.statusText;

      if (action.payload?.status === 500) {
        console.log("login error : code 500");
        alert("로그인 실패했습니다.");
      } else if (action.payload?.status === 200) {
        state.isLoggedIn = true;
        state.circleName = action.payload.data?.circle;
      }
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
