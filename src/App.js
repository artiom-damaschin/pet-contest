import React, { useState, useEffect } from 'react'
import { Spin, Image } from 'antd'

import { fetchDoggo } from './utils/api'

function App() {
  const [url, setUrl] = useState('')

  useEffect(() => {
    const getUrl = async () => {
      const data = await fetchDoggo()

      setUrl(data[0].url)
    }
    getUrl()
  }, [])

  return (
    <div className="App" style={{ height: '100vh', width: '100%' }}>
      {url ? (
        <Image src={url} width={200} className="position-center" />
      ) : (
        <Spin tip="It's coming! 😎" className="position-center" />
      )}
    </div>
  )
}

export default App
