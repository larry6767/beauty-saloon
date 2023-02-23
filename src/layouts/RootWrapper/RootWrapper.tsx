'use client'

import React from 'react'
import { css, Global } from '@emotion/react'
// local libs
import { Container, Overflow } from './styles'
import { StoreContext } from 'storeon/react'
import { store } from '@/store'
import { baseLayoutId } from './consts'

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
        <Overflow id={baseLayoutId}>
          <Container>{children}</Container>
        </Overflow>
      </StoreContext.Provider>
    </>
  )
}
