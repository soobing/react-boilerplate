import * as types from '../actions'

// 기본값
const initialState = {
  isTest: false,
  isInited: false,
  musicList: undefined,
  seriesType: undefined,
  choType: undefined,
  FolderType: undefined
}

// 리듀서
const app = (state = initialState, action) => {
  switch (action.type) {
    case types.APP_ACTION_TEST:
      return {
        ...state,
        isTest: action.data
      }
    default:
      return state;
  }
}

export default app;