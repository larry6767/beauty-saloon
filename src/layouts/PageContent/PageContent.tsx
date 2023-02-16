'use client'
import React from 'react'
import { UpperLayer } from '../UpperLayer/UpperLayer'
import { PageContentContainer } from './styles'

// Test Modal View

import { SomeComponent } from '@/components/modals/ModalView/test'
import { TestContent } from '@/components/modals/ModalView/test'

export const PageContent = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <PageContentContainer>
        {/* Start Test Modal View */}

        <UpperLayer />
        <SomeComponent></SomeComponent>

        <TestContent></TestContent>

        {/* End Test Modal View */}
        {children}
      </PageContentContainer>
    </>
  )
}
