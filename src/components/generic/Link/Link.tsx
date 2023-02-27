import React from 'react'
import { default as NextLink } from 'next/link'
//local libs
import { StyledLink, StyledLinkWithoutNextLinkWrapper } from './styles'
import { ColorsEnum, theme } from 'src/theme'
//types
import type { FC, CSSProperties } from 'react'
import type { LinkProps } from './types'

export const Link: FC<LinkProps> = ({
  href = '/',
  shallow,
  width,
  margin,
  padding,
  color = ColorsEnum.textPrimary,
  hoverColor = ColorsEnum.textSecondary,
  lineHeight,
  fontSize = theme.fontSize.mediumFont,
  transform,
  fontWeight,
  withoutNextLinkWrapper, // для случаев, когда кнопка мимикрирует под ссылку
  children,
  ...rest
}) => {
  const styledLinkStyles: CSSProperties = {
    width,
    margin,
    padding,
    lineHeight,
    fontSize,
    transform,
    fontWeight,
  }

  return withoutNextLinkWrapper ? (
    <StyledLinkWithoutNextLinkWrapper
      data-hover-kind={hoverColor}
      data-color-kind={color}
      as="button"
      type="button"
      style={styledLinkStyles}
      {...rest}
    >
      {children}
    </StyledLinkWithoutNextLinkWrapper>
  ) : (
    <NextLink href={href} passHref shallow={shallow} legacyBehavior>
      <StyledLink
        data-hover-kind={hoverColor}
        data-color-kind={color}
        style={styledLinkStyles}
        {...rest}
      >
        {children}
      </StyledLink>
    </NextLink>
  )
}
