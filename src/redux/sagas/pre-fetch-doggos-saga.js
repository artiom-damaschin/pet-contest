import { call, all } from 'redux-saga/effects'

import { fetchDoggo } from '../../utils/api'

// logic for multiple lfetch
export function* preFetchDoggosImgSaga() {
  const [photo1, photo2] = yield all([call(fetchDoggo), call(fetchDoggo)])

  console.log({ photo1, photo2 })
}
