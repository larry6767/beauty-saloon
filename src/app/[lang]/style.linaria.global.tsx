import { css } from '@linaria/core'
import { theme } from 'src/theme'
import 'normalize.css'

export const globals = css`
  :global() {
    .scrollAuto {
      scroll-behavior: auto !important;
    }

    html,
    body {
      height: 100vh;
      padding: 0;
      margin: 0;
      background: ${theme.colors.primary};
      line-height: 1.5;
      scroll-behavior: smooth;
    }

    * {
      box-sizing: border-box;
    }
  }
`
