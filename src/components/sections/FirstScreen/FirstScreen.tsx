'use client'

import React, { useEffect, useState } from 'react'
// local libs
import Image from 'next/image'
import { ImageSlider } from 'src/components/generic'
import { items, mobileItems } from './fixtures'

export const FirstScreen = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    setIsMobile(window.screen.width <= 425)
  }, [])

  return (
    <ImageSlider
      heightRatio={isMobile ? '100%' : '35%'}
      items={(isMobile ? mobileItems : items).map((x, i) => (
        <Image
          key={i}
          alt={`slide-${i}`}
          src={x}
          priority
          fill
          style={{ objectFit: 'contain' }}
        />
      ))}
    />
  )
}
