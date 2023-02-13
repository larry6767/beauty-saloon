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
  DrawerBookingButton,
  FixedButton,
} from './styles'
//
import Image from 'next/image'
import * as angle from 'assets/icons/angle-right-solid.svg'
import * as phone from 'assets/icons/telephone.svg'
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
    '+7 (495) 724 38 51',
  ]

  return (
    <DrawerWrapper>
      <DrawerLinks>
        {drawerLinks.map((item) => (
          <DrawerLinkItems key={item}>
            <Link
              key={item}
              href="#"
              width="100%"
              color="#707070"
              fontSize="12px"
              lineHeight="13px"
              transform="uppercase"
              padding="25px 34px"
            >
              <LinkContent>
                {item.match(/\d{1,}/g) !== null ? (
                  <LinkContentTelephone>
                    <TelephoneImgWrapper>
                      <Image
                        src={phone}
                        width={18}
                        height={18}
                        alt="telephone"
                      />
                    </TelephoneImgWrapper>
                    {item}
                  </LinkContentTelephone>
                ) : (
                  item
                )}

                <ImgWrapper>
                  <Image src={angle} width={10} height={10} alt="close" />
                </ImgWrapper>
              </LinkContent>
            </Link>
          </DrawerLinkItems>
        ))}
      </DrawerLinks>
      <DrawerButtonsWrapper>
        <DrawerButton>
          <Link
            href="#"
            color="#fff;"
            fontSize="14px"
            lineHeight="13px"
            transform="uppercase"
            padding="14.5px 55px"
          >
            Задать вопрос
          </Link>
        </DrawerButton>
        <FixedButton>
          <DrawerBookingButton>
            <Link
              href="#"
              color="#fff;"
              hoverColor="#fff"
              fontSize="14px"
              weight={600}
              lineHeight="16px"
              transform="uppercase"
              padding="0px 0px"
            >
              Онлайн запись
            </Link>
          </DrawerBookingButton>
        </FixedButton>
      </DrawerButtonsWrapper>
    </DrawerWrapper>
  )
}
