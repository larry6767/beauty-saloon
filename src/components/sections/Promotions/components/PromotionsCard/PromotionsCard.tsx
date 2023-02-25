import React, { FC } from 'react'
import Image from 'next/dist/client/image'
// Types
import type {
  PromotionsCardContentProps,
  PromotionsCardStyledProps,
} from './types'
// Styles
import {
  PromotionsCardContent,
  promotionsCardContentWrapper,
  PromotionsCardDate,
  PromotionsCardHeader,
  promotionsCardImage,
  PromotionsCardText,
  PromotionsCardTextWrapper,
  promotionsCardWrapper,
} from './styles'

export const PromotionsCard: FC<
  PromotionsCardContentProps & PromotionsCardStyledProps
> = ({
  imageSrc,
  imageAlt,
  header,
  text,
  date,
  cardStyles,
  widthImg = 100,
  heightImg = 100,
}) => {
  return (
    <div className={promotionsCardWrapper} card-wrapper={cardStyles}>
      <div className={promotionsCardImage} card-image={cardStyles}>
        <Image
          src={imageSrc}
          alt={imageAlt}
          style={{
            width: `${widthImg}%`,
            height: `${heightImg}%`,
          }}
        />
      </div>
      <div
        className={promotionsCardContentWrapper}
        card-content-wrapper={cardStyles}
      >
        <PromotionsCardContent>
          <PromotionsCardHeader>{header}</PromotionsCardHeader>
          <PromotionsCardTextWrapper>
            <PromotionsCardText>{text}</PromotionsCardText>
          </PromotionsCardTextWrapper>
          <PromotionsCardDate>{date}</PromotionsCardDate>
        </PromotionsCardContent>
      </div>
    </div>
  )
}
