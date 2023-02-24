import React from 'react'
import Image from 'next/image'
// local libs
import * as logo from 'assets/headerIcons/logo.png'
import * as tiktokLogo from 'assets/headerIcons/tiktokLogo.svg'
import * as whatsappLogo from 'assets/headerIcons/whatsappLogo.svg'
import * as instagramLogo from 'assets/headerIcons/instagramLogo.svg'
import * as telegramLogo from 'assets/headerIcons/telegramLogo.svg'
import { MenuButton } from './MenuButton'
import { Link } from '@/components/generic/Link'
import {
  BottomLinkItems,
  BottomLinkList,
  BottomListContainer,
  ContactBlock,
  HeaderContainer,
  IconList,
  CentralBlock,
  LogoIconContainer,
  TopLinkItems,
  TopLinkList,
  TopListContainer,
  ContactsList,
  Number,
  LanguageBlock,
  LogoIcon,
} from './styles'
import { LocalizationButton } from '@/components/generic/LocalizationButton/LocalizationButton'
import { theme } from '@/theme/theme'

export const Header = () => {
  const topLinks = [
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

  const logoIcons = [
    { image: tiktokLogo, url: '#', alt: 'TikTok' },
    { image: whatsappLogo, url: '#', alt: 'WhatsApp' },
    { image: instagramLogo, url: '#', alt: 'Instagram' },
    { image: telegramLogo, url: '#', alt: 'Telegram' },
  ]

  const bottomLinks = [
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

  return (
    <HeaderContainer>
      <TopListContainer>
        <TopLinkList>
          {topLinks.map((item) => (
            <TopLinkItems key={item}>
              <Link
                key={item}
                href="#"
                fontSize="14px"
                padding={`0px 8px 0px 8px`}
              >
                {item}
              </Link>
            </TopLinkItems>
          ))}
        </TopLinkList>
      </TopListContainer>

      <CentralBlock>
        <LogoIconContainer>
          <Link href="#">
            <Image src={logo} alt="logo" priority />
          </Link>
        </LogoIconContainer>
        <MenuButton />
        <ContactsList>
          <IconList>
            {logoIcons.map((icon) => (
              <LogoIcon key={icon.alt} href={icon.url}>
                <Image src={icon.image} width={22} height={22} alt={icon.alt} />
              </LogoIcon>
            ))}
          </IconList>
          <ContactBlock>
            <Number href="tel:+420000000000">+420 000 000 000</Number>
            <Link
              color="black"
              fontSize="9px"
              transform="uppercase"
              withoutNextLinkWrapper
            >
              заказать звонок
            </Link>
          </ContactBlock>
        </ContactsList>

        <LanguageBlock>
          <LocalizationButton
            color={'black'}
            hoverColor={theme.colors.secondary}
          />
        </LanguageBlock>
      </CentralBlock>

      <BottomListContainer>
        <BottomLinkList>
          {bottomLinks.map((item) => (
            <BottomLinkItems key={item}>
              <Link
                key={item}
                href="#"
                fontSize="12px"
                fontWeight="bold"
                transform="uppercase"
                padding={`12px 5px 0px 5px`}
              >
                {item}
              </Link>
            </BottomLinkItems>
          ))}
        </BottomLinkList>
      </BottomListContainer>
    </HeaderContainer>
  )
}
