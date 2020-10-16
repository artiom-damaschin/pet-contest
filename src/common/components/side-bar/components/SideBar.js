import React from 'react'
import { Link } from 'react-router-dom'
import { Layout, Menu } from 'antd'
import { routes } from '../../../constants/routes'

const { Sider } = Layout

function SideBar() {
  return (
    <Sider
      style={{
        overflow: 'auto',
        height: '100vh',
        left: 0,
      }}
    >
      <div className="logo" />
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['2']}>
        {routes.map(route => {
          return (
            <Menu.Item key={route.path}>
              <Link to={route.path}>{route.title}</Link>
            </Menu.Item>
          )
        })}
      </Menu>
    </Sider>
  )
}

export default SideBar
