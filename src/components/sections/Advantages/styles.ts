import { media } from '@/theme'
import { theme } from '@/theme/theme'
import { styled } from '@linaria/react'
export const FlexCenter = styled.div`
  display: flex;
  // flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;
`

export const AdvantagesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  max-width: 400px;

  ${media.mobileL} {
    max-width: 650px;
    margin: 0 20px;
  }

  ${media.tablet} {
    max-width: 750px;
  }

  ${media.laptop} {
    max-width: 750px;
  }

  ${media.laptopL} {
    max-width: 1150px;
  }
`

export const AdvantagesHeaderWrapper = styled.div`
  display: flex;
  justify-content: left;

  position: relative;

  padding: 0 10px;
`
export const AdvantagesHeader = styled.h2`
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

export const AdvantagesListWrapper = styled.div`
  display: flex;
  justify-content: center;
`

export const AdvantagesList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  justify-content: flex-start;

  ${media.laptop} {
    justify-content: flex-start;
  }
`
export const AdvantagesItem = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;

  min-height: 60px;
  padding: 15px 0 15px 0;

  width: 100%;

  ${media.mobileL} {
    width: 50%;
  }

  ${media.laptop} {
    width: 25%;
  }

  ${media.laptopL} {
    width: 25%;
  }
`
export const AdvantagesImage = styled.div`
  margin: 10px;
`
export const AdvantagesTextWrapper = styled.div`
  width: 100%;
  max-width: 100%;
  margin: 10px;

  ${media.mobileL} {
    width: 100%;
  }

  ${media.laptop} {
    width: 120px;
  }

  ${media.laptopL} {
    width: 120px;
  }
`

export const AdvantagesText = styled.p`
  width: 100%;

  text-align: left;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.5;
  font-style: unset;
`
