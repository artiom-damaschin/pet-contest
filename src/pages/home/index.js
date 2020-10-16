import React, { useState, useEffect } from 'react'
import { Layout, Spin, Image } from 'antd'
import Button from '../../common/components/buttons'

import { fetchDoggo } from '../../utils/api'

function Home() {
  const [url, setUrl] = useState('')

  useEffect(() => {
    const getUrl = async () => {
      const data = await fetchDoggo()

      setUrl(data[0].url)
    }
    getUrl()
  }, [])
  return (
    <div className="App" style={{ width: '100%' }}>
      <h1>Home</h1>
      {url ? (
        <Image src={url} width={200} className="position-center" />
      ) : (
        <Spin tip="It's coming! 😎" className="position-center" />
      )}
    </div>
  )
}

export default Home
