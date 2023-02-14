import { theme } from '@/theme/theme'
import styled from '@emotion/styled'

//types
import type { StyledLinkProps } from './types'

export const StyledLink = styled.a<StyledLinkProps>`
  display: inline-block;
  line-height: 1.5;
  text-decoration: none;
  color: white;
  font-size: ${({ fontSize }) =>
    fontSize ? fontSize : theme.fontSize.mediumFont};

  ${({ margin }) => (!margin ? null : `margin: ${margin}`)};
  ${({ padding }) => (!padding ? null : `padding: ${padding}`)};
  ${({ weight }) => (!weight ? null : `font-weight: ${weight}`)};
  ${({ transform }) => (!transform ? null : `text-transform: ${transform}`)};
  ${({ color }) => (!color ? null : `color: ${color}`)};
  ${({ lineHeight }) => (!lineHeight ? null : `line-height: ${lineHeight}`)};

  ${({ withoutNextLinkWrapper }) =>
    withoutNextLinkWrapper
      ? `
      box-shadow: none;
      outline: none;
      background: none;
      border: none;
    `
      : null};

  cursor: pointer;

  &:hover {
    color: black;
  }
`
