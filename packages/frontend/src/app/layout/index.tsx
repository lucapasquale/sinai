import React, { FC } from 'react'
import { Card, Layout as AntdLayout } from 'antd'
import { Header } from './Header'

export const Layout: FC = ({ children }) => {
  return (
    <AntdLayout className="layout">
      <Header />

      <AntdLayout.Content style={{ padding: '50px' }}>
        <Card>{children}</Card>
      </AntdLayout.Content>

      <AntdLayout.Footer style={{ textAlign: 'center' }}>
        Sinai Project - Luca Pasquale
      </AntdLayout.Footer>
    </AntdLayout>
  )
}
