import React from 'react'
import axios from 'axios'
import Image from 'next/image'
// local libs
import {
  SectionContainer,
  TextInfoWrapper,
  Text,
  ButtonWrapper,
  SectionWrapper,
  Button,
  VideoBlock,
  HeadingLine,
  Heading,
  Title,
  Play,
  PlayText,
} from './styles'
// types
import type { AboutTextData, AboutMediaData, AboutUsProps } from './types'
import { Locale } from 'src/config/i18n'

async function getTextData(lang: Locale) {
  const { data } = await axios.get<AboutTextData>(
    `http://localhost:1337/api/about?locale=${lang}`,
  )
  return data.data.attributes
}

async function getMediaData() {
  const { data } = await axios.get<AboutMediaData>(
    'http://localhost:1337/api/about-media?populate=*',
  )
  return data.data.attributes
}

export async function AboutUs({ lang }: AboutUsProps) {
  const [textContent, mediaData] = await Promise.all([
    getTextData(lang),
    getMediaData(),
  ])

  return (
    <SectionContainer>
      <SectionWrapper>
        <TextInfoWrapper>
          <Heading>{textContent.heading}</Heading>
          <HeadingLine />
          <Title>{textContent.title}</Title>
          <Text>{textContent.text}</Text>
          <ButtonWrapper>
            <Button>{textContent.firstButtonText}</Button>
            <Button>{textContent.secondButtonText}</Button>
          </ButtonWrapper>
        </TextInfoWrapper>
        <VideoBlock
          style={{
            backgroundImage: `url(http://localhost:1337${mediaData.videoPreviewImage.data.attributes.url})`,
          }}
        >
          <Play>
            <Image
              src={`http://localhost:1337${mediaData.videoPlayerIcon.data.attributes.url}`}
              width={56}
              height={56}
              alt={`${mediaData.videoPlayerIcon.data.attributes.alternativeText}`}
              unoptimized
            />
            <PlayText>{textContent.videoPlayerText}</PlayText>
          </Play>
        </VideoBlock>
      </SectionWrapper>
    </SectionContainer>
  )
}
