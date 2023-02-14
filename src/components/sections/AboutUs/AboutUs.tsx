import React from 'react'
import Image from 'next/image'
import * as playImage from '../../../../assets/aboutUsIcons/play.png'
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

export const AboutUs = () => {
  return (
    <SectionContainer>
      <SectionWrapper>
        <TextInfoWrapper>
          <Heading>О нас</Heading>
          <HeadingLine />
          <Title>Салон красоты «Сахар»</Title>
          <Text>
            Мы создаем красоту, предоставляя качественные услуги в дружелюбной
            обстановке по доступным ценам. Мы строим одну из лучших сетей
            салонов красоты в России, успех которой основан на доверии,
            честности и гармонии в команде
          </Text>
          <ButtonWrapper>
            <Button>Оставить заявку</Button>
            <Button>Подробности</Button>
          </ButtonWrapper>
        </TextInfoWrapper>
        <VideoBlock>
          <Play>
            <Image src={playImage} width={56} height={56} alt="Play" />
            <PlayText>Смотреть видео</PlayText>
          </Play>
        </VideoBlock>
      </SectionWrapper>
    </SectionContainer>
  )
}
