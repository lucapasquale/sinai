import React, { FC } from 'react'
import { Button, Form, InputNumber, Row, Select, Space } from 'antd'
import {
  ConsumptionUnit,
  DistanceUnit,
  TransportEmissionsCarInput,
} from '../../../common/apollo/generated'

type Props = {
  onFinish: (value: TransportEmissionsCarInput) => any
}

export const DistanceForm: FC<Props> = ({ onFinish }) => {
  const initialValue = {
    distance: { amount: 0, unit: DistanceUnit.Km },
    consumption: { amount: 0, unit: ConsumptionUnit.Lper100Km },
  }

  return (
    <Form initialValues={initialValue} onFinish={onFinish}>
      <Row>
        <Space>
          <Form.Item required label="Distance traveled in a year" name={['distance', 'amount']}>
            <InputNumber min={0} />
          </Form.Item>

          <Form.Item name={['distance', 'unit']}>
            <Select>
              <Select.Option value={DistanceUnit.Km}>Km</Select.Option>
              <Select.Option value={DistanceUnit.Miles}>Miles</Select.Option>
            </Select>
          </Form.Item>
        </Space>
      </Row>

      <Row>
        <Space>
          <Form.Item required label="Average consumption" name={['consumption', 'amount']}>
            <InputNumber min={0} />
          </Form.Item>

          <Form.Item name={['consumption', 'unit']}>
            <Select>
              <Select.Option value={ConsumptionUnit.Lper100Km}>Litres per 100Km</Select.Option>
              <Select.Option value={ConsumptionUnit.Mpg}>MPG</Select.Option>
            </Select>
          </Form.Item>
        </Space>
      </Row>

      <Button type="primary" htmlType="submit">
        Calculate
      </Button>
    </Form>
  )
}
