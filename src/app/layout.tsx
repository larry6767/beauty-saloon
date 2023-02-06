/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @next/next/no-page-custom-font */
// ;C

'use client'
import { BaseLayoutComponent } from '@/layouts/BaseLayout/BaseLayout'
import { globalStyles } from 'src/theme'
import Head from './head'
// Storeon
import { store } from '@/store/store'
import { StoreContext } from 'storeon/react'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      {globalStyles}

      <body>
        <StoreContext.Provider value={store}>
          <BaseLayoutComponent>{children}</BaseLayoutComponent>
        </StoreContext.Provider>
      </body>
    </html>
  )
}
