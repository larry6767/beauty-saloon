import React from 'react'
import Image from 'next/image'
// Styles
import {
  TopBorder,
  BottomBorder,
  ModalBackdrop,
  ModalViewContent,
  ModalCloseButton,
  ModalWrapper,
  FlexButton,
} from './style'

import * as whiteCross from 'public/img/svg/white-cross.svg'
import * as drawerCross from 'public/img/svg/drawer-cross.svg'
// Types
import { FC } from 'react'
import { ModalViewProps } from './types'

// Storeon
import { useStoreon } from 'storeon/react'
import { UpperLayerActions } from '@/store/upperLayer.module'

export const ModalView: FC<ModalViewProps> = ({
  children,
  renderEmpty = <h3>Loading...</h3>,
  // Menu Styles
  drawer,
}) => {
  const { dispatch } = useStoreon('upperLayerModule')

  // Escape close

  const escHandler = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      dispatch(UpperLayerActions.close)
      document.removeEventListener('keydown', escHandler)
    }
    return
  }
  document.addEventListener('keydown', escHandler)

  return (
    <ModalBackdrop
      isDrawer={drawer}
      onClick={() => dispatch(UpperLayerActions.close)}
    >
      <ModalWrapper
        loading={!children ? true : false}
        isDrawer={drawer}
        onClick={(e) => e.stopPropagation()}
      >
        <TopBorder isDrawer={drawer} />
        <FlexButton isDrawer={drawer}>
          <ModalCloseButton
            loading={!children ? true : false}
            isDrawer={drawer}
            onClick={() => dispatch(UpperLayerActions.close)}
          >
            {!drawer ? (
              <Image src={whiteCross} width={18} height={18} alt="close" />
            ) : (
              <Image src={drawerCross} width={18} height={18} alt="close" />
            )}
          </ModalCloseButton>
        </FlexButton>

        <ModalViewContent loading={!children ? true : false} isDrawer={drawer}>
          {children || renderEmpty}
        </ModalViewContent>
        <BottomBorder isDrawer={drawer} />
      </ModalWrapper>
    </ModalBackdrop>
  )
}
