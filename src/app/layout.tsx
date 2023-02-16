import { Footer } from '@/layouts/Footer'
import { Header } from '@/layouts/Header'
import { PageContent } from '@/layouts/PageContent'
import { RootWrapper } from '@/layouts/RootWrapper'
import { Montserrat } from '@next/font/google'
// import { Suspense } from 'react'
// local libs
import { globalStyles } from 'src/theme'

import Head from './head'

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
    // <Suspense fallback={''}>
    <html className={`${montserrat.className} scrollAuto`}>
      <Head />
      {globalStyles}
      <body className="scrollAuto">
        <RootWrapper>
          <Header />
          <PageContent>{children}</PageContent>
          <Footer />
        </RootWrapper>
      </body>
    </html>
    // </Suspense>
  )
}
