import { styled } from '@linaria/react'

// local
import { media, theme } from 'src/theme/index'

export const BestPricesCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  position: relative;

  width: 100%;
  min-height: 400px;

  background-color: aliceblue;

  margin: 0 0 40px 0;

  ${media.tablet} {
    flex: 1;
    width: auto;

   
  }

  ${media.laptop} {
  
  }

  ${media.laptopL} {

`
export const BestPricesCardImage = styled.div`
  position: static;
  width: 100%;

  max-height: 224px;

  overflow: hidden;

  ${media.tablet} {
    max-height: 158px;
  }
`

export const BestPricesCardContentWrapper = styled.div`
  position: relative;
  padding: 20px;
  z-index: 1;
  background-color: white;

  ${media.mobileS} {
    width: 100%;
  }

  ${media.tablet} {
  }

  ${media.laptop} {
  }
`

export const BestPricesCardContent = styled.div`
  display: flex;
  flex-flow: column nowrap;
  min-height: 100%;
`
export const BestPricesCardHeader = styled.h2`
  font-size: 22px;
  font-weight: 400;
  line-height: 1.5;

  overflow-wrap: break-word;
`
export const BestPricesCardPriceWrapper = styled.div`
  display: flex;
  flex: '1 1 auto';

  justify-content: center;
`
export const BestPricesCardPrice = styled.p`
  font-size: 22px;
  color: black;
  margin-top: 10px;
  font-weight: 700;

  overflow-wrap: break-word;
`
export const BestPricesCardButton = styled.p`
  color: ${theme.colors.textSecondary};
  font-size: 16px;
  text-transform: upercase;

  text-align: center;

  overflow-wrap: break-word;
`
