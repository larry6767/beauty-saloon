import React from 'react'
import { Link } from '../Link'
import { useTranslation } from 'react-i18next'
import '../../../utils/i18next'
import { changeLanguage } from '../../../utils/i18next'

export const LocalizationButton = ({ color }: { color: string }) => {
  const { t, i18n } = useTranslation()
  const locales = i18n.options.supportedLngs

  if (!locales) return <h3>Locales undefined</h3>
  return (
    <>
      {locales.map((locale, i, arr) => {
        if (locale !== 'cimode') {
          return (
            <>
              <Link
                key={i}
                color={`${color}`}
                onClick={() => changeLanguage(locale)}
              >
                {t(`localization.${locale}`)}
              </Link>
              {arr.length === i + 1 ? null : '|'}
            </>
          )
        } else {
          return
        }
      })}
    </>
  )
}
