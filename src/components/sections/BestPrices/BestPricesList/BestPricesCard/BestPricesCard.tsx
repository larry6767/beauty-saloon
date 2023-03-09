import React, { FC } from 'react'
import Image from 'next/image'
// local libs
import {
  BestPricesCardButton,
  BestPricesCardContent,
  BestPricesCardContentWrapper,
  BestPricesCardHeader,
  BestPricesCardImage,
  BestPricesCardPrice,
  BestPricesCardPriceWrapper,
  BestPricesCardWrapper,
} from './styles'
// types
import type {
  BestPricesCardContentProps,
  BestPricesCardStyledProps,
} from './types'

export const BestPricesCard: FC<
  BestPricesCardContentProps & BestPricesCardStyledProps
> = ({ imageSrc, imageAlt, widthImg, heightImg, header, price }) => {
  return (
    <BestPricesCardWrapper>
      <BestPricesCardImage>
        <Image
          src={imageSrc}
          alt={imageAlt}
          style={{
            width: `${widthImg}%`,
            height: `${heightImg}%`,
          }}
        />
      </BestPricesCardImage>
      <BestPricesCardContentWrapper>
        <BestPricesCardContent>
          <BestPricesCardHeader>{header}</BestPricesCardHeader>
          <BestPricesCardPriceWrapper>
            <BestPricesCardPrice>{price}</BestPricesCardPrice>
          </BestPricesCardPriceWrapper>
          <BestPricesCardButton>оставить заявку</BestPricesCardButton>
        </BestPricesCardContent>
      </BestPricesCardContentWrapper>
    </BestPricesCardWrapper>
  )
}
