'use client'

import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
// local libs
import { Link } from 'src/components/generic/Link'
import 'src/utils/i18next'
import { changeLanguage } from 'src/utils/i18next'
import { LinkWrapper } from './styles'
// types
import type { FC } from 'react'
import type { StyledLinkProps } from 'src/components/generic/Link'

export const LocalizationButton: FC<StyledLinkProps> = ({
  color,
  hoverColor,
}) => {
  const { t, i18n } = useTranslation()
  const [languages, setLanguages] = useState<Array<string>>()
  const locales = i18n.options.supportedLngs
  window.navigator.languages

  useEffect(() => {
    if (locales) {
      const filtredLocales = locales.filter((locale) =>
        locale !== 'cimode' ? locale : false,
      )
      setLanguages(filtredLocales)
    }
    // eslint-disable-next-line
  }, [])

  if (!languages) return <></>

  return (
    <>
      <LinkWrapper>
        {languages.map((locale, i, arr) => {
          return (
            <React.Fragment key={locale}>
              <Link
                key={locale}
                color={color}
                hoverColor={hoverColor}
                fontWeight={'bold'}
                padding={'4px 3px'}
                onClick={() => changeLanguage(locale)}
              >
                {t(`localization.${locale}`)}
              </Link>
              {arr.length === i + 1 ? null : '|'}
            </React.Fragment>
          )
        })}
      </LinkWrapper>
    </>
  )
}
