import axios from 'axios'

import { API_KEY } from '../../common/constants/api'

async function fetchDoggo() {
  const { data } = await axios.get(
    'https://api.thedogapi.com/v1/images/search',
    {
      headers: {
        'x-api-key': API_KEY,
      },
    },
  )
  return data
}

export { fetchDoggo }
