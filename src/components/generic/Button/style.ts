import styled from '@emotion/styled'

//types
import { ButtonContainerProps, ButtonSizes, ButtonVariants} from './types'

export const ButtonContainer = styled.button<ButtonContainerProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  height: ${({ size }) =>
    size === ButtonSizes.s ? '40px' : size === ButtonSizes.m ? '48px' : 'auto'};

  color: ${({ theme, variant }) =>
    variant === ButtonVariants.primary};

  font-weight: 700;

  ${({ width }) => (!width ? null : `width: ${width}`)};
  ${({ margin }) => (!margin ? null : `margin: ${margin}`)};

  cursor: pointer;



  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

`
