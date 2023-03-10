import { CSSIndent } from 'src/types'

export type LinkProps = React.ComponentPropsWithoutRef<'a'> &
  StyledLinkProps & {
    href?: string
    shallow?: boolean
  }

export type StyledLinkProps = {
  withoutNextLinkWrapper?: boolean
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
