'use client'

import React from 'react'
import Slider from 'react-slick'
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

export const OurTeam = () => {
  const employees = [
    {
      photoUrl: '/assets/ourTeamContent/girl1.jpg',
      careerTitle: 'КОСМЕТОЛОГ',
      name: 'ПОЛИНА НИКИТИНА',
      careerYears: '5 лет',
      text: 'Работаю со всеми видами инъекций. Фанат своей профессии, всегда справляюсь со всеми поставленными задачами. Имею высшее медицинское образование.',
    },
    {
      photoUrl: '/assets/ourTeamContent/girl2.jpg',
      careerTitle: 'ЛАШМЕЙКЕР',
      name: 'ЕКАТЕРИНА СОБОЛЕВА',
      careerYears: '2 года',
      text: 'Владею всеми объёмами наращивания от классики до Голливуда. Я очень люблю своё дело! Это творческий процесс создания подходящего взгляда.',
    },
    {
      photoUrl: '/assets/ourTeamContent/girl3.jpg',
      careerTitle: 'МАСТЕР НОГТЕВОГО СЕРВИСА',
      name: 'НУРА ИСЛАМБЕКОВА',
      careerYears: '3 года',
      text: 'Профессионал своего дела. Выполняю работы любой сложности. Владею медицинским педикюром. Я очень люблю дело, которым занимаюсь! Меня очень заряжает радость клиентов от результата!',
    },
  ]

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
        <Heading>Наша команда</Heading>
        <HeadingLineWrapper>
          <HeadingLine />
          <Link
            href="#"
            fontSize={`${theme.fontSize.mediumFont}`}
            color="black"
          >
            ВСЕ СОТРУДНИКИ
          </Link>
        </HeadingLineWrapper>

        <Slider {...settings}>
          {employees.map((item) => (
            <InfoCardWrapper key={item.name}>
              <PhotoContainer>
                <PhotoBlock backgroundImage={item.photoUrl} />
              </PhotoContainer>
              <TextInfoContainer>
                <CareerTitle>{item.careerTitle}</CareerTitle>
                <Name>{item.name}</Name>
                <CareerInfoContainer>
                  <Title>ОПЫТ РАБОТЫ</Title>
                  <Description>Стаж {item.careerYears}</Description>
                </CareerInfoContainer>
                <Text>{item.text}</Text>
              </TextInfoContainer>
            </InfoCardWrapper>
          ))}
        </Slider>
      </SectionWrapper>
    </SectionContainer>
  )
}
