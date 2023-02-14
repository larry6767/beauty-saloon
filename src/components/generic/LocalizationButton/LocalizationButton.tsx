import React from 'react'
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
  const locales = i18n.options.supportedLngs

  if (!locales) return <h3>Locales undefined</h3>
  const filtredLocales = locales.filter((locale) =>
    locale !== 'cimode' ? locale : false,
  )
  return (
    <>
      <LinkWrapper>
        {filtredLocales.map((locale, i, arr) => {
          return (
            <>
              <Link
                key={i}
                color={`${color}`}
                hoverColor={`${hoverColor}`}
                margin={'0px 2px'}
                onClick={() => changeLanguage(locale)}
              >
                {t(`localization.${locale}`)}
              </Link>
              {arr.length === i + 1 ? null : '|'}
            </>
          )
        })}
      </LinkWrapper>
    </>
  )
}
