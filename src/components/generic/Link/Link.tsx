import React from 'react'
import { default as NextLink } from 'next/link'
//local libs
import { StyledLink } from './styles'
//types
import type { FC } from 'react'
import type { LinkProps } from './types'

export const Link: FC<LinkProps> = ({
  href = '/',
  shallow,
  width,
  margin,
  padding,
  color,
  hoverColor,
  lineHeight,
  fontSize,
  transform,
  weight,
  withoutNextLinkWrapper, //для случаев, когда кнопка мимикрирует под ссылку
  children,
  ...rest
}) => {
  const commonProps = {
    width,
    margin,
    padding,
    color,
    hoverColor,
    lineHeight,
    fontSize,
    transform,
    weight,
  }
  return withoutNextLinkWrapper ? (
    <StyledLink
      as="button"
      type="button"
      withoutNextLinkWrapper
      {...commonProps}
      {...rest}
    >
      {children}
    </StyledLink>
  ) : (
    <NextLink href={href} passHref shallow={shallow} legacyBehavior>
      <StyledLink {...commonProps} {...rest}>
        {children}
      </StyledLink>
    </NextLink>
  )
}
