import { InputNumber, Select } from 'antd'
import React, { FC } from 'react'
import { ConsumptionUnit, TransportEmissionsCarInput } from '../../../common/apollo/generated'

type Props = {
  carInput: TransportEmissionsCarInput
  setCarInput: (car: TransportEmissionsCarInput) => void
}

export const ConsumptionInput: FC<Props> = ({ carInput, setCarInput }) => {
  const onAmountChange = (value: number) => {
    setCarInput({ ...carInput, consumption: { ...carInput.consumption, amount: value } })
  }

  const onUnitChange = (value: ConsumptionUnit) => {
    setCarInput({ ...carInput, consumption: { ...carInput.consumption, unit: value } })
  }

  return (
    <div>
      <InputNumber
        min={0}
        defaultValue={carInput.consumption.amount ?? 0}
        onChange={onAmountChange}
      />

      <Select defaultValue={carInput.consumption.unit} onChange={onUnitChange}>
        <Select.Option value={ConsumptionUnit.Lper100Km}>Litres per 100Km</Select.Option>
        <Select.Option value={ConsumptionUnit.Mpg}>MPG</Select.Option>
      </Select>
    </div>
  )
}
