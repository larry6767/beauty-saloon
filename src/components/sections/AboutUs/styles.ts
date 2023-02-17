import styled from '@emotion/styled'
import { theme } from '@/theme/theme'
import { media } from '../../../theme/breakpoints'

export const SectionContainer = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-bottom: 92px;
  margin: 60px 0;
`

export const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;

  ${media.tablet} {
    justify-content: space-between;
    flex-direction: row;
    width: 740px;
  }
  ${media.laptopL} {
    width: 1110px;
  }
`

export const TextInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${theme.colors.primary};
  padding: 0 35px;
  z-index: 1;

  ${media.tablet} {
    width: 380px;
    height: 590px;
    justify-content: center;
    padding-left: 5px;
  }
  ${media.laptopL} {
    width: 560px;
    height: 440px;
  }
`

export const Heading = styled.p`
  font-size: 20px;
  font-weight: 700;
  margin: 0px 0 5px 0;

  ${media.tablet} {
    font-size: 32px;
    margin: 10px 0 35px 0;
  }
  ${media.laptopL} {
    margin-top: -70px;
  }
`

export const HeadingLine = styled.div`
  width: 75px;
  height: 6px;
  border-radius: 4px;
  background-color: ${theme.colors.secondary};
  margin-bottom: 20px;

  ${media.tablet} {
    position: absolute;
    margin-top: -330px;
    margin-bottom: 35px;
  }
  ${media.laptopL} {
    margin-top: -310px;
  }
`

export const Title = styled.p`
  font-size: 24px;
  margin: 15px 0;
`

export const Text = styled.div`
  flex-wrap: wrap;
  color: #757575;

  ${media.tablet} {
    padding-right: 15px;
    width: 360px;
  }
  ${media.laptopL} {
    width: 540px;
  }
`

export const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  background-color: ${theme.colors.primary};
  margin-top: 30px;
  padding-bottom: 40px;

  @media (max-width: 380px) {
    flex-direction: column;
  }
  ${media.tablet} {
    flex-direction: column;
  }
  ${media.laptopL} {
    flex-direction: row;
  }
`

export const Button = styled.button`
  width: 166px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: ${theme.fontSize.bigFont};
  background-color: #464646;
  border: none;
  border-radius: 5px;
  margin-right: 25px;
  cursor: pointer;
  transition: background-color 0.4s ease-in-out;
  &:hover {
    background-color: black;
  }
  @media (max-width: 380px) {
    margin-bottom: 12px;
  }
  ${media.tablet} {
    flex-direction: column;
    margin-bottom: 12px;
  }
  ${media.laptopL} {
    margin-right: 25px;
  }
`

export const VideoBlock = styled.div`
  width: 100%;
  background-image: url(/aboutUs/about.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position-x: center;
  background-position-y: center;
  height: 308px;
  margin-right: auto;
  cursor: pointer;
  transition: all 0.7s ease;
  z-index: 0;
  &:hover {
    transition: 2s;
    transform: scale(1.07);
    opacity: 75%;
    div {
      transition: 2s;
      transform: scale(0.9);
      img {
        transition: 0.7s;
        transform: rotate(360deg);
      }
    }
  }
  @media (max-width: 380px) {
    margin-top: 20px;
  }
  ${media.tablet} {
    position: absolute;
    height: 566px;
    margin-left: 380px;
  }
  ${media.laptopL} {
    height: 412px;
    background-size: contain;
    background-position-x: left;
    margin-left: 560px;
  }
`

export const Play = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: absolute;
  margin-top: 100px;

  ${media.tablet} {
    width: 50%;
    height: 100%;
    margin-top: 0;
  }
`

export const PlayText = styled.p`
  color: white;
  font-size: 20px;
  text-shadow: 0 0 5px #757575;
  margin-top: 15px;
`
