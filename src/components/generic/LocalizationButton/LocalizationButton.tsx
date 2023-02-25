'use client'

// import React, { useEffect, useState } from 'react'
// import { useTranslation } from 'next-i18next'
// local libs
// import { Link } from 'src/components/generic/Link'
// import { changeLanguage } from 'src/utils/i18next'
import { LinkWrapper } from './styles'

export const LocalizationButton = ({
  color,
  hoverColor,
}: {
  color?: string
  hoverColor?: string
}) => {
  console.error(color, hoverColor)
  // const { t, i18n } = useTranslation()
  // const [languages, setLanguages] = useState<Array<string>>()
  // const locales = i18n.options.supportedLngs

  // useEffect(() => {
  //   if (locales) {
  //     const filtredLocales = locales.filter((locale) =>
  //       locale !== 'cimode' ? locale : false,
  //     )
  //     setLanguages(filtredLocales)
  //   }
  //   // eslint-disable-next-line
  // }, [])

  // if (!languages) return <></>

  return (
    <>
      <LinkWrapper>
        {/* {languages.map((locale, i, arr) => {
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
        })} */}
      </LinkWrapper>
    </>
  )
}
