import { createStoreon, StoreonModule } from 'storeon'

export interface State {
  modal: boolean
}

export interface Events {
  toggle: boolean
}

const modalModule: StoreonModule<State, Events> = (store) => {
  // Initial state
  store.on('@init', () => ({ modal: false }))
  store.on('toggle', ({ modal }) => ({ modal: !modal }))
  // Reducers returns only changed part of the state
}

export const store = createStoreon<State, Events>([modalModule])
