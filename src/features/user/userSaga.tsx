import { PayloadAction } from "@reduxjs/toolkit";
import { AxiosResponse } from "axios";
import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import { onLogin } from "api/auth";
import { userActions } from "./userSlice";
import { LoginInputData } from "types/authType";

function* authUser(action: PayloadAction<LoginInputData>) {
  try {
    const response: AxiosResponse = yield call(onLogin, {
      ...action.payload,
    });
    yield put(userActions.loginSuccess(response));
  } catch (e: any) {
    yield put(userActions.loginError(e.response));
    yield alert("로그인 실패");
  }
}

function* watchAuthUser() {
  yield takeEvery(userActions.login.type, authUser);
}

export default function* userSaga() {
  yield all([fork(watchAuthUser)]);
}
