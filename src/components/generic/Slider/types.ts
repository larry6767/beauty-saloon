import type { Settings } from 'react-slick'

export type SliderProps = {
  items: Array<JSX.Element>
} & Settings

export type WrapProps = {
  heightRatio: `${number}%`
}

export type ImageSliderProps = SliderProps & WrapProps
