import { StaticImageData } from 'next/image'

export type PromotionsCardContentProps = {
  imageSrc: string | StaticImageData
  imageAlt: string
  header?: string
  text?: string
  date?: string
}

export type PromotionsCardStyledProps = {
  cardStyles: 'bigCard' | 'regular'
  widthImg?: number
  heightImg?: number
}
