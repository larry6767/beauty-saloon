import { StaticImageData } from 'next/image'

export type BestPricesCardContentProps = {
  imageSrc: string | StaticImageData
  imageAlt: string
  header?: string
  price?: string
}

export type BestPricesCardStyledProps = {
  widthImg?: number
  heightImg?: number
}
