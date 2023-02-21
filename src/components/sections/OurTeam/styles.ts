import styled from '@emotion/styled'
import { theme } from '@/theme/theme'
import { media } from '../../../theme/breakpoints'
import { PhotoBlockProps } from './types'

export const SectionContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 35px;

  ${media.tablet} {
    flex-direction: column;
  }
`

export const SectionWrapper = styled.div`
  width: 95%;
  display: flex;
  position: relative;
  flex-direction: column;
  overflow: hidden;
  padding-left: 35px;
  margin-top: 50px;
  padding-bottom: 50px;

  .slick-slider {
    overflow: hidden;

    ${media.tablet} {
      width: 740px;
    }
    ${media.laptopL} {
      width: 1110px;
    }
  }
  .slick-track {
    display: flex;
  }
  .slick-arrow {
    display: none !important;
  }
  .slick-dots {
    position: absolute;
    bottom: -10px;
    left: calc(40% - 35px);
    display: flex !important;
    flex-direction: row;
    list-style: none;

    button {
      width: 25px;
      height: 25px;
      font-size: 0;
      border: none;
      background: url('/assets/ourTeamContent/dot-outlined.svg') 50% 50% / 60%
        no-repeat;
      cursor: pointer;
      &:hover {
        background: url('/assets/ourTeamContent/dot-filled.svg') 50% 50% / 67%
          no-repeat;
      }
    }

    .slick-active {
      background: url('/assets/ourTeamContent/dot-filled.svg') 50% 65% / 60%
        no-repeat;
    }
  }
  ${media.tablet} {
    width: 740px;
    padding-left: 0;
    padding-bottom: 0;
    margin-top: 0;

    .slick-dots {
      display: flex !important;
      bottom: 48px;
      left: 39%;
    }
  }
  ${media.laptopL} {
    width: 1110px;
    overflow: visible;

    .slick-dots {
      display: none !important;
    }
    .slick-arrow {
      display: flex !important;
      width: 14px;
      height: 26px;
      position: absolute;
      top: 53%;
      z-index: 1;
      font-size: 0;
      border: none;
      cursor: pointer;
      &:hover {
        filter: contrast(700%);
      }
    }
    .slick-arrow.slick-prev {
      left: -48px;
      background: url('/assets/ourTeamContent/arrow-left.svg') 0 0 / 100%
        no-repeat;
    }
    .slick-arrow.slick-next {
      right: -48px;
      background: url('/assets/ourTeamContent/arrow-right.svg') 0 0 / 100%
        no-repeat;
    }
    .slick-arrow.slick-disabled {
      opacity: 50%;
      pointer-events: none;
    }
  }
`

export const Heading = styled.p`
  font-size: 20px;
  font-weight: 700;
  padding-top: 10px;

  ${media.tablet} {
    font-size: 32px;
    padding: 0 0 19px;
  }
`

export const HeadingLineWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column-reverse;
  position: absolute;
  a {
    transition: opacity 0.4s ease-in-out;
    &:hover {
      opacity: 0.4;
    }
  }

  ${media.tablet} {
    top: 70px;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  }
`

export const HeadingLine = styled.div`
  width: 75px;
  height: 6px;
  border-radius: 4px;
  background-color: ${theme.colors.secondary};
  margin: 50px 0;

  ${media.tablet} {
    margin: 15px 0;
  }
`

export const InfoCardWrapper = styled.div`
  width: 100%;
  display: flex !important;
  align-items: center;
  flex-direction: column;

  ${media.tablet} {
    width: 740px;
    align-items: flex-start;
    flex-direction: row;
  }
  ${media.laptopL} {
    width: 1110px;
  }
`

export const PhotoContainer = styled.div`
  width: 100%;
  height: 400px;
  display: flex;
  align-items: center;
  padding-top: 20px;

  @media (max-width: 380px) {
    height: 300px;
    padding-top: 20px;
  }
  ${media.tablet} {
    width: 240px;
    align-items: flex-start;
    padding: 35px 35px 0 0;
    margin-top: 0;
  }
  ${media.laptopL} {
    width: 340px;
    justify-content: center;
    padding-left: 0 15px;
  }
`

export const PhotoBlock = styled.div<PhotoBlockProps>`
  width: 330px;
  height: 330px;
  ${({ backgroundImage }) =>
    !backgroundImage ? null : `background-image: url(${backgroundImage})`};
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 100%;

  @media (max-width: 380px) {
    width: 250px;
    height: 250px;
  }
  ${media.tablet} {
    width: 180px;
    height: 180px;
  }
  ${media.laptopL} {
    width: 250px;
    height: 250px;
  }
`

export const TextInfoContainer = styled.div`
  ${media.tablet} {
    padding: 0 15px;
    width: 770px;
  }
`

export const CareerTitle = styled.p`
  font-size: ${theme.fontSize.mediumFont};
  margin-bottom: 0;
`

export const Name = styled.p`
  font-size: 22px;
  font-weight: 700;
  margin-top: 0;
`

export const CareerInfoContainer = styled.div`
  width: 200px;
  height: 73px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  background-color: #fff;
  border-radius: 10px;
  margin-bottom: 28px;
  padding-left: 28px;

  ${media.tablet} {
    width: 250px;
  }
  ${media.laptopL} {
    width: 265px;
  }
`

export const Title = styled.p`
  font-size: ${theme.fontSize.mediumFont};
  margin-bottom: 4px;
`

export const Description = styled.p`
  font-size: ${theme.fontSize.bigFont};
  font-weight: 700;
  margin-top: 0px;
`

export const Text = styled.p`
  color: #757575;
`
