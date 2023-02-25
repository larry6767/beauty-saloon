import { styled } from '@linaria/react'
import { css } from '@linaria/core'
// local
import { media, theme } from 'src/theme/index'

export const promotionsCardWrapper = css`
  &[card-wrapper='regular'] {
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

      max-width: calc(50% - 20px);

      &:nth-child(2n + 3) {
        margin: 0 0 40px 0;
      }
      margin: 0 40px 40px 0;
    }

    ${media.laptop} {
      max-width: calc(50% - 20px);

      &:nth-child(2n + 3) {
        margin: 0 0 40px 0;
      }
      margin: 0 40px 40px 0;
    }

    ${media.laptopL} {
      max-width: calc(25%);

      &:nth-child(2n + 3) {
        margin: 0 40px 40px 0;
      }
      &:nth-child(3n) {
        margin: 0 0 40px 0;
      }
      margin: 0 40px 40px 0;
    }
  }

  &[card-wrapper='bigCard'] {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    position: relative;

    width: 100%;
    min-height: 400px;

    background-color: aliceblue;

    margin: 0 0 40px 0;

    ${media.tablet} {
      justify-content: end;
      align-items: end;
      margin: 0 0 40px 0;
    }

    ${media.laptop} {
      justify-content: end;
      align-items: end;
      margin: 0 0 40px 0;
    }
    ${media.laptopL} {
      flex: 2 1;
      justify-content: end;
      align-items: end;
      margin: 0 40px 40px 0;
    }
  }
`
export const promotionsCardImage = css`
  &[card-image='regular'] {
    position: static;
    width: 100%;

    max-height: 224px;

    overflow: hidden;

    ${media.tablet} {
      max-height: 158px;
    }
  }

  &[card-image='bigCard'] {
    position: static;
    width: 100%;

    max-height: 224px;

    ${media.tablet} {
      position: absolute;
      width: 100%;
      height: 100%;
      max-height: 100%;
    }
  }
`

export const promotionsCardContentWrapper = css`
  &[card-content-wrapper='regular'] {
    position: relative;

    padding: 20px;

    z-index: 1;
    background-color: white;

    ${media.mobileS} {
      width: 100%;
    }

    ${media.tablet} {
      min-width: 262px;
    }

    ${media.laptop} {
      min-width: 262px;
    }
  }

  &[card-content-wrapper='bigCard'] {
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
  }
`
export const PromotionsCardContent = styled.div`
  display: flex;
  flex-flow: column nowrap;
  min-height: 100%;
`
export const PromotionsCardHeader = styled.h2`
  font-size: ${theme.fontSize.bigFont};
  font-weight: 400;
  line-height: 1.5;

  overflow-wrap: break-word;
`
export const PromotionsCardTextWrapper = styled.div`
  display: flex;
  flex: '1 1 auto';
`
export const PromotionsCardText = styled.p`
  color: ${theme.colors.textSecondary};
  margin-top: 10px;

  overflow-wrap: break-word;
`
export const PromotionsCardDate = styled.p`
  color: ${theme.colors.textSecondary};
  font-size: ${theme.fontSize.mediumFont};
  text-transform: lowercase;

  overflow-wrap: break-word;
`
