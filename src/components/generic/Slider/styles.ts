import styled from '@emotion/styled'
import Slider from 'react-slick'
// local libs
import { media } from 'src/theme'
// types
import type { WrapProps } from './types'

export const Wrap = styled.div<WrapProps>`
  cursor: pointer;
  overflow: hidden;
  position: relative;
  width: 100%;
  padding-top: ${({ heightRatio }) => heightRatio};
`

export const Carousel = styled(Slider)`
  .slick-dots {
    bottom: 20px;
    text-align: center;
    padding: 0px;

    ${media.tablet} {
      padding: 10px;
    }

    ${media.laptop} {
      padding: 20px;
    }
  }

  .slick-dots li button:before {
    font-size: 10px;
  }
`
