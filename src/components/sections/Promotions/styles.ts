import { media } from '@/theme/breakpoints'
import styled from '@emotion/styled'
// Types
import { FlexProps } from './types'

export const PromotionsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin: 0 auto;
`

export const PromotionsList = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
`

export const PromotionsItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  position: relative;

  min-height: 400px;
  background-color: aliceblue;
`

export const PromotionsItemFirst = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  position: relative;

  min-height: 400px;

  margin: 20px;

  background-color: aliceblue;

  ${media.tablet} {
    flex: 1 1;
    justify-content: end;
    align-items: end;
  }

  ${media.laptop} {
    flex: 1 1;
    justify-content: end;
    align-items: end;
  }
`
export const PromotionsRow = styled.div`
  justify-content: space-around;
  ${media.tablet} {
    display: flex;
    width: 100%;
    height: 100%;
  }

  ${media.laptop} {
    display: flex;
    flex: 1;
    width: 100%;
    height: 100%;
  }
`
export const PromotionsItemSecond = styled.div`
  display: flex;
  flex: 0 1;

  margin: 20px;

  background-color: aliceblue;

  ${media.mobileS} {
  }

  ${media.tablet} {
    flex: 1 1;
  }
`
export const PromotionsItemThird = styled.div`
  display: flex;
  flex: 0 1;
  background-color: aliceblue;
  margin: 20px;

  ${media.tablet} {
    flex: 1 1;
  }
`
export const PromotionsOtherWrapper = styled.div`
  display: flex;

  ${media.tablet} {
    min-width: 100%;
  }
`

export const PromotionsItemOther = styled.div`
  display: flex;
  flex: 1 1;
  flex-wrap: wrap;

  margin: 20px;

  ${media.tablet} {
    max-width: calc(50% - 40px);
  }
  ${media.laptop} {
    max-width: 262px;
  }
  ${media.laptopL} {
    max-width: calc(50% - 40px);
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

export const PromotionsContentWrapper = styled.div`
  position: relative;

  height: 200px;

  padding: 20px;

  z-index: 1;
  background-color: white;

  ${media.mobileS} {
    width: 100%;
  }
  ${media.tablet} {
    width: 100%;
    height: 242px;
  }
  ${media.laptop} {
    min-width: 262px;
  }
`

export const PromotionsContentWrapperFirst = styled.div`
  position: relative;

  height: 200px;

  padding: 20px;

  z-index: 1;
  background-color: white;
  ${media.tablet} {
    height: 242px;
    max-width: calc(50% - 20px);
  }
  ${media.laptop} {
    height: 242px;
    max-width: calc(50% - 40px);
    min-width: 262px;
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
export const PromotionsHeader = styled.h2`
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

export const Flex = styled.div<FlexProps>`
  ${({ display }) => (!display ? 'display: flex' : `display: ${display}`)};
  ${({ flexFlow }) => (!flexFlow ? null : `flex-flow: ${flexFlow}`)};
  ${({ flex }) => (!flex ? null : `flex: ${flex}`)};
  ${({ justifyContent }) =>
    !justifyContent ? null : `justify-content: ${justifyContent}`};
  ${({ alignItems }) => (!alignItems ? null : `align-items: ${alignItems}`)};

  ${({ width }) => (!width ? null : `width: ${width};`)};
  ${({ height }) => (!height ? null : `height: ${height};`)};

  ${({ maxWidth }) => (!maxWidth ? null : `max-width: ${maxWidth};`)};

  ${({ minHeight }) => (!minHeight ? null : `min-height: ${minHeight};`)};
`
