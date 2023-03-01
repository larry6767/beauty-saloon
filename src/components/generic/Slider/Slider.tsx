'use client'

import React from 'react'
// local libs
import { Carousel } from './styles'
import { settings } from './settings'
// types
import type { FC } from 'react'
import type { SliderProps } from './types'

export const Slider: FC<SliderProps> = ({ items, ...rest }) => {
  return (
    <Carousel {...settings} {...rest}>
      {items}
    </Carousel>
  )
}
