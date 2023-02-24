'use client'

import React, { useEffect, useState } from 'react'
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
import { useTranslation } from 'next-i18next'
// types
import type { FC } from 'react'
import type { AboutTextData, MediaData, AboutMediaData } from './types'

export const AboutUs: FC = () => {
  const [textContent, setTextContent] = useState<
    AboutTextData['data']['attributes'] | never
  >()
  const [videoImage, setVideoImage] = useState<
    MediaData['data']['attributes'] | never
  >()
  const [videoIcon, setVideoIcon] = useState<
    MediaData['data']['attributes'] | never
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
        <VideoBlock style={{ backgroundImage: videoPreviewSrc }}>
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
