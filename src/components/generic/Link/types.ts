import { CSSIndent } from 'src/types'

export type LinkProps = React.ComponentPropsWithoutRef<'a'> &
  Styles &
  Partial<StyledLinkProps> & {
    href?: string
    shallow?: boolean
  }

export type Styles = {
  withoutNextLinkWrapper?: boolean
  width?: string
  margin?: CSSIndent
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
  fontWeight?:
    | 'normal'
    | 'bold'
    | 'bolder'
    | 'lighter'
    | 100
    | 200
    | 300
    | 400
    | 500
    | 600
    | 700
    | 800
    | 900
    | 'initial'
    | 'inherit'
}

export type StyledLinkProps = {
  hoverColor: string
}
