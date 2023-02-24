import { Montserrat } from '@next/font/google'
// local libs
import { Footer, Header, PageContent, RootWrapper, UpperLayer } from '@/layouts'
import Head from './head'
import 'normalize.css'
import './style.linaria.global'

const montserrat = Montserrat({
  weight: ['400', '700'],
  style: ['normal'],
  subsets: ['cyrillic'],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className={`${montserrat.className} scrollAuto`}>
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
