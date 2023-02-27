import { ReactNode } from 'react'
import { StaticImageData } from 'next/image'

type ImageProps = {
  src: string | StaticImageData
  alt: string
}

export type PromotionsDataType = {
  kind: 'big-card' | 'regular'
  image: ImageProps
  header: string
  text: string
  date: string
}

export type PromotionsListProps = {
  data: Array<PromotionsDataType>
  renderEmpty?: ReactNode
}
