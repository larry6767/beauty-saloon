'use client'
import React from 'react'
import Image from 'next/image'
// Icons
import * as scissorsIcon from 'assets/advantagesicons/scissors.svg'
import * as calendarIcon from 'assets/advantagesicons/calendar.svg'
import * as medalIcon from 'assets/advantagesicons/medal.svg'
import * as charterIcon from 'assets/advantagesicons/charter.svg'
import * as chartIcon from 'assets/advantagesicons/chart.svg'
import * as heartIcon from 'assets/advantagesicons/heart.svg'
import * as bikiniIcon from 'assets/advantagesicons/bikini.svg'
import * as clockIcon from 'assets/advantagesicons/clock.svg'
import {
  AdvantagesHeader,
  AdvantagesHeaderWrapper,
  AdvantagesImage,
  AdvantagesItem,
  AdvantagesList,
  AdvantagesText,
  AdvantagesTextWrapper,
  AdvantagesListWrapper,
  AdvantagesWrapper,
  FlexCenter,
} from './styles'

export const Advantages = () => {
  const advantages = [
    'Beauty услуги от 100₽',
    '73 салона в 34 городах России',
    'Гарантия на услуги 7 дней',
    'Победители и призеры международных чемпионатов',
    'Рекорд России 64 клиента за 60 минут',
    'Все beauty-услуги в одном месте',
    'Депиляция за 15 минут без боли',
    'Работаем 24/7',
  ]

  const advantagesIcons = [
    { image: scissorsIcon, url: '#', alt: 'Изображение ножниц' },
    { image: calendarIcon, url: '#', alt: 'Изображение календаря' },
    { image: medalIcon, url: '#', alt: 'Изображение медали' },
    { image: charterIcon, url: '#', alt: 'Изображение грамоты' },
    { image: chartIcon, url: '#', alt: 'Изображение графика' },
    { image: heartIcon, url: '#', alt: 'Изображение сердца' },
    { image: bikiniIcon, url: '#', alt: 'Изображение бикини' },
    { image: clockIcon, url: '#', alt: 'Изображение часов' },
  ]
  return (
    <>
      <FlexCenter>
        <AdvantagesWrapper>
          <AdvantagesHeaderWrapper>
            <AdvantagesHeader>Почему МЫ:</AdvantagesHeader>
          </AdvantagesHeaderWrapper>
          <AdvantagesListWrapper>
            <AdvantagesList>
              {advantages.map((item, index) => {
                return (
                  <React.Fragment key={item}>
                    <AdvantagesItem key={item}>
                      <AdvantagesImage>
                        <Image
                          src={advantagesIcons[index].image}
                          alt={advantagesIcons[index].alt}
                        />
                      </AdvantagesImage>
                      <AdvantagesTextWrapper>
                        <AdvantagesText>{item}</AdvantagesText>
                      </AdvantagesTextWrapper>
                    </AdvantagesItem>
                  </React.Fragment>
                )
              })}
            </AdvantagesList>
          </AdvantagesListWrapper>
        </AdvantagesWrapper>
      </FlexCenter>
    </>
  )
}
