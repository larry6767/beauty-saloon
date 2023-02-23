'use client'

import { createPortal } from 'react-dom'
import { useStoreon } from 'storeon/react'
import FocusLock from 'react-focus-lock'
// local libs
import { UpperLayerEnum, UpperLayerState } from '@/store/upperLayer'
import { ModalView } from '@/layouts/UpperLayer/ModalView/ModalView'

export const UpperLayer = () => {
  const {
    upperLayer: { isOpen, kind, content },
  }: UpperLayerState = useStoreon('upperLayer')

  const kindMapping = {
    [UpperLayerEnum.modal]: <ModalView drawer={false}>{content}</ModalView>,
    [UpperLayerEnum.drawer]: <ModalView drawer={true}>{content}</ModalView>,
  }

  return !isOpen
    ? null
    : createPortal(
        <FocusLock>{kind && kindMapping[kind]}</FocusLock>,
        document.body,
      )
}
