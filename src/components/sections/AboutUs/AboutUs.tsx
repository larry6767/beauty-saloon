'use client'

import React from 'react'
import axios from 'axios'
import Image from 'next/image'
import { useEffect, useState } from 'react'
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
import { useTranslation } from 'next-i18next'

export interface MediaDataInterface {
  data: {
    attributes: {
      alternativeText: string
      id: number
      url: string
    }
  }
}

type AboutTextData = {
  data: {
    attributes: {
      firstButtonText: string
      heading: string
      secondButtonText: string
      text: string
      title: string
      videoPlayerText: string
    }
  }
}

type AboutMediaData = {
  data: {
    attributes: {
      videoPlayerIcon: MediaDataInterface
      videoPreviewImage: MediaDataInterface
    }
  }
}

export const AboutUs = () => {
  const [textContent, setTextContent] = useState<
    AboutTextData['data']['attributes'] | never
  >()
  const [videoImage, setVideoImage] = useState<
    MediaDataInterface['data']['attributes'] | never
  >()
  const [videoIcon, setVideoIcon] = useState<
    MediaDataInterface['data']['attributes'] | never
  >()
  const { i18n } = useTranslation()
  const currentLang = i18n.language

  useEffect(() => {
    const getTextData = async () => {
      try {
        const { data } = await axios.get<AboutTextData>(
          `http://localhost:1337/api/about?locale=${currentLang}`,
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
    const getMediaData = async () => {
      try {
        const { data } = await axios.get<AboutMediaData>(
          'http://localhost:1337/api/about-media?populate=*',
        )
        const videoPreviewImage =
          data.data.attributes.videoPreviewImage.data.attributes
        setVideoImage(videoPreviewImage)

        const videoPlayIcon =
          data.data.attributes.videoPlayerIcon.data.attributes
        setVideoIcon(videoPlayIcon)
      } catch (e: unknown) {
        console.error(`Ошибка при получении медиа данных: ${e}`)
      }
    }
    getMediaData()
  }, [])

  const videoPreviewSrc = `http://localhost:1337${videoImage?.url}`
  const videoPlaySrc = `http://localhost:1337${videoIcon?.url}`

  if (!videoIcon && !videoImage) {
    return <></>
  }

  return (
    <SectionContainer>
      <SectionWrapper>
        <TextInfoWrapper>
          <Heading>{textContent?.heading}</Heading>
          <HeadingLine />
          <Title>{textContent?.title}</Title>
          <Text>{textContent?.text}</Text>
          <ButtonWrapper>
            <Button>{textContent?.firstButtonText}</Button>
            <Button>{textContent?.secondButtonText}</Button>
          </ButtonWrapper>
        </TextInfoWrapper>
        <VideoBlock backgroundImage={videoPreviewSrc}>
          <Play>
            <Image
              loader={() => videoPlaySrc}
              src={videoPlaySrc}
              width={56}
              height={56}
              alt={`${videoIcon?.alternativeText}`}
              unoptimized
            />
            <PlayText>{textContent?.videoPlayerText}</PlayText>
          </Play>
        </VideoBlock>
      </SectionWrapper>
    </SectionContainer>
  )
}
