import React from 'react'
import { Link } from 'react-router-dom'
import { Layout, Menu } from 'antd'
import { routes } from '../../constants/routes'

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
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['/']}>
        {routes.map(({ path, title }) => {
          return (
            <Menu.Item key={path}>
              <Link to={path}>{title}</Link>
            </Menu.Item>
          )
        })}
      </Menu>
    </Sider>
  )
}

export default SideBar
