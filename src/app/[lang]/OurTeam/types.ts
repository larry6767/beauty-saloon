import type { Locale } from 'src/config/i18n'
import type { MediaData } from '../../../components/sections/AboutUs/types'

export type CardData = {
  attributes: {
    careerTitle: string
    careerYears: string
    description: string
    name: string
    image: MediaData
  }
}

export type OurTeamTextData = {
  data: {
    attributes: {
      careerDescription: string
      careerTitle: string
      heading: string
      linkText: string
    }
  }
}

export type OurTeamCardData = {
  data: Array<CardData>
}

export type OurTeamProps = {
  lang: Locale
}
