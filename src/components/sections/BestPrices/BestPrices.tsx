import React from 'react'
import { BestPricesList } from './BestPricesList/BestPricesList'
import { data } from './fixtures'
import {
  BestPricesContentWrapper,
  BestPricesHeader,
  BestPricesHeaderWrapper,
  BestPricesWrapper,
} from './styles'

export const BestPrices = () => {
  return (
    <BestPricesWrapper>
      <BestPricesContentWrapper>
        <BestPricesHeaderWrapper>
          <BestPricesHeader>Лучшие цены</BestPricesHeader>
        </BestPricesHeaderWrapper>

        <BestPricesList data={data} />
      </BestPricesContentWrapper>
    </BestPricesWrapper>
  )
}
