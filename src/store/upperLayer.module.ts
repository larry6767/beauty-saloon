import { StoreonModule } from 'storeon'

export enum UpperLayerInternalActions {
  init = '@init',
  set = 'modal/set',
  doShitWithLayout = 'modal/doShitWithLayout',
}

export enum UpperLayerActions {
  open = 'modal/open',
  close = 'modal/close',
}

export enum UpperLayerEnum {
  modal = 'modal',
  drawer = 'drawer',
}

interface OpenedState {
  isOpen: true
  kind: keyof typeof UpperLayerEnum
  content: JSX.Element
  scrollY: number
}

interface ClosedState {
  isOpen: false
  kind: null
  content: null
  scrollY: number
}

export interface UpperLayerState {
  upperLayer: ClosedState | OpenedState
}

export interface UpperLayerEvents {
  [UpperLayerActions.open]: Pick<OpenedState, 'kind' | 'content'>
  [UpperLayerActions.close]: void
  [UpperLayerInternalActions.set]: UpperLayerState['upperLayer']
  [UpperLayerInternalActions.doShitWithLayout]: void
}

export type UpperLayerModule = StoreonModule<
  UpperLayerState | null,
  UpperLayerEvents
>
