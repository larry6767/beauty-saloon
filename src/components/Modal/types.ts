import { CSSIndent } from 'src/types'
// Storeon
import { StoreonDispatch } from 'storeon'
import { Events } from '../../store/store'

export type ModalProps = {
  children?: React.ReactNode
  renderEmpty?: React.ReactNode
  //
  state: StoreonDispatch<Events> | (() => void)
  event: 'toggle'
  data: boolean
  modal: boolean
  //
  isMenu: boolean
}
export type StyledModalProps = {
  menu?: boolean
  isVisible?: boolean
  display?: string
  padding?: CSSIndent
  color?: string
  lineHeight?: `${number}px`
  fontSize?: `${number}px`
  transform?:
    | 'none'
    | 'capitalize'
    | 'uppercase'
    | 'lowercase'
    | 'initial'
    | 'inherit'
  weight?:
    | 'normal'
    | 'bold'
    | 'bolder'
    | 'lighter'
    | 'number'
    | 'initial'
    | 'inherit'
}
