import React from 'react'
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
      <ModalWrapper isDrawer={drawer} onClick={(e) => e.stopPropagation()}>
        <TopBorder isDrawer={drawer} />
        <FlexButton>
          <ModalCloseButton onClick={() => dispatch(UpperLayerActions.close)}>
            X
          </ModalCloseButton>
        </FlexButton>

        <ModalViewContent isDrawer={drawer}>
          {children || renderEmpty}
        </ModalViewContent>
        <BottomBorder isDrawer={drawer} />
      </ModalWrapper>
    </ModalBackdrop>
  )
}
