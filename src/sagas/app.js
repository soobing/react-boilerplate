import { takeEvery, put, call } from 'redux-saga/effects';
import * as types from '../actions/index';

export function* initApp(action) {
  // try {
  //   // const data = yield call(Api.fetchUser, action.payload.url)]
  //   const data = { isInitialized: false };
  //   yield put({ type: types.APP_INIT_REQUEST_SUCCESS, data });
  // } catch (error) {
  //   yield put({ type: types.APP_INIT_REQUEST_FAILED, error })
  // }
  // console.log('saga initApp', action)

  fetch('https://api.github.com/orgs/nodejs')
    .then(function (response) {
      console.log('saga initApp 1', response);
    })
    .then(function (myJson) {
      console.log('saga initApp 2', JSON.stringify(myJson));
    });
}

export function* getUserInfo(action) {
  console.log('saga getUserInfo')
}
export default function* appRootSaga() {
  yield takeEvery(types.APP_INIT_REQUEST, initApp) // takeEvery vs takeLatest
  yield takeEvery(types.APP_USERINFO_REQUEST, getUserInfo)
}