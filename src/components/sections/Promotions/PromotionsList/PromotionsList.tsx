import React from 'react'
// local libs
import { PromotionsCard } from './PromotionsCard'
import { PromotionsListWrapper } from './styles'
// types
import type { FC } from 'react'
import type { PromotionsListProps } from './types'

export const PromotionsList: FC<PromotionsListProps> = ({
  data = [],
  renderEmpty = <h2>...</h2>,
}) => {
  if (!data) return <>{renderEmpty}</>

  return (
    <PromotionsListWrapper>
      {data.map((item) => {
        return (
          <PromotionsCard
            key={item.image.alt}
            imageSrc={item.image.src}
            imageAlt={item.image.alt}
            header={item.header}
            text={item.text}
            date={item.date}
            kind={item.kind}
            widthImg={100}
            heightImg={100}
          />
        )
      })}
    </PromotionsListWrapper>
  )
}
