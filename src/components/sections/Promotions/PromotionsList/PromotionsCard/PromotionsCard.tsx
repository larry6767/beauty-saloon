import React, { FC } from 'react'
import Image from 'next/dist/client/image'
// local libs
import {
  PromotionsCardContent,
  PromotionsCardContentWrapper,
  PromotionsCardDate,
  PromotionsCardHeader,
  PromotionsCardImage,
  PromotionsCardText,
  PromotionsCardTextWrapper,
  PromotionsCardWrapper,
} from './styles'
// types
import type {
  PromotionsCardContentProps,
  PromotionsCardStyledProps,
} from './types'

export const PromotionsCard: FC<
  PromotionsCardContentProps & PromotionsCardStyledProps
> = ({
  imageSrc,
  imageAlt,
  header,
  text,
  date,
  kind,
  widthImg = 100,
  heightImg = 100,
}) => {
  return (
    <PromotionsCardWrapper data-kind-wrapper={kind}>
      <PromotionsCardImage data-kind-image={kind}>
        <Image
          src={imageSrc}
          alt={imageAlt}
          style={{
            width: `${widthImg}%`,
            height: `${heightImg}%`,
          }}
        />
      </PromotionsCardImage>
      <PromotionsCardContentWrapper data-kind-content-wrapper={kind}>
        <PromotionsCardContent>
          <PromotionsCardHeader>{header}</PromotionsCardHeader>
          <PromotionsCardTextWrapper>
            <PromotionsCardText>{text}</PromotionsCardText>
          </PromotionsCardTextWrapper>
          <PromotionsCardDate>{date}</PromotionsCardDate>
        </PromotionsCardContent>
      </PromotionsCardContentWrapper>
    </PromotionsCardWrapper>
  )
}
