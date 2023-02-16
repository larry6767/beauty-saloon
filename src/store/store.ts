import { createStoreon } from 'storeon'
import {
  UpperLayerActions,
  UpperLayerInternalActions,
  UpperLayerModule,
} from './upperLayer.module'

const upperLayerModule: UpperLayerModule = (store) => {
  const baseLayoutId = 'baseLayout'

  store.on(UpperLayerInternalActions.init, () => ({
    upperLayer: {
      isOpen: false,
      kind: null,
      content: null,
      scrollY: 0,
    },
  }))

  store.on(UpperLayerInternalActions.doShitWithLayout, (state) => {
    if (!state) return

    const { isOpen, scrollY } = state.upperLayer
    const mainContent = document.querySelector<HTMLDivElement>(
      `#${baseLayoutId}`,
    )

    if (!mainContent) return

    if (isOpen) {
      mainContent.style.position = 'fixed'
      mainContent.style.top = `-${scrollY}px`
      mainContent.style.minWidth = '100%'
    } else {
      mainContent.style.position = 'unset'
      window.scrollTo(0, scrollY)
    }
  })

  store.on(UpperLayerInternalActions.set, (state, data) => ({
    upperLayer: {
      ...data,
    },
  }))

  store.on(UpperLayerActions.open, (state, data) => {
    store.dispatch(UpperLayerInternalActions.set, {
      isOpen: true,
      scrollY: window.pageYOffset,
      ...data,
    })

    store.dispatch(UpperLayerInternalActions.doShitWithLayout)
  })

  store.on(UpperLayerActions.close, (state) => {
    if (!state) return
    const { isOpen, scrollY } = state.upperLayer
    if (!isOpen) return

    store.dispatch(UpperLayerInternalActions.set, {
      isOpen: false,
      kind: null,
      content: null,
      scrollY: scrollY,
    })

    store.dispatch(UpperLayerInternalActions.doShitWithLayout)
  })
}

export const store = createStoreon([upperLayerModule])
