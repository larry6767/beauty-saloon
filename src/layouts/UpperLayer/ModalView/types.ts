import { UpperLayerEnum } from 'src/store/upperLayer'

export type ModalViewProps = {
  children?: React.ReactNode
  renderEmpty?: React.ReactNode
  kind: UpperLayerEnum
}
