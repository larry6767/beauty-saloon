import React from 'react'
// local libs

import { BestPricesListWrapper } from './styles'
// types
import type { FC } from 'react'
import type { BestPricesListProps } from './types'
import { BestPricesCard } from './BestPricesCard/BestPricesCard'
import { Slider } from 'src/components/generic/Slider/index'
import { settings } from './settings'

export const BestPricesList: FC<BestPricesListProps> = ({
  data = [],
  renderEmpty = <h2>...</h2>,
}) => {
  if (!data) return <>{renderEmpty}</>

  return (
    <BestPricesListWrapper>
      <Slider
        {...settings}
        items={data.map((item) => {
          return (
            <BestPricesCard
              key={item.img.alt}
              imageSrc={item.img.src}
              imageAlt={item.img.alt}
              header={item.header}
              price={item.price}
              widthImg={100}
              heightImg={100}
            />
          )
        })}
      />
    </BestPricesListWrapper>
  )
}
