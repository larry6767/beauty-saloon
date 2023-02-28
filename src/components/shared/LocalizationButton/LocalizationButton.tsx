'use client'

import React, { useContext } from 'react'
import { usePathname } from 'next/navigation'
// local libs
import { i18n } from 'src/config/i18n'
import { Link } from 'src/components/generic'
import { LinkWrapper } from './styles'
import { AppContext } from 'src/layouts/RootWrapper/context'
// types
import type { FC } from 'react'
import type { StyledLinkProps } from 'src/components/generic/Link'
import { ColorsEnum } from 'src/theme'

export const LocalizationButton: FC<StyledLinkProps> = ({
  color,
  hoverColor,
}) => {
  const pathName = usePathname()
  const { lang: currentLocale } = useContext(AppContext)

  const redirectedPathName = (locale: string) => {
    if (!pathName) return '/'
    const segments = pathName.split('/')
    segments[1] = locale
    return segments.join('/')
  }

  return (
    <>
      <LinkWrapper>
        {i18n.locales.map((locale, i, arr) => {
          return (
            <React.Fragment key={locale}>
              <Link
                key={locale}
                color={
                  currentLocale === locale ? ColorsEnum.textTertiary : color
                }
                hoverColor={hoverColor}
                fontWeight={'bold'}
                textTransform="uppercase"
                padding={'4px 3px'}
                href={redirectedPathName(locale)}
              >
                {locale}
              </Link>
              {arr.length === i + 1 ? null : '|'}
            </React.Fragment>
          )
        })}
      </LinkWrapper>
    </>
  )
}
