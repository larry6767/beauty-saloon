import type { PropsWithChildren } from 'react'
import type { Locale } from 'src/config/i18n'

export type RootWrapperProps = PropsWithChildren<{
  lang: Locale
}>

export type AppContextType = {
  lang: Locale
}
