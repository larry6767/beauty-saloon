import React from 'react'
import { useEffect, useState } from 'react'
import { Link } from '../Link'
import { useTranslation } from 'react-i18next'
import '../../../utils/i18next'
import { changeLanguage } from '../../../utils/i18next'
import { LinkWrapper } from './styles'

export const LocalizationButton = ({
  color,
  hoverColor,
}: {
  color?: string
  hoverColor?: string
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
                color={`${color}`}
                hoverColor={`${hoverColor}`}
                margin={'0px 2px'}
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
