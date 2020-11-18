import { prop } from 'ramda'
import { createSelector } from 'reselect'

const getDoggo = prop('doggo')
const getData = prop('data')

export const getDoggoData = createSelector(getDoggo, getData)

