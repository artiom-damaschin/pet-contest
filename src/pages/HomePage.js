import React, { useState, useEffect } from 'react'
import { Spin, Image, Button } from 'antd'
import {
  HeartTwoTone,
  StarTwoTone,
  CloseCircleTwoTone,
} from '@ant-design/icons'
import { useDispatch, useSelector } from 'react-redux'

import { fetchDoggo, homeInit } from '../redux/actions'
import { getDoggoData } from '../redux/selectors'

function Home() {
  const dispatch = useDispatch()
  const url = useSelector(getDoggoData)

  console.log('dogodata', url)

  useEffect(() => {
    dispatch(homeInit())
    console.log('dispatched home init')
  }, [])

  return (
    <div style={{ width: '100%' }}>
      <h1 className="main-header">Home</h1>
      <div className="btns-container">
        <Button
          className="btn-content-display"
          shape="round"
          icon={<HeartTwoTone twoToneColor="#eb2f96" />}
          style={{ border: '2px solid #eb2f96' }}
          size="large"
        />
        <Button
          className="btn-content-display"
          shape="round"
          icon={<StarTwoTone twoToneColor="#fbb117" />}
          style={{ border: '2px solid #fbb117' }}
          size="large"
          onClick={() => {
            dispatch(fetchDoggo())
          }}
        />
        <Button
          className="btn-content-display"
          shape="round"
          icon={<CloseCircleTwoTone twoToneColor="#B80F0A" />}
          style={{ border: '2px solid #B80F0A' }}
          size="large"
        />
      </div>
      {url ? (
        <Image src={url} width={200} className="position-center" />
      ) : (
        <Spin tip="It's coming! 😎" className="position-center" />
      )}
    </div>
  )
}

export default Home
