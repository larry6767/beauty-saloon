'use client'

import { css, Global } from '@emotion/react'
import emotionNormalize from 'emotion-normalize'
import { theme } from './theme'

export const globalStyles = (
  <Global
    styles={css`
      ${emotionNormalize}

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
    `}
  />
)
