import { createContext } from 'react'
import { createStoreon } from 'storeon'
import { customContext } from 'storeon/react'
import { storeonLogger } from 'storeon/devtools'
// local libs
import { upperLayer } from './upperLayer'
// types
import { UpperLayerState, UpperLayerEvents } from './upperLayer'

type State = UpperLayerState

export type Events = UpperLayerEvents

export const store = createStoreon<State, Events>([
  upperLayer,

  process.env.NODE_ENV !== 'production' && storeonLogger,
])

export const StoreonCustomContext = createContext(store)

export const useStoreon = customContext(StoreonCustomContext)
