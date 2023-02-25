'use client'

import React from 'react'
import axios from 'axios'
import Slider from 'react-slick'
import { useEffect, useState } from 'react'
// import { useTranslation } from 'next-i18next'
import {
  CareerInfoContainer,
  CareerTitle,
  Description,
  InfoCardWrapper,
  Name,
  PhotoContainer,
  Heading,
  SectionContainer,
  SectionWrapper,
  TextInfoContainer,
  Title,
  Text,
  HeadingLine,
  HeadingLineWrapper,
  PhotoBlock,
} from './styles'
import { Link } from '@/components/generic/Link'
import { theme } from '@/theme/theme'
import { MediaData } from '../AboutUs/types'

interface CardDataInterface {
  attributes: {
    careerTitle: string
    careerYears: string
    description: string
    name: string
    image: MediaData
  }
}

type OurTeamTextData = {
  data: {
    attributes: {
      careerDescription: string
      careerTitle: string
      heading: string
      linkText: string
    }
  }
}

type OurTeamCardData = {
  data: Array<CardDataInterface>
}

export const OurTeam = () => {
  const [textContent, setTextContent] = useState<
    OurTeamTextData['data']['attributes'] | never
  >()
  const [cardTextData, setCardTextData] = useState<
    Array<CardDataInterface['attributes']> | never
  >([])
  // const { i18n } = useTranslation()
  // const currentLang = i18n.language
  const currentLang = 'en'

  useEffect(() => {
    const getTextData = async () => {
      try {
        const { data } = await axios.get<OurTeamTextData>(
          `http://localhost:1337/api/our-team?locale=${currentLang}`,
        )
        const textData = data.data.attributes
        setTextContent({ ...textData })
      } catch (e: unknown) {
        console.error(`Ошибка при получении текстовых данных: ${e}`)
      }
    }
    getTextData()
  }, [currentLang])

  useEffect(() => {
    const getCardData = async () => {
      try {
        const { data } = await axios.get<OurTeamCardData>(
          `http://localhost:1337/api/our-team-cards?locale=${currentLang}&populate=image`,
        )
        setCardTextData(() => [])
        data.data.map((item) =>
          setCardTextData((prev) => [...prev, item.attributes]),
        )
      } catch (e: unknown) {
        console.error(`Ошибка при получении данных для слайдера: ${e}`)
      }
    }
    getCardData()
  }, [currentLang])

  const settings = {
    dots: true,
    infinite: false,
    speed: 180,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  return (
    <SectionContainer>
      <SectionWrapper>
        <Heading>{textContent?.heading}</Heading>
        <HeadingLineWrapper>
          <HeadingLine />
          <Link
            href="#"
            fontSize={`${theme.fontSize.mediumFont}`}
            color="black"
          >
            {textContent?.linkText.toUpperCase()}
          </Link>
        </HeadingLineWrapper>

        <Slider {...settings}>
          {cardTextData.map((item) => (
            <InfoCardWrapper key={item.name}>
              <PhotoContainer>
                <PhotoBlock
                  style={{
                    backgroundImage: `http://localhost:1337${item.image.data.attributes.url}`,
                  }}
                />
              </PhotoContainer>
              <TextInfoContainer>
                <CareerTitle>{item.careerTitle.toUpperCase()}</CareerTitle>
                <Name>{item.name}</Name>
                <CareerInfoContainer>
                  <Title>{textContent?.careerTitle.toUpperCase()}</Title>
                  <Description>
                    {textContent?.careerDescription} {item.careerYears}
                  </Description>
                </CareerInfoContainer>
                <Text>{item.description}</Text>
              </TextInfoContainer>
            </InfoCardWrapper>
          ))}
        </Slider>
      </SectionWrapper>
    </SectionContainer>
  )
}
