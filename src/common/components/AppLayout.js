import React from 'react'
import { Layout } from 'antd'
import { Switch, Route } from 'react-router-dom'


import { routes } from '../constants/routes'

const { Content, Footer } = Layout

const AppLayout = () => {
  return (
    <Layout style={{padding: "0 2rem"}}>
      <Content>
        <Switch>
          {routes.map(route => {
            return <Route key={route.path} {...route} />
          })}
        </Switch>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Just a simple Footer.</Footer>
    </Layout>
  )
}

export default AppLayout
