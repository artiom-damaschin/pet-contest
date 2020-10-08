import { takeEvery } from 'redux-saga/effects'

function* randomPetFetch() {
  // logic...
}

export function* watchRandomPetFetch() {
  yield takeEvery('YOUR_ACTION', randomPetFetch)
}
