'use client'

import React, { useEffect, useState } from 'react'
// local libs
import Image from 'next/image'
import { Slider } from 'src/components/generic'
import { items, mobileItems } from './fixtures'

export const FirstScreen = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    setIsMobile(window.screen.width <= 425)
  }, [])

  if (!isMobile) {
    return (
      <Slider
        heightRatio="35%"
        items={items.map((x) => (
          <Image
            key={x}
            alt={x}
            src={x}
            fill
            style={{ objectFit: 'contain' }}
          />
        ))}
      />
    )
  }
  return (
    <Slider
      heightRatio="100%"
      items={mobileItems.map((x) => (
        <Image key={x} alt={x} src={x} fill style={{ objectFit: 'contain' }} />
      ))}
    />
  )
}
