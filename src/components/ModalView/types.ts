import { CSSIndent } from 'src/types'

export type ModalViewProps = {
  children?: React.ReactNode
  renderEmpty?: React.ReactNode
  //
  drawer: boolean
}
export type StyledModalViewProps = {
  isDrawer: boolean
  loading?: number
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
