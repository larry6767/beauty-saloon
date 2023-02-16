import { createPortal } from 'react-dom'
// Focus Lock
import FocusLock from 'react-focus-lock'
// Storeon
import { useStoreon } from 'storeon/react'
import { UpperLayerEnum, UpperLayerState } from '@/store/upperLayer.module'
import { ModalView } from '@/components/modals/ModalView/ModalView'

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
