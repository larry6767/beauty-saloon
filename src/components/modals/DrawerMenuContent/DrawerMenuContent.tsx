import { Link } from '@/components/generic/Link'
import React from 'react'
import {
  DrawerWrapper,
  DrawerLinkItems,
  DrawerLinks,
  DrawerButtonsWrapper,
  DrawerButton,
  LinkContent,
  ImgWrapper,
  LinkContentTelephone,
  TelephoneImgWrapper,
} from './styles'
//
import Image from 'next/image'
import * as angle from 'assets/icons/angle-right-solid.svg'
import * as phone from 'assets/icons/telephone.svg'
import { theme } from '@/theme/theme'
export const DrawerMenuContent = () => {
  const drawerLinks = [
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
    'мастер на дом',
  ]

  const drawerLinksTel = ['+7 (495) 724 38 51']

  return (
    <DrawerWrapper>
      <DrawerLinks>
        {drawerLinks.map((item) => (
          <DrawerLinkItems key={item}>
            <Link
              key={item}
              href="#"
              width="100%"
              color={`${theme.colors.textSecondary}`}
              fontSize="12px"
              lineHeight="13px"
              padding="25px 35px"
            >
              <LinkContent>
                {item}
                <ImgWrapper>
                  <Image src={angle} width={10} height={10} alt="Перейти" />
                </ImgWrapper>
              </LinkContent>
            </Link>
          </DrawerLinkItems>
        ))}
        <DrawerLinkItems key={drawerLinksTel[0]}>
          <Link
            key={drawerLinksTel[0]}
            href="#"
            width="100%"
            color={`${theme.colors.textSecondary}`}
            fontSize="12px"
            lineHeight="13px"
            padding="25px 35px"
          >
            <LinkContent>
              <LinkContentTelephone>
                <TelephoneImgWrapper>
                  <Image src={phone} width={18} height={18} alt="telephone" />
                </TelephoneImgWrapper>
                {drawerLinksTel[0]}
              </LinkContentTelephone>
              <ImgWrapper>
                <Image src={angle} width={10} height={10} alt="Перейти" />
              </ImgWrapper>
            </LinkContent>
          </Link>
        </DrawerLinkItems>
      </DrawerLinks>
      <DrawerButtonsWrapper>
        <DrawerButton>
          <Link
            href="#"
            color={`${theme.colors.textPrimary}`}
            fontSize="14px"
            lineHeight="13px"
            padding="15px 55px"
          >
            Задать вопрос
          </Link>
        </DrawerButton>
      </DrawerButtonsWrapper>
    </DrawerWrapper>
  )
}
