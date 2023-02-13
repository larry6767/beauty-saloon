'use client'
import React from 'react'
import { DrawerMenuContent } from '../DrawerMenuContent/DrawerMenuContent'
import { PageContentContainer } from './styles'

export const PageContent = ({ children }: { children: React.ReactNode }) => {
  return (
    <PageContentContainer>
      <DrawerMenuContent></DrawerMenuContent>
      {children}
    </PageContentContainer>
  )
}
