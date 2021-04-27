import React, { FC } from 'react'
import { Card, Layout as AntdLayout, Menu } from 'antd'
import { Link } from 'react-router-dom'
import './index.css'

export const Layout: FC = ({ children }) => {
  return (
    <AntdLayout className="layout">
      <AntdLayout.Header>
        <Menu theme="dark" mode="horizontal">
          <Menu.Item key="1">
            <Link to="/">Home</Link>
          </Menu.Item>

          <Menu.Item key="2">
            <Link to="/transport">Transportation</Link>
          </Menu.Item>
        </Menu>
      </AntdLayout.Header>

      <AntdLayout.Content style={{ padding: '50px' }}>
        <Card>{children}</Card>
      </AntdLayout.Content>

      <AntdLayout.Footer style={{ textAlign: 'center' }}>
        Sinai Project - Luca Pasquale
      </AntdLayout.Footer>
    </AntdLayout>
  )
}
