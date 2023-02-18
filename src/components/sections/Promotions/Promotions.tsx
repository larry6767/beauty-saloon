'use client'
import React from 'react'
import Image from 'next/image'
// Styles
import {
  Flex,
  PromotionsContentWrapper,
  PromotionsDate,
  PromotionsHeader,
  PromotionsImage,
  PromotionsImageFirst,
  PromotionsItem,
  PromotionsItemFirst,
  PromotionsItemOther,
  PromotionsItemSecond,
  PromotionsItemThird,
  PromotionsList,
  PromotionsOtherWrapper,
  PromotionsRow,
  PromotionsText,
  PromotionsWrapper,
} from './styles'
import { PromotionsContentWrapperFirst } from './styles'
import { PromotionsContentWrapperOther } from './styles'

//
import imgUnavailabe from '/src/components/sections/Promotions/img-unavailabe.png'
const testContent = {
  img: imgUnavailabe,
  header: 'Lorem ipsum dolor sit',
  text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  date: '1 декабря 2020',
}

export const Promotions = () => {
  const promotionsContent = [
    {
      date: testContent.date,
      header: testContent.header,
      image: {
        src: testContent.img,
        alt: 'A',
      },
      text: 'A' + testContent.text,
    },
    {
      date: testContent.date,
      header: testContent.header,
      image: {
        src: testContent.img,
        alt: 'B',
      },
      text: 'B' + testContent.text,
    },
    {
      date: testContent.date,
      header: testContent.header,
      image: {
        src: testContent.img,
        alt: 'C',
      },
      text: 'C' + testContent.text,
    },
    {
      date: testContent.date,
      header: testContent.header,
      image: {
        src: testContent.img,
        alt: 'D',
      },
      text: 'D' + testContent.text,
    },
  ]

  return (
    <>
      <PromotionsWrapper>
        <PromotionsList>
          <PromotionsItemFirst>
            <PromotionsImageFirst>
              <Image
                src={promotionsContent[0].image.src}
                alt={promotionsContent[0].image.alt}
                style={{
                  width: '100%',
                  height: '100%',
                }}
              />
            </PromotionsImageFirst>
            <PromotionsContentWrapperFirst>
              <Flex flexFlow="column nowrap" minHeight="100%">
                <PromotionsHeader>
                  {promotionsContent[0].header}
                </PromotionsHeader>
                <Flex flex="1 1 auto">
                  <PromotionsText>{promotionsContent[0].text}</PromotionsText>
                </Flex>
                <PromotionsDate>{promotionsContent[0].date}</PromotionsDate>
              </Flex>
            </PromotionsContentWrapperFirst>
          </PromotionsItemFirst>

          <PromotionsRow>
            <PromotionsItemSecond>
              <PromotionsItem>
                <PromotionsImage>
                  <Image
                    src={promotionsContent[1].image.src}
                    alt={promotionsContent[1].image.alt}
                    style={{
                      width: '100%',
                      height: '100%',
                    }}
                  />
                </PromotionsImage>
                <PromotionsContentWrapper>
                  <Flex flexFlow="column nowrap" minHeight="100%">
                    <PromotionsHeader>
                      {promotionsContent[1].header}
                    </PromotionsHeader>
                    <Flex flex="1 1 auto">
                      <PromotionsText>
                        {promotionsContent[1].text}
                      </PromotionsText>
                    </Flex>
                    <PromotionsDate>{promotionsContent[1].date}</PromotionsDate>
                  </Flex>
                </PromotionsContentWrapper>
              </PromotionsItem>
            </PromotionsItemSecond>

            <PromotionsItemThird>
              <PromotionsItem>
                <PromotionsImage>
                  <Image
                    src={promotionsContent[2].image.src}
                    alt={promotionsContent[2].image.alt}
                    style={{
                      width: '100%',
                      height: '100%',
                    }}
                  />
                </PromotionsImage>
                <PromotionsContentWrapper>
                  <Flex flexFlow="column nowrap" minHeight="100%">
                    <PromotionsHeader>
                      {promotionsContent[2].header}
                    </PromotionsHeader>
                    <Flex flex="1 1 auto">
                      <PromotionsText>
                        {promotionsContent[2].text}
                      </PromotionsText>
                    </Flex>
                    <PromotionsDate>{promotionsContent[2].date}</PromotionsDate>
                  </Flex>
                </PromotionsContentWrapper>
              </PromotionsItem>
            </PromotionsItemThird>
          </PromotionsRow>

          {promotionsContent.map((item, index) => {
            return index + 1 <= 3 ? null : (
              <PromotionsOtherWrapper key={item.image.alt}>
                <PromotionsItemOther>
                  <PromotionsItem>
                    <PromotionsImage>
                      <Image
                        src={item.image.src}
                        alt={item.image.alt}
                        style={{
                          width: '100%',
                          height: '100%',
                        }}
                      />
                    </PromotionsImage>
                    <PromotionsContentWrapperOther>
                      <Flex flexFlow="column nowrap" minHeight="100%">
                        <PromotionsHeader>{item.header}</PromotionsHeader>
                        <Flex flex="1 1 auto">
                          <PromotionsText>{item.text}</PromotionsText>
                        </Flex>
                        <PromotionsDate>{item.date}</PromotionsDate>
                      </Flex>
                    </PromotionsContentWrapperOther>
                  </PromotionsItem>
                </PromotionsItemOther>
              </PromotionsOtherWrapper>
            )
          })}
        </PromotionsList>
      </PromotionsWrapper>
    </>
  )
}
