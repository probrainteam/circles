import { all, fork } from "redux-saga/effects";
import userSaga from "features/user/userSaga";

export default function* rootSaga() {
  yield all([fork(userSaga)]);
}
