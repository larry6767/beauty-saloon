import { StaticImageData } from 'next/image'

export enum PromotionsCardEnum {
  bigCard = 'bigCard',
  regular = 'regular',
}

export type PromotionsCardContentProps = {
  imageSrc: string | StaticImageData
  imageAlt: string
  header?: string
  text?: string
  date?: string
}

export type PromotionsCardStyledProps = {
  kind: PromotionsCardEnum
  widthImg?: number
  heightImg?: number
}
