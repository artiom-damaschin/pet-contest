import { all, call } from 'redux-saga/effects'

import { initHomeSaga } from './home-init-saga'
import { watchFetchImgSaga } from './img-fetch-saga'

export default function* rootSaga() {
  yield all([call(initHomeSaga), call(watchFetchImgSaga)])
}
