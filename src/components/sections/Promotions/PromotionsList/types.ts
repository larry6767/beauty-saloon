import { ReactNode } from 'react'
import { StaticImageData } from 'next/image'
import { PromotionsCardEnum } from './PromotionsCard/types'

type ImageProps = {
  src: string | StaticImageData
  alt: string
}

export type PromotionsDataType = {
  kind: PromotionsCardEnum
  image: ImageProps
  header: string
  text: string
  date: string
}

export type PromotionsListProps = {
  data: Array<PromotionsDataType>
  renderEmpty?: ReactNode
}
