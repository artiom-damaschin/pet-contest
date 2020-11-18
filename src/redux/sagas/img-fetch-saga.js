import { takeEvery, call, put } from 'redux-saga/effects'

import { fetchDoggo } from '../../utils/api'
import { setImg } from '../actions'
import { FETCH_DOGGO } from '../types'

export function* fetchImgSaga() {
  console.log('data')
  const data = yield call(fetchDoggo)

  yield put(setImg(data[0].url))
}

export function* watchFetchImgSaga() {
  yield takeEvery(FETCH_DOGGO, fetchImgSaga)
}
