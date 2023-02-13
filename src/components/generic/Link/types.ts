import { CSSIndent } from 'src/types'

export type LinkProps = React.ComponentPropsWithoutRef<'a'> &
  StyledLinkProps & {
    href?: string
    shallow?: boolean
  }

export type StyledLinkProps = {
  withoutNextLinkWrapper?: boolean
  width?: string
  margin?: CSSIndent
  padding?: CSSIndent
  color?: string
  hoverColor?: string
  lineHeight?: `${number}px`
  textDecoration?: string
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
