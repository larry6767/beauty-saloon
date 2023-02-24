'use client'

import React from 'react'
import Image from 'next/image'
import { useStoreon } from 'storeon/react'
// local libs
import * as logo from 'assets/headerIcons/logo.png'
import * as menuIcon from 'assets/headerIcons/menuIcon.svg'
import { Link } from 'src/components/generic/Link'
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
  MenuIcon,
  LogoIcon,
} from './styles'
import 'src/utils/i18next'
import { LocalizationButton } from 'src/components/generic/LocalizationButton/LocalizationButton'
import { theme } from 'src/theme/theme'
import { UpperLayerActions } from 'src/store/upperLayer'
import { DrawerMenuContent } from 'src/components/modals/DrawerMenuContent/DrawerMenuContent'

export const Header = () => {
  const { dispatch } = useStoreon('upperLayer')

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
        <MenuIcon
          onClick={() =>
            dispatch(UpperLayerActions.open, {
              kind: 'drawer',
              content: <DrawerMenuContent />,
            })
          }
        >
          <Image src={menuIcon} width={60} height={60} alt="Menu" />
        </MenuIcon>
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
                weight="bold"
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
