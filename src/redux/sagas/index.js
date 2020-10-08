import { all } from 'redux-saga/effects'

import { watchRandomPetFetch } from './random-pet-fetch-saga'

export default function* rootSaga() {
  yield all([watchRandomPetFetch()])
}
