import { Montserrat } from '@next/font/google'
// local libs
import {
  Footer,
  Header,
  PageContent,
  RootWrapper,
  UpperLayer,
} from 'src/layouts'
import Head from './head'
import 'normalize.css'
import './style.linaria.global'
import { i18n } from 'src/config/i18n/i18n-config'
// types
import type { Locale } from 'src/config/i18n/i18n-config'

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }))
}

const montserrat = Montserrat({
  weight: ['400', '700'],
  style: ['normal'],
  subsets: ['cyrillic'],
  display: 'swap',
})

export default function RootLayout({
  children,
  params: { lang },
}: {
  children: React.ReactNode
  params: { lang: Locale }
}) {
  return (
    <html className={`${montserrat.className} scrollAuto`} lang={lang}>
      <Head />
      <body className="scrollAuto">
        <RootWrapper lang={lang}>
          {/* @ts-expect-error Server Component */}
          <Header lang={lang} />
          <PageContent>{children}</PageContent>
          {/* @ts-expect-error Server Component */}
          <Footer lang={lang} />
          <UpperLayer />
        </RootWrapper>
      </body>
    </html>
  )
}
