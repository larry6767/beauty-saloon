import { styled } from '@linaria/react'
import { media } from 'src/theme'

export const ReviewContainer = styled.div`
  width: 100%;

  .slick-dots {
    bottom: 0px;
    text-align: center;
    padding: 5px;
    color: black;

    ${media.tablet} {
      padding: 10px;
    }

    ${media.laptop} {
      padding: 10px;
    }
  }

  .slick-dots li button:before {
    font-size: 12px;
    color: black;
    position: relative;
  }
  .slick-slide {
    display: flex !important;
    justify-content: center;
  }
`

// export const iframeStyle = styled.iframe`
//     width: 100%;
//     border: 10px solid black;
//     padding: 60px;
// `
