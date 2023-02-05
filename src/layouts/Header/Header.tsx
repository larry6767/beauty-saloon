import React from 'react'
import * as logo from 'assets/headerIcons/logo.png'
import * as tiktokLogo from 'assets/headerIcons/tiktokLogo.svg'
import * as whatsappLogo from 'assets/headerIcons/whatsappLogo.svg'
import * as instagramLogo from 'assets/headerIcons/instagramLogo.svg'
import * as telegramLogo from 'assets/headerIcons/telegramLogo.svg'
import * as menuIcon from 'assets/headerIcons/menuIcon.svg'
import Image from 'next/image'
import {
  BottomLink,
  BottomLinkItems,
  BottomLinkList,
  BottomListContainer,
  ContactBlock,
  HeaderContainer,
  IconList,
  CentralBlock,
  LogoImage,
  LogoIconContainer,
  TopLink,
  TopLinkItems,
  TopLinkList,
  TopListContainer,
  Number,
  Text,
  ContactsList,
  LanguageBlock,
  MenuIcon,
  TikTokIcon,
  WhatsAppIcon,
  InstagramIcon,
  TelegramIcon,
} from './styles'

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
              <TopLink key={item} href="#">
                {item}
              </TopLink>
            </TopLinkItems>
          ))}
        </TopLinkList>
      </TopListContainer>

      <CentralBlock>
        <LogoIconContainer>
          <LogoImage href="#">
            <Image src={logo} alt="logo" />
          </LogoImage>
        </LogoIconContainer>
        <MenuIcon>
          <Image src={menuIcon} width={60} height={60} alt="Menu" />
        </MenuIcon>
        <ContactsList>
          <IconList>
            <TikTokIcon href="#">
              <Image src={tiktokLogo} width={22} height={22} alt="TikTok" />
            </TikTokIcon>
            <WhatsAppIcon href="#">
              <Image src={whatsappLogo} width={22} height={22} alt="WhatsApp" />
            </WhatsAppIcon>
            <InstagramIcon href="#">
              <Image
                src={instagramLogo}
                width={22}
                height={22}
                alt="Instagram"
              />
            </InstagramIcon>
            <TelegramIcon href="#">
              <Image src={telegramLogo} width={22} height={22} alt="Telegram" />
            </TelegramIcon>
          </IconList>
          <ContactBlock>
            <Number>+4200 000 00 00</Number>
            <Text>заказать звонок</Text>
          </ContactBlock>
        </ContactsList>
        <LanguageBlock>EN | RU | CZ</LanguageBlock>
      </CentralBlock>

      <BottomListContainer>
        <BottomLinkList>
          {bottomLinks.map((item) => (
            <BottomLinkItems key={item}>
              <BottomLink key={item} href="#">
                {item}
              </BottomLink>
            </BottomLinkItems>
          ))}
        </BottomLinkList>
      </BottomListContainer>
    </HeaderContainer>
  )
}
