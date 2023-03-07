import React from 'react'
import Image from 'next/image'
// local libs
import telephoneIcon from 'assets/footerIcons/telephone.svg'
import { logoIcons } from './fixtures'
import { Link } from 'src/components/generic/Link'
import {
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
import { ColorsEnum, theme } from 'src/theme'
import { LocalizationButton } from 'src/components/shared/LocalizationButton/LocalizationButton'
import { getDictionary } from 'src/config/i18n/getDictionary'
// types
import type { StaticImageData } from 'next/image'
import { FooterProps } from './types'

export async function Footer({ lang }: FooterProps) {
  const dictionary = await getDictionary(lang)

  return (
    <FooterContainer>
      <FooterWrapper>
        <ContactBlockContainer>
          <TelephoneIcon>
            <Image
              src={telephoneIcon as StaticImageData}
              width={18}
              height={18}
              alt="Telephone"
            />
          </TelephoneIcon>
          <ContactBlock>
            <Number href="tel:+420000000000">+420 000 000 000</Number>
            <Link
              fontSize={`${theme.fontSize.smallFont}`}
              textTransform="uppercase"
              padding={`0px`}
              withoutNextLinkWrapper
            >
              {dictionary.links.telephone}
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
        <LanguageBlock>
          <LocalizationButton
            color={ColorsEnum.textPrimary}
            hoverColor={ColorsEnum.textTertiary}
          />
        </LanguageBlock>
      </FooterWrapper>
    </FooterContainer>
  )
}
