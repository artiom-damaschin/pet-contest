import { combineReducers } from 'redux'

import tempreducer from './temp-reducer'

const rootReducers = combineReducers({
  temp: tempreducer,
})

export default rootReducers
