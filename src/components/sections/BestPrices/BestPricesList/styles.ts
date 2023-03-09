import { styled } from '@linaria/react'
// Local
import { media } from 'src/theme/index'

export const BestPricesListWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: flex-start;

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

  //

  .slick-slider {
    overflow: hidden;
    width: 300px;

    ${media.mobileM} {
      width: 620px;
    }
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

  .slick-dots {
    bottom: 0;
    padding: 0;
  }
  .slick-arrow {
    display: none !important;
  }

  .slick-slide {
    margin: 0 10px;
  }
`
