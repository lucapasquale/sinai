import React, { FC } from 'react'
import { Col, Row, Typography } from 'antd'

import { HousingInput, useCalculateHousingEmissionsLazyQuery } from '../../common/apollo/generated'
import { HousingForm } from './components/HousingForm'
import { EmissionsResult } from './components/EmissionsResult'

export const Housing: FC = () => {
  const [calculateEmissions, { data, loading }] = useCalculateHousingEmissionsLazyQuery()

  const onSubmit = (input: HousingInput) => {
    calculateEmissions({ variables: { input } })
  }

  return (
    <>
      <Typography.Title>Housing emissions</Typography.Title>

      <Row align="middle">
        <Col xs={24} sm={24} md={24} lg={12}>
          <HousingForm onFinish={onSubmit} />
        </Col>

        <Col xs={24} sm={24} md={24} lg={12} style={{ textAlign: 'center' }}>
          <EmissionsResult loading={loading} data={data} />
        </Col>
      </Row>
    </>
  )
}
