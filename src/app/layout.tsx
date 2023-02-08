import { Header } from '@/layouts/Header'
import { Montserrat } from '@next/font/google'
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
    <html className={montserrat.className}>
      <Head />
      {globalStyles}
      <body>
        <main>
          <Header />
        </main>
        {children}
      </body>
    </html>
  )
}
