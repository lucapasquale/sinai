import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import { Layout as AntdLayout, Menu } from 'antd'

export const Header: FC = () => {
  return (
    <AntdLayout.Header>
      <Menu theme="dark" mode="horizontal">
        <Menu.Item key="/">
          <Link to="/">Home</Link>
        </Menu.Item>

        <Menu.Item key="/transport">
          <Link to="/transport">Car emissions</Link>
        </Menu.Item>

        <Menu.Item key="/housing">
          <Link to="/housing">Housing emissions</Link>
        </Menu.Item>
      </Menu>
    </AntdLayout.Header>
  )
}
