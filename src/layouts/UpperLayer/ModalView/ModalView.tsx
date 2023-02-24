'use client'

import React from 'react'
import Image from 'next/image'
import { useStoreon } from 'storeon/react'
// local libs
import * as whiteCross from 'assets/icons/white-cross.svg'
import * as drawerCross from 'assets/icons/drawer-cross.svg'
import { UpperLayerActions } from '@/store/upperLayer'
import {
  TopBorder,
  BottomBorder,
  ModalBackdrop,
  ModalViewContent,
  ModalCloseButton,
  ModalWrapper,
  FlexButton,
} from './styles'
// types
import type { FC } from 'react'
import type { ModalViewProps } from './types'

export const ModalView: FC<ModalViewProps> = ({
  children,
  renderEmpty = <h3 style={{ margin: '10px' }}>empty</h3>,
  drawer,
}) => {
  const { dispatch } = useStoreon('upperLayerModule')

  return (
    <ModalBackdrop
      isDrawer={drawer}
      onClick={() => dispatch(UpperLayerActions.close)}
    >
      <ModalWrapper
        loading={!children ? 1 : 0}
        isDrawer={drawer}
        onClick={(e) => e.stopPropagation()}
      >
        <TopBorder isDrawer={drawer} />
        <FlexButton isDrawer={drawer}>
          <ModalCloseButton
            loading={!children ? 1 : 0}
            isDrawer={drawer}
            onClick={() => dispatch(UpperLayerActions.close)}
          >
            <Image
              src={!drawer ? whiteCross : drawerCross}
              width={18}
              height={18}
              alt="close"
            />
          </ModalCloseButton>
        </FlexButton>

        <ModalViewContent loading={!children ? 1 : 0} isDrawer={drawer}>
          {children || renderEmpty}
        </ModalViewContent>
        <BottomBorder isDrawer={drawer} />
      </ModalWrapper>
    </ModalBackdrop>
  )
}
