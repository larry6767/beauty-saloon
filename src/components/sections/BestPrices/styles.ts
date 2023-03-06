import { media } from '@/theme/breakpoints'
import { theme } from '@/theme/theme'
import { styled } from '@linaria/react'
// Types
// import { FlexProps } from './types'

export const BestPricesWrapper = styled.div`
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
export const BestPricesContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const BestPricesHeaderWrapper = styled.div`
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
export const BestPricesHeader = styled.h2`
  font-size: 20px;
  font-weight: 700;
  line-height: 1.066;

  order: 2;

  &::after {
    content: ' ';
    display: block;
    position: absolute;
    top: 50px;
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
