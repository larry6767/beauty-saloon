'use client'

import React from 'react'
// local libs
import { Carousel, Wrap } from './styles'
import { settings } from './settings'
// types
import type { FC } from 'react'
import type { ImageSliderProps } from './types'

export const ImageSlider: FC<ImageSliderProps> = ({ items, heightRatio }) => {
  return (
    <Carousel {...settings}>
      {items.map((item, i) => (
        <Wrap key={i} heightRatio={heightRatio}>
          {item}
        </Wrap>
      ))}
    </Carousel>
  )
}
