import * as scissorsIcon from 'assets/advantagesicons/scissors.svg'
import * as calendarIcon from 'assets/advantagesicons/calendar.svg'
import * as medalIcon from 'assets/advantagesicons/medal.svg'
import * as charterIcon from 'assets/advantagesicons/charter.svg'
import * as chartIcon from 'assets/advantagesicons/chart.svg'
import * as heartIcon from 'assets/advantagesicons/heart.svg'
import * as bikiniIcon from 'assets/advantagesicons/bikini.svg'
import * as clockIcon from 'assets/advantagesicons/clock.svg'

export const advantages: Array<{
  text: string
  image: typeof import('*.svg')
  alt: string
}> = [
  {
    image: scissorsIcon,
    text: 'Beauty услуги от 100₽',
    alt: 'Изображение ножниц',
  },
  {
    image: calendarIcon,
    text: '73 салона в 34 городах России',
    alt: 'Изображение календаря',
  },
  {
    image: medalIcon,
    text: 'Гарантия на услуги 7 дней',
    alt: 'Изображение медали',
  },
  {
    image: charterIcon,
    text: 'Победители и призеры международных чемпионатов',
    alt: 'Изображение грамоты',
  },
  {
    image: chartIcon,
    text: 'Рекорд России 64 клиента за 60 минут',
    alt: 'Изображение графика',
  },
  {
    image: heartIcon,
    text: 'Все beauty-услуги в одном месте',
    alt: 'Изображение сердца',
  },
  {
    image: bikiniIcon,
    text: 'Депиляция за 15 минут без боли',
    alt: 'Изображение бикини',
  },
  { image: clockIcon, text: 'Работаем 24/7', alt: 'Изображение часов' },
]
