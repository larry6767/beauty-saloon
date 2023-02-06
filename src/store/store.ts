/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
// ;C

import { createStoreon, StoreonModule } from 'storeon'

export interface State {
  modal: boolean
  menu: boolean
}

export interface Events {
  toggle: boolean
  menu: boolean
}

const modalModule: StoreonModule<State, Events> = (store) => {
  store.on('@init', () => ({ modal: false, menu: false }))

  store.on('toggle', ({ modal, menu }) => ({ modal: !modal, menu }))
  store.on('menu', ({ modal, menu }) => ({ modal, menu: !menu }))
}

export const store = createStoreon<State, Events>([modalModule])
