'use client'

// import React, { useEffect, useState } from 'react'
// import { useTranslation } from 'next-i18next'
import { usePathname } from 'next/navigation'

// local libs
import { i18n } from '@/config/i18n/i18n-config'
import { Link } from 'src/components/generic'
import { LinkWrapper } from './styles'
// types
import type { FC } from 'react'
import type { StyledLinkProps } from 'src/components/generic/Link'

export const LocalizationButton: FC<StyledLinkProps> = ({
  color,
  hoverColor,
}) => {
  const pathName = usePathname()
  const redirectedPathName = (locale: string) => {
    if (!pathName) return '/'
    const segments = pathName.split('/')
    segments[1] = locale
    return segments.join('/')
  }

  return (
    <>
      <LinkWrapper>
        {i18n.locales.map((locale) => {
          return (
            <Link
              key={locale}
              href={redirectedPathName(locale)}
              color={color}
              hoverColor={hoverColor}
              padding="10px"
            >
              {locale}
            </Link>
          )
        })}
      </LinkWrapper>
    </>
  )
}

// export const LocalizationButton = ({
//   color,
//   hoverColor,
// }: {
//   color?: string
//   hoverColor?: string
// }) => {
//   console.error(color, hoverColor)
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

// return (
//   <>
//     <LinkWrapper>
/* {languages.map((locale, i, arr) => {
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
//         })} */
//       </LinkWrapper>
//     </>
//   )
// }
