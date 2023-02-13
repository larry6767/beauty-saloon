import styled from '@emotion/styled'

//types
import { ButtonContainerProps } from './types'

export const ButtonContainer = styled.button<ButtonContainerProps>`
  display: flex;
  text-align: center;
  vertical-align: middle;
  justify-content: center;
  align-items: center;
  font-weight: 200;
  font-size: 1em;
  background: #464646;
  border: 2px;
  border-radius: 4px;
  padding: 10px 22px;
  color: #fff;
  outline: 0;
  transition: 0.3s;
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
