export type CSSIndent =
  | `${number}px ${number}px ${number}px ${number}px`
  | `${number}px ${number}px ${number}px`
  | `${number}px ${number}px`
  | `${number}px`
  | `${number}%`

export type MediaData = {
  data: {
    attributes: {
      alternativeText: string
      id: number
      url: string
    }
  }
}
