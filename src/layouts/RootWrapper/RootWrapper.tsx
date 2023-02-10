'use client'
import React from 'react'
import { Container } from './styles'

export const RootWrapper = ({ children }: { children: React.ReactNode }) => {
  return <Container>{children}</Container>
}
