import { styled } from '@linaria/react'
// Local
import { media } from 'src/theme/index'

export const PromotionsListWrapper = styled.div`
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
`
