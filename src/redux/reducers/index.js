import { combineReducers } from 'redux'

import doggoReducer from './doggo-reducer'

const rootReducers = combineReducers({
  doggo: doggoReducer,
})

export default rootReducers
