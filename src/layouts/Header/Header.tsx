import React from 'react'
import Image from 'next/image'
// local libs
import logo from 'assets/headerIcons/logo.png'
import { MenuButton } from './MenuButton'
import { Link } from '@/components/generic/Link'
import { topLinks, logoIcons, bottomLinks } from './fixtures'
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
import { LocalizationButton } from 'src/components/generic/LocalizationButton/LocalizationButton'
import { ColorsEnum } from '@/theme'

export const Header = () => {
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
              color={ColorsEnum.textSecondary}
              fontSize="9px"
              textTransform="uppercase"
              withoutNextLinkWrapper
            >
              заказать звонок
            </Link>
          </ContactBlock>
        </ContactsList>

        <LanguageBlock>
          <LocalizationButton
            color={ColorsEnum.textSecondary}
            hoverColor={ColorsEnum.textTertiary}
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
                textTransform="uppercase"
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
