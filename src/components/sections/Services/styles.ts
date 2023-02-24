import { media } from '@/theme/breakpoints'
import { theme } from '@/theme/theme'
import { styled } from '@linaria/react'

export const ServicesWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
`

export const ServicesContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const ServicesHeaderWrapper = styled.div`
  display: flex;
  justify-content: left;
  position: relative;
  padding: 0 10px;
  margin-bottom: 20px;
`
export const ServicesHeader = styled.h2`
  font-size: 26px;
  font-weight: 700;
  line-height: 1.066;
  &::after {
    content: ' ';
    display: block;
    position: absolute;
    top: 60px;
    left: 10px;
    border-radius: 4px;
    width: 75px;
    height: 6px;
    background-color: ${theme.colors.secondary};
  }
`

export const ServicesList = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;

  ${media.mobileS} {
    max-width: 330px;
  }

  ${media.mobileL} {
    max-width: 430px;
  }

  ${media.tablet} {
    max-width: 725px;
  }

  ${media.laptop} {
    max-width: 750px;
  }

  ${media.laptopL} {
    max-width: 1100px;
  }
`
export const ServicesItem = styled.div`
  display: flex;

  width: 32%;

  margin: 0 20px 20px 0;

  background-color: ${theme.colors.textPrimary};
  border-radius: 0 20px 20px 0;

  flex-direction: column;
  align-items: center;
  width: 100%;

  margin: 0 0 20px 0;
  border-radius: 20px;

  ${media.mobileL} {
    flex-direction: column;
    align-items: center;
    width: 100%;

    margin: 0 0 20px 0;
    border-radius: 20px;
  }

  ${media.tablet} {
    flex-direction: row;

    width: 100%;

    margin: 0 0 20px 0;
  }

  ${media.laptop} {
    width: 47%;

    margin: 0 20px 20px 0;
    &:nth-child(2n) {
      margin: 0 0 20px 0;
    }
  }

  ${media.laptopL} {
    width: 32%;

    margin: 0 20px 20px 0;

    &:nth-child(2n) {
      margin: 0 20px 20px 0;
    }
    &:nth-child(3n) {
      margin: 0 0 20px 0;
    }
  }
`
export const ServicesImageWrappeer = styled.div`
  border-radius: 20px 0 0 20px;

  overflow: hidden;

  width: 100%;
  height: 200px;

  border-radius: 20px 20px 0 0;

  ${media.mobileL} {
    width: 100%;
    height: 200px;

    border-radius: 20px 20px 0 0;
  }

  ${media.tablet} {
    border-radius: 20px 0 0 20px;
  }
`
export const ServicesImage = styled.div`
  width: 200px;
  height: 200px;

  position: relative;
  top: -80px;

  width: 330px;
  height: 330px;

  ${media.mobileL} {
    position: relative;
    top: -90px;

    width: 430px;
    height: 430px;
  }

  ${media.tablet} {
    position: static;

    width: 200px;
    height: 200px;
  }
`
export const ServicesText = styled.div`
  display: flex;
  align-items: center;

  width: calc(100% - 200px);

  padding: 25px;

  ${media.mobileS} {
    justify-content: center;
  }

  ${media.mobileL} {
    justify-content: center;
  }

  ${media.tablet} {
    justify-content: flex-start;
  }
`
