import React from 'react'
// local libs

import { BestPricesListWrapper } from './styles'
// types
import type { FC } from 'react'
import type { BestPricesListProps } from './types'
import { BestPricesCard } from './BestPricesCard/BestPricesCard'
import { Slider } from 'src/components/generic/Slider/index'

export const BestPricesList: FC<BestPricesListProps> = ({
  data = [],
  renderEmpty = <h2>...</h2>,
}) => {
  if (!data) return <>{renderEmpty}</>

  return (
    <BestPricesListWrapper>
      <Slider
        autoplay={false}
        slidesToShow={4}
        responsive={[
          {
            breakpoint: 1440,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true,
            },
          },
        ]}
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
