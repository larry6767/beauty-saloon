import React from 'react'
import { BaseLayout } from './style'
//
import { useStoreon } from 'storeon/react'
import { State, Events } from '../store'

export const BaseLayoutComponent = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const { modal } = useStoreon<State, Events>('modal')

  return <BaseLayout isVisible={modal}>{children}</BaseLayout>
}
