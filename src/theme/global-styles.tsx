'use client'

import { css, Global } from '@emotion/react'
import emotionNormalize from 'emotion-normalize'

export const globalStyles = (
  <Global
    key={'globalStyles'}
    styles={css`
      ${emotionNormalize}

      html,
      body {
        height: 100vh;
        padding: 0;
        margin: 0;
        background: white;
        line-height: 1.5;
        scroll-behavior: smooth;
      }

      * {
        box-sizing: border-box;
      }
    `}
  />
)
