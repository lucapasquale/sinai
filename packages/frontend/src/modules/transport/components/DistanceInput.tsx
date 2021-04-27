import { InputNumber, Select } from 'antd'
import React, { FC } from 'react'
import { DistanceUnit, TransportEmissionsCarInput } from '../../../common/apollo/generated'

type Props = {
  carInput: TransportEmissionsCarInput
  setCarInput: (car: TransportEmissionsCarInput) => void
}

export const DistanceInput: FC<Props> = ({ carInput, setCarInput }) => {
  const onAmountChange = (value: number) => {
    setCarInput({ ...carInput, distance: { ...carInput.distance, amount: value } })
  }

  const onUnitChange = (value: DistanceUnit) => {
    setCarInput({ ...carInput, distance: { ...carInput.distance, unit: value } })
  }

  return (
    <div>
      <InputNumber min={0} defaultValue={carInput.distance.amount ?? 0} onChange={onAmountChange} />

      <Select defaultValue={carInput.distance.unit} onChange={onUnitChange}>
        <Select.Option value={DistanceUnit.Km}>Km</Select.Option>
        <Select.Option value={DistanceUnit.Miles}>Miles</Select.Option>
      </Select>
    </div>
  )
}
