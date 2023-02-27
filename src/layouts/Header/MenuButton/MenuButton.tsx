'use client'

import React from 'react'
import { useStoreon } from 'storeon/react'
import Image from 'next/image'
// local libs
import menuIcon from 'assets/headerIcons/menuIcon.svg'
import { UpperLayerActions } from 'src/store/upperLayer'
import { DrawerMenuContent } from 'src/components/modals/DrawerMenuContent/DrawerMenuContent'
import { MenuIcon } from './styles'
// types
import type { StaticImageData } from 'next/image'

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
      <Image
        src={menuIcon as StaticImageData}
        width={60}
        height={60}
        alt="Menu"
      />
    </MenuIcon>
  )
}
