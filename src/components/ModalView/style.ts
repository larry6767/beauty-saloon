import styled from '@emotion/styled'
import { StyledModalViewProps } from './types'

export const ModalBackdrop = styled.div<StyledModalViewProps>`
  display: flex;
  //
  justify-content: ${({ isDrawer }) => (!isDrawer ? 'center' : 'left')};
  align-items: center;
  //
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  padding: ${({ isDrawer }) => (!isDrawer ? '40px' : '0')};
  //

  //
  background-color: rgba(0, 0, 0, 0.5);
  //
  overflow-y: scroll;
  overflow-x: hidden;
  //
  cursor: pointer;
  ${({ isDrawer }) =>
    !isDrawer
      ? null
      : `
  
    &::-webkit-scrollbar {
    width: 20px;
  }
  `};
`
export const ModalViewContent = styled.div<StyledModalViewProps>`
  display: block;
  position: relative;
  left: 0;
  //
  min-width: inherit;
  min-height: inherit;
  max-width: inherit;
  max-height: 100%;
  //
  padding: 10px;
  //
  background-color: white;
  color: black;
  border-radius: 10px;
  //
  cursor: default;

  // Drawer Styles
  ${({ isDrawer }) =>
    !isDrawer
      ? null
      : `
 border-radius: 0px;
  `}// renderEmpty
`

export const ModalCloseButton = styled.button<StyledModalViewProps>`
  display: block;
  position: relative;
  top: 0px;
  left: 15px;
  width: 20px;
  height: 20px;
  font-weight: 900;
  background-color: rgba(0, 0, 0, 0);
  border-color: rgba(0, 0, 0, 0);
  color: white;

  background-image: url('/public/img/svg/cross.svg');

  cursor: pointer;
  // Drawer Styles
  ${({ isDrawer }) =>
    !isDrawer
      ? null
      : `
  top: 0px;
  left: 130px;
  `}

  // Drawer Loading Styles
  ${({ loading }) =>
    !loading
      ? null
      : `
    top: 0px;
    left: 85px;
  `}
`

export const FlexButton = styled.span<StyledModalViewProps>`
  float: right;
  ${({ isDrawer }) =>
    !isDrawer
      ? null
      : `
   float: none;
   
  `}
`

export const ModalWrapper = styled.div<StyledModalViewProps>`
  position: absolute;
  top: 40px;
  left: auto;

  min-width: 120px;
  max-width: 400px;
  min-height: 0px;
  max-height: 100%;

  // Drawer Styles

  ${({ isDrawer }) =>
    !isDrawer
      ? null
      : `
  top: 0;

  background-color: white;
    
    &::-webkit-scrollbar-thumb {
    background-color: #d1d1d2;
    border-radius: 10px;
 border: 3px solid black; 
}
   overflow-y: auto; 
   overflow-x: hidden;
&::-webkit-scrollbar { 
    width: 10px;
    height: 0;
    
}
  animation-duration: 0.5s;
  animation-name: slidein;

  @keyframes slidein {
    from {
      left: -400px;
    }

    to {
      left: 0px;
    }
  }

   min-width: 120px;
   max-width: 180px;
   min-height: 100%;
  `}

  // Drawer Loading Styles

  ${({ loading }) =>
    !loading
      ? null
      : `
    overflow-y: visible;
    overflow-x: visible;
  `}
`
export const TopBorder = styled.span<StyledModalViewProps>`
  display: ${({ isDrawer }) => (!isDrawer ? null : 'block')};
  height: 15px;
`
export const BottomBorder = styled.span<StyledModalViewProps>`
  display: ${({ isDrawer }) => (!isDrawer ? 'block' : 'none')};
  height: 40px;
`
