'use client'

import React from 'react'
import { StoreContext } from 'storeon/react'
// local libs
import { store } from 'src/store'
import { AppContext } from './context'
import { Container, Overflow } from './styles'
import { baseLayoutId } from './consts'
// types
import type { FC } from 'react'
import type { RootWrapperProps } from './types'

export const RootWrapper: FC<RootWrapperProps> = ({ lang, children }) => {
  return (
    <AppContext.Provider value={{ lang }}>
      <StoreContext.Provider value={store}>
        <Overflow id={baseLayoutId}>
          <Container>{children}</Container>
        </Overflow>
      </StoreContext.Provider>
    </AppContext.Provider>
  )
}
