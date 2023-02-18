'use client'
import React from 'react'
import { PageContentContainer } from './styles'

export const PageContent = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <PageContentContainer>{children}</PageContentContainer>
    </>
  )
}
