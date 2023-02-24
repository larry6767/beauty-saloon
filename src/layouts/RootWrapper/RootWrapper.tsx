'use client'

import React from 'react'
// local libs
import { Container, Overflow } from './styles'
import { StoreContext } from 'storeon/react'
import { store } from '@/store'
import { baseLayoutId } from './consts'

export const RootWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <StoreContext.Provider value={store}>
        <Overflow id={baseLayoutId}>
          <Container>{children}</Container>
        </Overflow>
      </StoreContext.Provider>
    </>
  )
}
