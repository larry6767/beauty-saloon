'use client'

import React from 'react'
import { ButtonContainer } from './style'
// types
import type { ButtonProps, ButtonContainerProps } from './types'

const Button: React.FC<ButtonProps> = ({
  text,
  size = 'm',
  variant = 'primary',
  disabled = false,
  // icon,
  float,
  margin,
  width,
  uppercase = false,
  ...rest
}) => {
  const buttonContainerProps: ButtonContainerProps = {
    size,
    variant,
    disabled,
    float,
    margin,
    width,
    uppercase,
  }
  return (
    <ButtonContainer {...buttonContainerProps} {...rest}>
      {/* {icon && icon} */}
      {text}
    </ButtonContainer>
  )
}

export default Button
