import { Layout } from 'antd'
import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import { SideBar } from './common/components/side-bar'
import AppLayout from './common/components/AppLayout'

function App() {
  return (
    <Router>
      <Layout>
        <SideBar />
        <AppLayout />
      </Layout>
    </Router>
  )
}

export default App
