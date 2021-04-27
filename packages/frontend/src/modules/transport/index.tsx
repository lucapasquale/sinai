import React, { FC, useState } from 'react'
import { Button, Col, Row, Space, Typography } from 'antd'

import {
  ConsumptionUnit,
  DistanceUnit,
  TransportEmissionsCarInput,
  useCalculateTransportEmissionsLazyQuery,
} from '../../common/apollo/generated'
import { DistanceInput } from './components/DistanceInput'
import { ConsumptionInput } from './components/ConsumptionInput'
import Form from 'antd/lib/form/Form'

export const Transport: FC = () => {
  const [carInput, setCarInput] = useState<TransportEmissionsCarInput>({
    distance: { amount: 0, unit: DistanceUnit.Km },
    consumption: { amount: 0, unit: ConsumptionUnit.Lper100Km },
  })

  const [calculateEmissions, { data }] = useCalculateTransportEmissionsLazyQuery()

  const onCalculateClick = () => {
    calculateEmissions({ variables: { input: { car: carInput } } })
  }

  return (
    <>
      <Typography.Title>Car emissions</Typography.Title>

      <Row>
        <Col span={12}>
          <Form>
            <DistanceInput carInput={carInput} setCarInput={setCarInput} />
            <ConsumptionInput carInput={carInput} setCarInput={setCarInput} />

            <Button block onClick={onCalculateClick}>
              Calculate
            </Button>
          </Form>
        </Col>

        {data && (
          <Col span={12} style={{ textAlign: 'center' }}>
            <Typography.Text>Total emissions: </Typography.Text>

            <Typography.Title level={4}>
              {data.calculateTransportEmissions.totalAmount}
            </Typography.Title>

            <Typography.Text>kg of CO2</Typography.Text>
          </Col>
        )}
      </Row>
    </>
  )
}
