import { styled } from '@linaria/react'
import { theme } from 'src/theme/theme'
// types
import { ButtonContainerProps } from './types'

export const ButtonContainer = styled.button<ButtonContainerProps>`
  min-width: 146px;
  display: flex;
  text-align: center;
  vertical-align: middle;
  justify-content: center;
  align-items: center;
  font-weight: 200;
  font-size: ${theme.fontSize.bigFont};
  background: #464646;
  border: 2px;
  border-radius: 4px;
  padding: 10px 22px;
  color: #fff;
  outline: 0;
  transition: 0.4s ease-in-out;
  line-height: normal;
  white-space: nowrap;

  cursor: pointer;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &:hover {
    background-color: #1e1e1e;
  }
`
