import { ReactNode } from 'react'
import { StaticImageData } from 'next/image'

type ImageProps = {
  src: string | StaticImageData
  alt: string
}

export type BestPricesDataType = {
  img: ImageProps
  header: string
  price: string
}

export type BestPricesListProps = {
  data: Array<BestPricesDataType>
  renderEmpty?: ReactNode
}
