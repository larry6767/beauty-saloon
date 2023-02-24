import { media } from '@/theme/breakpoints'
import { theme } from '@/theme/theme'
import { styled } from '@linaria/react'
// Types
// import { FlexProps } from './types'

export const PromotionsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;

  padding: 0 35px;
  margin: 0 0;

  ${media.tablet} {
    padding: 0;
  }
`
export const PromotionsContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const PromotionsHeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  position: relative;
  margin-bottom: 20px;

  ${media.tablet} {
    flex-direction: row;
    justify-content: space-between;
  }
`
export const PromotionsHeader = styled.h2`
  font-size: 20px;
  font-weight: 700;
  line-height: 1.066;

  order: 2;

  &::after {
    content: ' ';
    display: block;
    position: absolute;
    top: 70px;
    left: 0;
    border-radius: 4px;
    width: 75px;
    height: 6px;
    background-color: ${theme.colors.secondary};
  }

  ${media.tablet} {
    order: 1;
    font-size: 32px;
    &::after {
      top: 80px;
    }
  }
`
export const PromotionsLink = styled.div`
  display: flex;
  align-items: center;

  order: 1;

  text-transform: uppercase;

  ${media.tablet} {
    order: 2;
    &::after {
      top: 80px;
    }
  }
`

export const PromotionsList = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;

  ${media.tablet} {
    align-items: flex-start;

    max-width: 700px;
  }

  ${media.laptop} {
    align-items: flex-start;

    max-width: 700px;
  }

  ${media.laptopL} {
    max-width: 1075px;
  }
`

export const PromotionsItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  position: relative;

  width: 100%;
  min-height: 400px;

  background-color: aliceblue;

  ${media.tablet} {
    width: auto;
  }
`

export const PromotionsItemFirst = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  position: relative;

  width: 100%;
  min-height: 400px;

  background-color: aliceblue;

  margin: 0 0 40px 0;

  ${media.tablet} {
    flex: 1 1;
    justify-content: end;
    align-items: end;
    margin: 0 0 40px 0;
  }

  ${media.laptop} {
    flex: 1 1;
    justify-content: end;
    align-items: end;
    margin: 0 0 40px 0;
  }
  ${media.laptopL} {
    flex: 1 1;
    justify-content: end;
    align-items: end;
    margin: 0 40px 40px 0;
  }
`
export const PromotionsRow = styled.div`
  justify-content: space-around;
  width: 100%;

  ${media.tablet} {
    display: flex;
    width: 100%;
    height: 100%;
  }

  ${media.laptop} {
    display: flex;
    width: 100%;
    height: 100%;
  }

  ${media.laptopL} {
    display: flex;
    flex: 1;
    width: 100%;
    height: 100%;
  }
`
export const PromotionsItemSecond = styled.div`
  display: flex;
  flex: 0 1;

  background-color: aliceblue;

  margin: 0 0 40px 0;

  ${media.mobileS} {
  }

  ${media.tablet} {
    flex: 1 1;
    margin: 0 40px 40px 0;
  }

  ${media.laptop} {
    margin: 0 40px 40px 0;
  }
`
export const PromotionsItemThird = styled.div`
  display: flex;
  flex: 0 1;
  background-color: aliceblue;

  margin: 0 0 40px 0;

  ${media.tablet} {
    flex: 1 1;
    margin: 0 0 40px 0;
  }

  ${media.laptop} {
    margin: 0 0 40px 0;
  }
`
export const PromotionsOtherWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  ${media.tablet} {
    flex-direction: row;
    flex-wrap: wrap;

    min-width: 100%;
  }
`

export const PromotionsItemOther = styled.div`
  display: flex;
  flex: 1 1;
  flex-wrap: wrap;

  margin: 0 0 40px 0;

  ${media.tablet} {
    max-width: calc(50% - 40px);
    max-width: calc(50% - 20px);

    margin: 0 40px 40px 0;
    &:nth-child(2n) {
      margin: 0 0 40px 0;
    }
  }
  ${media.laptop} {
    max-width: calc(50% - 20px);

    margin: 0 40px 40px 0;
    &:nth-child(2n) {
      margin: 0 0 40px 0;
    }
  }
  ${media.laptopL} {
    max-width: calc(22% - 4px);

    margin: 0 40px 40px 0;
    &:nth-child(2n) {
      margin: 0 40px 40px 0;
    }
    &:nth-child(4n) {
      margin: 0 0 40px 0;
    }
  }
`

export const PromotionsImage = styled.div`
  position: static;
  width: 100%;
  height: 200px;

  max-height: 158px;

  overflow: hidden;
`

export const PromotionsImageFirst = styled.div`
  position: static;
  width: 100%;
  height: 158px;
  max-height: 158px;

  ${media.tablet} {
    position: absolute;
    width: 100%;
    height: 100%;
    max-height: 100%;
  }
`

export const PromotionsItemContentWrapper = styled.div`
  position: relative;

  padding: 20px;

  z-index: 1;
  background-color: white;

  ${media.mobileS} {
    width: 100%;
  }
  ${media.tablet} {
    width: 100%;
  }
  ${media.laptop} {
    width: 100%;
  }

  ${media.laptopL} {
    min-width: 262px;
  }
`

export const PromotionsContentWrapperFirst = styled.div`
  position: relative;

  padding: 20px;

  z-index: 1;
  background-color: white;
  ${media.tablet} {
    max-width: calc(50% - 20px);
    min-width: 262px;
  }
  ${media.laptop} {
    height: 100%;
    width: 100%;
  }
`
export const PromotionsContentWrapperOther = styled.div`
  position: relative;

  height: 200px;

  padding: 20px;

  z-index: 1;
  background-color: white;

  ${media.mobileS} {
    width: 100%;
  }
  ${media.tablet} {
    min-width: 262px;
    height: 242px;
  }
  ${media.laptop} {
    min-width: 262px;
    height: 242px;
  }
`
export const PromotionsItemHeader = styled.h2`
  font-size: 14px;
  font-weight: 400;
  line-height: 1.5;

  overflow-wrap: break-word;
`
export const PromotionsText = styled.p`
  color: #707070;
  margin-top: 10px;

  overflow-wrap: break-word;
`
export const PromotionsDate = styled.p`
  color: #707070;
  font-size: 12px;
  text-transform: lowercase;

  overflow-wrap: break-word;
`

// export const Flex = styled.div<FlexProps>`
//   ${({ display }) => (!display ? 'display: flex' : `display: ${display}`)};
//   ${({ flexFlow }) => (!flexFlow ? null : `flex-flow: ${flexFlow}`)};
//   ${({ flex }) => (!flex ? null : `flex: ${flex}`)};
//   ${({ justifyContent }) =>
//     !justifyContent ? null : `justify-content: ${justifyContent}`};
//   ${({ alignItems }) => (!alignItems ? null : `align-items: ${alignItems}`)};

//   ${({ width }) => (!width ? null : `width: ${width};`)};
//   ${({ height }) => (!height ? null : `height: ${height};`)};

//   ${({ maxWidth }) => (!maxWidth ? null : `max-width: ${maxWidth};`)};

//   ${({ minHeight }) => (!minHeight ? null : `min-height: ${minHeight};`)};
// `
