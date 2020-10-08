import { SET_FLAG } from '../types'

export const setFlag = flag => ({
  type: SET_FLAG,
  payload: {
    flag,
  },
})
