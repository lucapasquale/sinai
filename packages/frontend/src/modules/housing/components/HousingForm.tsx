import React, { FC } from 'react'
import { Button, Form, InputNumber, Row, Select, Space } from 'antd'
import { EnergyUnit, HousingInput, VolumeUnit } from '../../../common/apollo/generated'

type Props = {
  onFinish: (value: HousingInput) => any
}

export const HousingForm: FC<Props> = ({ onFinish }) => {
  const initialValue = {
    residentsCount: 1,
    electricity: { amount: 0, unit: EnergyUnit.KWh },
    fuelOil: { amount: 0, unit: VolumeUnit.Gallons },
    lpg: { amount: 0, unit: VolumeUnit.Gallons },
    naturalGas: { amount: 0, unit: EnergyUnit.KWh },
  } as HousingInput

  return (
    <Form initialValues={initialValue} onFinish={onFinish}>
      <Form.Item required label="Number of residents" name="residentsCount">
        <InputNumber min={1} />
      </Form.Item>

      <Row>
        <Space>
          <Form.Item required label="Electricity used in a year" name={['electricity', 'amount']}>
            <InputNumber min={0} />
          </Form.Item>

          <Form.Item name={['electricity', 'unit']}>
            <Select>
              <Select.Option value={EnergyUnit.KWh}>kWh</Select.Option>
              <Select.Option value={EnergyUnit.Btu}>BTU</Select.Option>
              <Select.Option value={EnergyUnit.Therm}>Therm</Select.Option>
            </Select>
          </Form.Item>
        </Space>
      </Row>

      <Row>
        <Space>
          <Form.Item required label="Consumption of fuel oil" name={['fuelOil', 'amount']}>
            <InputNumber min={0} />
          </Form.Item>

          <Form.Item name={['fuelOil', 'unit']}>
            <Select>
              <Select.Option value={VolumeUnit.Gallons}>Gallons</Select.Option>
              <Select.Option value={VolumeUnit.Litres}>Litres</Select.Option>
            </Select>
          </Form.Item>
        </Space>
      </Row>

      <Row>
        <Space>
          <Form.Item required label="Consumption of LPG" name={['lpg', 'amount']}>
            <InputNumber min={0} />
          </Form.Item>

          <Form.Item name={['lpg', 'unit']}>
            <Select>
              <Select.Option value={VolumeUnit.Gallons}>Gallons</Select.Option>
              <Select.Option value={VolumeUnit.Litres}>Litres</Select.Option>
            </Select>
          </Form.Item>
        </Space>
      </Row>

      <Row>
        <Space>
          <Form.Item required label="Consumption of natural gas" name={['naturalGas', 'amount']}>
            <InputNumber min={0} />
          </Form.Item>

          <Form.Item name={['naturalGas', 'unit']}>
            <Select>
              <Select.Option value={EnergyUnit.KWh}>kWh</Select.Option>
              <Select.Option value={EnergyUnit.Btu}>BTU</Select.Option>
              <Select.Option value={EnergyUnit.Therm}>Therm</Select.Option>
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
