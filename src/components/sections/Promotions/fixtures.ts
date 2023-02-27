import imgUnavailabe from '/src/components/sections/Promotions/img-unavailabe.png'
// types
import { PromotionsDataType } from './PromotionsList'
import { PromotionsCardEnum } from './PromotionsList/PromotionsCard/types'
export const testContent = {
  img: imgUnavailabe,
  header: 'Lorem ipsum dolor sit',
  text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  date: '1 декабря 2020',
}

export const promotionsContent: Array<PromotionsDataType> = [
  {
    kind: PromotionsCardEnum.bigCard,
    date: testContent.date,
    header: testContent.header,
    image: {
      src: testContent.img,
      alt: 'A',
    },
    text: 'A' + testContent.text,
  },
  {
    kind: PromotionsCardEnum.regular,
    date: testContent.date,
    header: testContent.header,
    image: {
      src: testContent.img,
      alt: 'B',
    },
    text: 'B' + testContent.text,
  },
  {
    kind: PromotionsCardEnum.regular,
    date: testContent.date,
    header: testContent.header,
    image: {
      src: testContent.img,
      alt: 'C',
    },
    text: 'C' + testContent.text,
  },
  {
    kind: PromotionsCardEnum.regular,
    date: testContent.date,
    header: testContent.header,
    image: {
      src: testContent.img,
      alt: 'D',
    },
    text: 'D' + testContent.text,
  },
]
