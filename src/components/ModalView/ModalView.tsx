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
} from './styles'

import * as whiteCross from 'assets/icons/white-cross.svg'
import * as drawerCross from 'assets/icons/drawer-cross.svg'
// Types
import { FC } from 'react'
import { ModalViewProps } from './types'

// Storeon
import { useStoreon } from 'storeon/react'
import { UpperLayerActions } from '@/store/upperLayer.module'

export const ModalView: FC<ModalViewProps> = ({
  children,
  renderEmpty = <h3 style={{ margin: '10px' }}>Loading...</h3>,
  // Menu Styles
  drawer,
}) => {
  // Storeon
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
            {!drawer ? (
              <Image src={whiteCross} width={18} height={18} alt="close" />
            ) : (
              <Image src={drawerCross} width={18} height={18} alt="close" />
            )}
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
