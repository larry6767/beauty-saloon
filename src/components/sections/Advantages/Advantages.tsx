import React from 'react'
import Image from 'next/image'
// local libs
import { advantages } from './fixtures'
import {
  AdvantagesHeader,
  AdvantagesHeaderWrapper,
  AdvantagesImage,
  AdvantagesItem,
  AdvantagesList,
  AdvantagesText,
  AdvantagesTextWrapper,
  AdvantagesListWrapper,
  AdvantagesWrapper,
  FlexCenter,
} from './styles'

export const Advantages = () => {
  return (
    <>
      <FlexCenter>
        <AdvantagesWrapper>
          <AdvantagesHeaderWrapper>
            <AdvantagesHeader>Почему МЫ:</AdvantagesHeader>
          </AdvantagesHeaderWrapper>
          <AdvantagesListWrapper>
            <AdvantagesList>
              {advantages.map((item) => {
                return (
                  <React.Fragment key={item.text}>
                    <AdvantagesItem>
                      <AdvantagesImage>
                        <Image src={item.image} alt={item.alt} />
                      </AdvantagesImage>
                      <AdvantagesTextWrapper>
                        <AdvantagesText>{item.text}</AdvantagesText>
                      </AdvantagesTextWrapper>
                    </AdvantagesItem>
                  </React.Fragment>
                )
              })}
            </AdvantagesList>
          </AdvantagesListWrapper>
        </AdvantagesWrapper>
      </FlexCenter>
    </>
  )
}
