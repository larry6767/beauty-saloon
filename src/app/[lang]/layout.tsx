import { Montserrat } from '@next/font/google'
// local libs
import { Footer, Header, PageContent, RootWrapper, UpperLayer } from '@/layouts'
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
})

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { lang: Locale }
}) {
  return (
    <html className={`${montserrat.className} scrollAuto`} lang={params.lang}>
      <Head />
      <body className="scrollAuto">
        <RootWrapper>
          <Header />
          <PageContent>{children}</PageContent>
          <Footer />
          <UpperLayer />
        </RootWrapper>
      </body>
    </html>
  )
}
