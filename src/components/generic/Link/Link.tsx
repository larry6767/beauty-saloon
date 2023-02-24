import React from 'react'
import { default as NextLink } from 'next/link'
//local libs
import { StyledLink, StyledLinkWithoutNextLinkWrapper } from './styles'
import { theme } from 'src/theme'
//types
import type { FC, CSSProperties } from 'react'
import type { LinkProps } from './types'

export const Link: FC<LinkProps> = ({
  href = '/',
  shallow,
  width,
  margin,
  padding,
  color,
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
    color,
    lineHeight,
    fontSize,
    transform,
    fontWeight,
  }

  return withoutNextLinkWrapper ? (
    <StyledLinkWithoutNextLinkWrapper
      as="button"
      type="button"
      style={styledLinkStyles}
      {...rest}
    >
      {children}
    </StyledLinkWithoutNextLinkWrapper>
  ) : (
    <NextLink href={href} passHref shallow={shallow} legacyBehavior>
      <StyledLink style={styledLinkStyles} {...rest}>
        {children}
      </StyledLink>
    </NextLink>
  )
}
