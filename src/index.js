import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'
import { AppProvider } from './common/providers'

import 'sanitize.css'
import 'antd/dist/antd.css'
import './common/styles'

ReactDOM.render(
  <AppProvider>
    <App />
  </AppProvider>,
  document.getElementById('root'),
)
