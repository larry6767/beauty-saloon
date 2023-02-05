'use client'
import { BaseLayoutComponent } from '@/pages/api/BaseLayout/BaseLayout'
import './globals.css'
//
import { store } from '@/pages/api/store'
import { StoreContext } from 'storeon/react'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <StoreContext.Provider value={store}>
        <BaseLayoutComponent>{children}</BaseLayoutComponent>
      </StoreContext.Provider>

      {/* <body></body> */}
    </html>
  )
}
