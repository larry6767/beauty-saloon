'use client'
import React from 'react'
import Image from 'next/image'
import {
  ServicesContentWrapper,
  ServicesHeader,
  ServicesHeaderWrapper,
  ServicesImage,
  ServicesImageWrappeer,
  ServicesItem,
  ServicesList,
  ServicesText,
  ServicesWrapper,
} from './styles'
import depilationImg from '../../../../assets/servicesImg/dp.webp'
import makeupImg from '../../../../assets/servicesImg/makeup.webp'
import nailsImg from '../../../../assets/servicesImg/nails.webp'
import browsImg from '../../../../assets/servicesImg/brows.webp'
import mirrorImg from '../../../../assets/servicesImg/mirror.webp'
import barberImg from '../../../../assets/servicesImg/barber.webp'
import massageImg from '../../../../assets/servicesImg/massage.webp'
import menImg from '../../../../assets/servicesImg/men.webp'
import tanImg from '../../../../assets/servicesImg/tan.webp'

export const Services = () => {
  const services = [
    {
      image: { src: depilationImg, alt: 'Девушки держат крем для депиляции' },
      text: 'Депиляция',
    },
    {
      image: {
        src: makeupImg,
        alt: 'Девушка делает косметологическую процедуру',
      },
      text: 'Косметология',
    },
    {
      image: {
        src: nailsImg,
        alt: 'Девушка красит ногти',
      },
      text: 'Маникюр/Педикюр',
    },
    {
      image: {
        src: browsImg,
        alt: 'Девушка красит брови',
      },
      text: 'Брови/Ресницы',
    },
    {
      image: {
        src: mirrorImg,
        alt: 'Девушка делает макияж',
      },
      text: 'Визаж',
    },
    {
      image: {
        src: barberImg,
        alt: 'Девушка делает прическу',
      },
      text: 'Парикмахер',
    },
    {
      image: {
        src: massageImg,
        alt: 'Девушка держит леденец',
      },
      text: 'Массаж',
    },
    {
      image: {
        src: menImg,
        alt: 'Изображение мужчины',
      },
      text: 'Для мужчин',
    },
    {
      image: {
        src: tanImg,
        alt: 'Девушки с загаром',
      },
      text: 'Загар',
    },
  ]
  return (
    <>
      <ServicesWrapper>
        <ServicesContentWrapper>
          <ServicesHeaderWrapper>
            <ServicesHeader>Услуги</ServicesHeader>
          </ServicesHeaderWrapper>
          <ServicesList>
            {services.map((item) => {
              return (
                <ServicesItem key={item.text}>
                  <ServicesImageWrappeer>
                    <ServicesImage>
                      <Image
                        src={item.image.src}
                        style={{ width: '100%', height: '100%' }}
                        alt={item.image.alt}
                      ></Image>
                    </ServicesImage>
                  </ServicesImageWrappeer>
                  <ServicesText>{item.text}</ServicesText>
                </ServicesItem>
              )
            })}
          </ServicesList>
        </ServicesContentWrapper>
      </ServicesWrapper>
    </>
  )
}
