import scissorsIcon from 'assets/advantagesicons/scissors.svg'
import calendarIcon from 'assets/advantagesicons/calendar.svg'
import medalIcon from 'assets/advantagesicons/medal.svg'
import charterIcon from 'assets/advantagesicons/charter.svg'
import chartIcon from 'assets/advantagesicons/chart.svg'
import heartIcon from 'assets/advantagesicons/heart.svg'
import bikiniIcon from 'assets/advantagesicons/bikini.svg'
import clockIcon from 'assets/advantagesicons/clock.svg'
// types
import type { StaticImageData } from 'next/image'

export const advantages: Array<{
  text: string
  image: StaticImageData
  alt: string
}> = [
  {
    image: scissorsIcon as StaticImageData,
    text: 'Beauty услуги от 100₽',
    alt: 'Изображение ножниц',
  },
  {
    image: calendarIcon as StaticImageData,
    text: '73 салона в 34 городах России',
    alt: 'Изображение календаря',
  },
  {
    image: medalIcon as StaticImageData,
    text: 'Гарантия на услуги 7 дней',
    alt: 'Изображение медали',
  },
  {
    image: charterIcon as StaticImageData,
    text: 'Победители и призеры международных чемпионатов',
    alt: 'Изображение грамоты',
  },
  {
    image: chartIcon as StaticImageData,
    text: 'Рекорд России 64 клиента за 60 минут',
    alt: 'Изображение графика',
  },
  {
    image: heartIcon as StaticImageData,
    text: 'Все beauty-услуги в одном месте',
    alt: 'Изображение сердца',
  },
  {
    image: bikiniIcon as StaticImageData,
    text: 'Депиляция за 15 минут без боли',
    alt: 'Изображение бикини',
  },
  {
    image: clockIcon as StaticImageData,
    text: 'Работаем 24/7',
    alt: 'Изображение часов',
  },
]
