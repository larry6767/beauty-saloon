import React from 'react'
import Image from 'next/image'
// local libs
import { Link } from 'src/components/generic'
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
import angle from 'assets/icons/angle-right-solid.svg'
import phone from 'assets/icons/telephone.svg'
import { ColorsEnum } from 'src/theme'
// types
import type { StaticImageData } from 'next/image'

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

  const drawerLinksTel = '+7 (495) 724 38 51'

  return (
    <DrawerWrapper>
      <DrawerLinks>
        {drawerLinks.map((item) => (
          <DrawerLinkItems key={item}>
            <Link
              key={item}
              href="#"
              width="100%"
              color={ColorsEnum.textSecondary}
              fontSize="12px"
              lineHeight="13px"
              padding="25px 35px"
            >
              <LinkContent>
                {item}
                <ImgWrapper>
                  <Image
                    src={angle as StaticImageData}
                    width={10}
                    height={10}
                    alt="Перейти"
                  />
                </ImgWrapper>
              </LinkContent>
            </Link>
          </DrawerLinkItems>
        ))}

        <DrawerLinkItems key={drawerLinksTel}>
          <Link
            key={drawerLinksTel}
            href="#"
            width="100%"
            color={ColorsEnum.textSecondary}
            fontSize="12px"
            lineHeight="13px"
            padding="25px 35px"
          >
            <LinkContent>
              <LinkContentTelephone>
                <TelephoneImgWrapper>
                  <Image
                    src={phone as StaticImageData}
                    width={18}
                    height={18}
                    alt="telephone"
                  />
                </TelephoneImgWrapper>
                {drawerLinksTel}
              </LinkContentTelephone>
              <ImgWrapper>
                <Image
                  src={angle as StaticImageData}
                  width={10}
                  height={10}
                  alt="Перейти"
                />
              </ImgWrapper>
            </LinkContent>
          </Link>
        </DrawerLinkItems>
      </DrawerLinks>
      <DrawerButtonsWrapper>
        <DrawerButton>
          <Link
            href="#"
            color={ColorsEnum.textPrimary}
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
