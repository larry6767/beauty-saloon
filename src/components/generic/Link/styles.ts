import { styled } from '@linaria/react'
// local libs
import { ColorsEnum, theme } from 'src/theme'

export const StyledLink = styled.a`
  display: inline-block;
  line-height: 1.5;
  text-decoration: none;
  cursor: pointer;

  &[data-hover-kind='${ColorsEnum.textSecondary}'] {
    &:hover {
      color: ${theme.colors.textSecondary};
    }
  }

  &[data-hover-kind='${ColorsEnum.textTertiary}'] {
    &:hover {
      color: ${theme.colors.textTertiary};
    }
  }

  &[data-color-kind='${ColorsEnum.textPrimary}'] {
    color: ${theme.colors.primary};
  }

  &[data-color-kind='${ColorsEnum.textSecondary}'] {
    color: ${theme.colors.textSecondary};
  }

  &[data-color-kind='${ColorsEnum.textTertiary}'] {
    color: ${theme.colors.textTertiary};
  }
`

export const StyledLinkWithoutNextLinkWrapper = styled(StyledLink)`
  box-shadow: none;
  outline: none;
  background: none;
  border: none;
`
