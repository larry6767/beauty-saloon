'use client'

import React from 'react'
import Image from 'next/image'
import * as telephoneIcon from 'assets/footerIcons/telephone.svg'
import * as tiktokLogo from 'assets/headerIcons/tiktokLogo.svg'
import * as whatsappLogo from 'assets/headerIcons/whatsappLogo.svg'
import * as instagramLogo from 'assets/headerIcons/instagramLogo.svg'
import { Link } from '@/components/generic/Link'
import {
  // ContactsList,
  ContactBlock,
  TelephoneIcon,
  IconList,
  Number,
  LanguageBlock,
  LogoIcon,
  FooterContainer,
  FooterWrapper,
  ContactBlockContainer,
} from './styles'
import { theme } from '@/theme/theme'

export const Footer = () => {
  const logoIcons = [
    { image: tiktokLogo, url: '#', alt: 'TikTok' },
    { image: whatsappLogo, url: '#', alt: 'WhatsApp' },
    { image: instagramLogo, url: '#', alt: 'Instagram' },
  ]

  return (
    <FooterContainer>
      <FooterWrapper>
        <ContactBlockContainer>
          <TelephoneIcon>
            <Image src={telephoneIcon} width={18} height={18} alt="Telephone" />
          </TelephoneIcon>
          <ContactBlock>
            <Number href="tel:+420000000000">+420 000 000 000</Number>
            <Link
              fontSize={`${theme.fontSize.smallFont}`}
              transform="uppercase"
              padding={`0px`}
              withoutNextLinkWrapper
            >
              заказать звонок
            </Link>
          </ContactBlock>
        </ContactBlockContainer>
        <IconList>
          {logoIcons.map((icon) => (
            <LogoIcon key={icon.alt} href={icon.url}>
              <Image src={icon.image} width={18} height={18} alt={icon.alt} />
            </LogoIcon>
          ))}
        </IconList>
        <LanguageBlock>EN | RU | CZ</LanguageBlock>
      </FooterWrapper>
    </FooterContainer>
  )
}
