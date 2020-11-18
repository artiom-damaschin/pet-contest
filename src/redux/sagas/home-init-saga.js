import { takeEvery, call } from 'redux-saga/effects'

import { HOME_INIT } from '../types'

import { preFetchDoggosImgSaga } from './pre-fetch-doggos-saga'

export function* initHomeSaga() {
  yield takeEvery(HOME_INIT, function* () {
    yield call(preFetchDoggosImgSaga)
  })
}
