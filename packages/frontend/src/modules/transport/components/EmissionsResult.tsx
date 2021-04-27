import { Spin, Typography } from 'antd'
import React, { FC } from 'react'
import { CalculateTransportEmissionsQuery } from '../../../common/apollo/generated'

type Props = {
  loading: boolean
  data: CalculateTransportEmissionsQuery | undefined
}

export const EmissionsResult: FC<Props> = ({ loading, data }) => {
  if (loading) {
    return <Spin size="large" />
  }

  if (!data) {
    return null
  }

  return (
    <>
      <Typography.Title level={4}>Total emissions: </Typography.Title>

      <Typography.Title level={3} style={{ marginTop: 0 }}>
        {data.calculateTransportEmissions.totalAmount.toFixed(3)}
      </Typography.Title>

      <Typography.Text>kg of CO2</Typography.Text>
    </>
  )
}
