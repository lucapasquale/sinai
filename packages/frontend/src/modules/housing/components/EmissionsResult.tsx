import React, { FC } from 'react'
import { Space, Spin, Typography } from 'antd'
import { CalculateHousingEmissionsQuery } from '../../../common/apollo/generated'

type Props = {
  loading: boolean
  data: CalculateHousingEmissionsQuery | undefined
}

export const EmissionsResult: FC<Props> = ({ loading, data }) => {
  if (loading) {
    return <Spin size="large" />
  }

  if (!data) {
    return null
  }

  return (
    <Space direction="vertical" size="large">
      <div>
        <Typography.Title level={4}>Total emissions:</Typography.Title>

        <Typography.Title level={3} style={{ marginTop: 0 }}>
          {data.calculateHousingEmissions.totalAmount.toFixed(3)}
        </Typography.Title>

        <Typography.Text>kg of CO2</Typography.Text>
      </div>

      <div>
        <Typography.Title level={4}>Emissions per person:</Typography.Title>

        <Typography.Title level={3} style={{ marginTop: 0 }}>
          {data.calculateHousingEmissions.amountPerPerson.toFixed(3)}
        </Typography.Title>

        <Typography.Text>kg of CO2</Typography.Text>
      </div>
    </Space>
  )
}
