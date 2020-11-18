import { SET_IMG } from '../types'

const initialState = {
  data: [],
}

const doggoReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_IMG:
      return {
        ...state,
        data: action.payload.data,
      }

    default:
      return state
  }
}

export default doggoReducer
