import React, { FC } from 'react'
import { PromotionsCard } from 'src/components/sections/Promotions/components/PromotionsCard'
import { PromotionsListWrapper } from './styles'
import { PromotionsListProps } from './types'

export const PromotionsList: FC<PromotionsListProps> = ({
  data = [],
  renderEmpty = <h2>...</h2>,
}) => {
  if (!data) return <>{renderEmpty}</>

  return (
    <PromotionsListWrapper>
      {data.map((item, index) => {
        return (
          <PromotionsCard
            key={item.image.alt}
            // Data
            imageSrc={item.image.src}
            imageAlt={item.image.alt}
            header={item.header}
            text={item.text}
            date={item.date}
            // Styles
            cardStyles={index + 1 !== 1 ? 'regular' : 'bigCard'}
            widthImg={100}
            heightImg={100}
          />
        )
      })}
    </PromotionsListWrapper>
  )
}
