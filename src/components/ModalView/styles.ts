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
 padding: 0;
 border-radius: 0px;
 
  `}
`

export const ModalCloseButton = styled.button<StyledModalViewProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  top: 0px;
  left: 20px;
  width: 20px;
  height: 20px;
  font-weight: 900;
  background-color: rgba(0, 0, 0, 0);
  border-color: rgba(0, 0, 0, 0);
  color: white;

  cursor: pointer;
  // Drawer Styles
  ${({ isDrawer }) =>
    !isDrawer
      ? null
      : `
 
  top: 0px;
  left: 0px;
  z-index: 1;
  `}

  // Drawer Loading Styles

   ${({ loading, isDrawer }) =>
    isDrawer && loading
      ? `
      
    top: 0px;
    left: 0px;
    `
      : null}
`

export const FlexButton = styled.span<StyledModalViewProps>`
  float: right;
  ${({ isDrawer }) =>
    !isDrawer
      ? null
      : `
    float: none;
    // display: flex;
    // width: 100%;
    // justify-content: right;
    // margin: 20px 0px 20px 20px;
    
    padding: 25px 29px 25px 34px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    border-bottom: 1px solid #efefef;
    cursor: default;
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

  margin: 0 30px 0 30px;

  // Drawer Styles

  ${({ isDrawer }) =>
    !isDrawer
      ? null
      : `
  top: 0;

  background-color: white;

  width: 300px;
  min-width: 120px;
  max-width: 100%;
  min-height: 100%;

  margin: 0 30px 0 0;
    
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
  height: 0px;
`
export const BottomBorder = styled.span<StyledModalViewProps>`
  display: ${({ isDrawer }) => (!isDrawer ? 'block' : 'none')};
  height: 40px;
`
