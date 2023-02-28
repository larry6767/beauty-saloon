import { createContext } from 'react'
// types
import type { AppContextType } from './types'

export const AppContext = createContext<AppContextType>({} as AppContextType)
// we can use the type assertion above because we are sure that
// the initial value will be passed to the provider
