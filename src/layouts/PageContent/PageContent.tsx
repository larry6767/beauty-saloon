'use client'
import React from 'react'
import { Advantages } from '../Advantages/Advantages'
import { PageContentContainer } from './styles'

export const PageContent = ({ children }: { children: React.ReactNode }) => {
  return (
    <PageContentContainer>
      <Advantages />
      {children}
    </PageContentContainer>
  )
}
