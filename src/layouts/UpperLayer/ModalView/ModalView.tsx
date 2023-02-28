'use client'

import React from 'react'
import Image from 'next/image'
import { useStoreon } from 'storeon/react'
// local libs
import whiteCross from 'assets/icons/white-cross.svg'
import drawerCross from 'assets/icons/drawer-cross.svg'
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
import type { StaticImageData } from 'next/image'
import type { FC } from 'react'
import { ModalViewProps } from './types'
import { UpperLayerEnum } from 'src/store/upperLayer'

export const ModalView: FC<ModalViewProps> = ({
  children,
  renderEmpty = <h3 style={{ margin: '10px' }}>empty</h3>,
  kind = UpperLayerEnum.modal,
}) => {
  const { dispatch } = useStoreon('upperLayerModule')

  return (
    <ModalBackdrop
      data-kind={kind}
      onClick={() => dispatch(UpperLayerActions.close)}
    >
      <ModalWrapper
        data-loading={!children ? kind : null}
        data-kind={kind}
        onClick={(e) => e.stopPropagation()}
      >
        <TopBorder data-kind={kind} />
        <FlexButton data-kind={kind}>
          <ModalCloseButton
            data-loading={!children ? kind : null}
            data-kind={kind}
            onClick={() => dispatch(UpperLayerActions.close)}
          >
            <Image
              src={
                kind !== UpperLayerEnum.drawer
                  ? (whiteCross as StaticImageData)
                  : (drawerCross as StaticImageData)
              }
              width={18}
              height={18}
              alt="close"
            />
          </ModalCloseButton>
        </FlexButton>

        <ModalViewContent
          data-loading={!children ? kind : null}
          data-kind={kind}
        >
          {children || renderEmpty}
        </ModalViewContent>
        <BottomBorder data-kind={kind} />
      </ModalWrapper>
    </ModalBackdrop>
  )
}
