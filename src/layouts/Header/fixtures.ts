import tiktokLogo from 'assets/headerIcons/tiktokLogo.svg'
import whatsappLogo from 'assets/headerIcons/whatsappLogo.svg'
import instagramLogo from 'assets/headerIcons/instagramLogo.svg'
import telegramLogo from 'assets/headerIcons/telegramLogo.svg'
// types
import type { StaticImageData } from 'next/image'

export const topLinks = [
  'Мастер на дом',
  'О нас',
  'Наша команда',
  'Отзывы',
  'Вакансии',
  'Цены',
  'Акции',
  'Галерея',
  'Контакты',
  'Франшиза',
]

export const logoIcons = [
  { image: tiktokLogo as StaticImageData, url: '#', alt: 'TikTok' },
  { image: whatsappLogo as StaticImageData, url: '#', alt: 'WhatsApp' },
  { image: instagramLogo as StaticImageData, url: '#', alt: 'Instagram' },
  { image: telegramLogo as StaticImageData, url: '#', alt: 'Telegram' },
]

export const bottomLinks = [
  'депиляция',
  'косметология',
  'маникюр/педикюр',
  'брови/ресницы',
  'визаж',
  'парикмахер',
  'массаж',
  'коррекция тела',
  'для мужчин',
  'загар',
]
