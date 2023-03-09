'use client'

import React from 'react'
import { Slider } from '@/components/generic'
import { videoItems } from './fixtures'
import { responsive } from './responsive-settings'
import { Video } from './video-element'
import { ReviewContainer } from './styles'

export function Reviews() {
  return (
    <ReviewContainer>
      <Slider
        dots={true}
        infinite={true}
        speed={500}
        autoplay={false}
        arrows={false}
        // centerMode={true}
        responsive={responsive}
        items={videoItems.map((x, i) => (
          <Video key={i} url={x} />
        ))}
      />
    </ReviewContainer>
  )
}
