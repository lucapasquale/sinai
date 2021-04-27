import React, { FC } from 'react'
import { Col, Row, Typography } from 'antd'

import {
  TransportEmissionsCarInput,
  useCalculateTransportEmissionsLazyQuery,
} from '../../common/apollo/generated'
import { DistanceForm } from './components/DistanceForm'
import { EmissionsResult } from './components/EmissionsResult'

export const Transport: FC = () => {
  const [calculateEmissions, { data, loading }] = useCalculateTransportEmissionsLazyQuery()

  const onSubmit = (car: TransportEmissionsCarInput) => {
    calculateEmissions({
      variables: { input: { car } },
    })
  }

  return (
    <>
      <Typography.Title>Car emissions</Typography.Title>

      <Row align="middle">
        <Col xs={24} sm={24} md={24} lg={12}>
          <DistanceForm onFinish={onSubmit} />
        </Col>

        <Col xs={24} sm={24} md={24} lg={12} style={{ textAlign: 'center' }}>
          <EmissionsResult loading={loading} data={data} />
        </Col>
      </Row>
    </>
  )
}
