import React from 'react'
// local libs
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
import { Link } from 'src/components/generic/Link'
import { ColorsEnum, theme } from 'src/theme/theme'
import { Slider } from 'src/components/generic'
import { fetchData } from 'src/utils'
import { settings } from './fixtures'
// types
import type { OurTeamCardData, OurTeamTextData, OurTeamProps } from './types'
import { Locale } from 'src/config/i18n'

async function getTextData(lang: Locale) {
  const { data } = await fetchData<OurTeamTextData>(
    `http://localhost:1337/api/our-team?locale=${lang}`,
  )

  return data.attributes
}

async function getCardData(lang: Locale) {
  const { data } = await fetchData<OurTeamCardData>(
    `http://localhost:1337/api/our-team-cards?locale=${lang}&populate=image`,
  )

  return data
}

export async function OurTeam({ lang }: OurTeamProps) {
  const [textContent, cardTextData] = await Promise.all([
    getTextData(lang),
    getCardData(lang),
  ])

  return (
    <SectionContainer>
      <SectionWrapper>
        <Heading>{textContent?.heading}</Heading>
        <HeadingLineWrapper>
          <HeadingLine />
          <Link
            href="#"
            fontSize={`${theme.fontSize.mediumFont}`}
            color={ColorsEnum.textSecondary}
          >
            {textContent?.linkText.toUpperCase()}
          </Link>
        </HeadingLineWrapper>

        <Slider
          {...settings}
          items={cardTextData.map(({ attributes: item }) => (
            <InfoCardWrapper key={item.name}>
              <PhotoContainer>
                <PhotoBlock
                  style={{
                    backgroundImage: `url(http://localhost:1337${item.image.data.attributes.url})`,
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
        />
      </SectionWrapper>
    </SectionContainer>
  )
}
