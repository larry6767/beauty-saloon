'use client'

import React from 'react'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { Carousel, Wrap } from './styles'
// types
import type { Settings } from 'react-slick'
import type { FC } from 'react'
import type { SliderProps } from './types'

export const Slider: FC<SliderProps> = ({ items, heightRatio }) => {
  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  }

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
