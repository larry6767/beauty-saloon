'use client'
import React from 'react'
// Styles
import { css, Global } from '@emotion/react'
import { Container } from './styles'

// Storeon
import { StoreContext } from 'storeon/react'
import { store } from '@/store/store'

export const RootWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Global
        styles={css`
          .scrollAuto {
            scroll-behavior: auto !important;
          }
        `}
      />
      <StoreContext.Provider value={store}>
        <Container id="baseLayout">{children}</Container>
      </StoreContext.Provider>
    </>
  )
}
