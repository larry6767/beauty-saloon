'use client'

import React from 'react'
import { useStoreon } from 'storeon/react'
import Image from 'next/image'
// local libs
import * as menuIcon from 'assets/headerIcons/menuIcon.svg'
import { UpperLayerActions } from 'src/store/upperLayer'
import { DrawerMenuContent } from 'src/components/modals/DrawerMenuContent/DrawerMenuContent'
import { MenuIcon } from './styles'

export const MenuButton = () => {
  const { dispatch } = useStoreon('upperLayer')

  return (
    <MenuIcon
      onClick={() =>
        dispatch(UpperLayerActions.open, {
          kind: 'drawer',
          content: <DrawerMenuContent />,
        })
      }
    >
      <Image src={menuIcon} width={60} height={60} alt="Menu" />
    </MenuIcon>
  )
}
