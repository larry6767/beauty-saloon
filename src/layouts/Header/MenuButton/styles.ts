import { styled } from '@linaria/react'
import { media } from 'src/theme/breakpoints'

export const MenuIcon = styled.div`
  position: absolute;
  top: 100px;
  left: 35px;
  cursor: pointer;

  &:hover {
    filter: contrast(200%);
  }

  ${media.tablet} {
    display: none;
  }
`
