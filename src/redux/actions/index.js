import { SET_IMG, FETCH_DOGGO, HOME_INIT } from '../types'

export const setImg = data => ({
  type: SET_IMG,
  payload: {
    data,
  },
})

export const homeInit = () => ({
  type: HOME_INIT,
})

export const fetchDoggo = () => ({
  type: FETCH_DOGGO,
})
