'use client'
import React from 'react'
import Image from 'next/image'
// Styles
import {
  Flex,
  PromotionsItemContentWrapper,
  PromotionsDate,
  PromotionsItemHeader,
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
  PromotionsHeader,
  PromotionsContentWrapper,
  PromotionsHeaderWrapper,
  PromotionsLink,
} from './styles'
import { PromotionsContentWrapperFirst } from './styles'
import { PromotionsContentWrapperOther } from './styles'
import { promotionsContent } from './fixtures'

export const Promotions = () => {
  return (
    <>
      <PromotionsWrapper>
        <PromotionsContentWrapper>
          <PromotionsHeaderWrapper>
            <PromotionsHeader>Акции</PromotionsHeader>
            <PromotionsLink>Все акции</PromotionsLink>
          </PromotionsHeaderWrapper>

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
                  <PromotionsItemHeader>
                    {promotionsContent[0].header}
                  </PromotionsItemHeader>
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
                  <PromotionsItemContentWrapper>
                    <Flex flexFlow="column nowrap" minHeight="100%">
                      <PromotionsItemHeader>
                        {promotionsContent[1].header}
                      </PromotionsItemHeader>
                      <Flex flex="1 1 auto">
                        <PromotionsText>
                          {promotionsContent[1].text}
                        </PromotionsText>
                      </Flex>
                      <PromotionsDate>
                        {promotionsContent[1].date}
                      </PromotionsDate>
                    </Flex>
                  </PromotionsItemContentWrapper>
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
                  <PromotionsItemContentWrapper>
                    <Flex flexFlow="column nowrap" minHeight="100%">
                      <PromotionsItemHeader>
                        {promotionsContent[2].header}
                      </PromotionsItemHeader>
                      <Flex flex="1 1 auto">
                        <PromotionsText>
                          {promotionsContent[2].text}
                        </PromotionsText>
                      </Flex>
                      <PromotionsDate>
                        {promotionsContent[2].date}
                      </PromotionsDate>
                    </Flex>
                  </PromotionsItemContentWrapper>
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
                          <PromotionsItemHeader>
                            {item.header}
                          </PromotionsItemHeader>
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
        </PromotionsContentWrapper>
      </PromotionsWrapper>
    </>
  )
}
