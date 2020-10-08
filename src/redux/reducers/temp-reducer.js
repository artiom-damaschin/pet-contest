import { SET_FLAG } from '../types'

const initialState = {
  flag: true,
}

const tempReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FLAG:
      return {
        ...state,
        flag: action.payload.flag,
      }

    default:
      return state
  }
}

export default tempReducer
