import styled from '@emotion/styled'

export const ModalBackdrop = styled.div`
  display: ${({ isVisible }: { isVisible: boolean }): string =>
    isVisible ? 'flex' : 'none'};
  //
  justify-content: center;
  align-items: center;
  //
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  padding: 40px;
  //

  //
  background-color: rgba(0, 0, 0, 0.5);
  //
  overflow-y: scroll;
  overflow-x: hidden;
  &::-webkit-scrollbar {
    /* width: 20px; */
  }
  //
  cursor: pointer;
`
export const ModalView = styled.div`
  //
  display: ${({ isVisible }: { isVisible: boolean }): string =>
    isVisible ? 'block' : 'none'};
  position: relative;

  //
  min-width: inherit;
  min-height: inherit;
  max-width: inherit;
  max-height: 100%;
  z-index: 100;
  //
  padding: 10px;
  //
  background-color: white;
  color: black;
  border-radius: 10px;
  //
  cursor: default;
`

export const ModalCloseButton = styled.button`
  display: block;
  position: relative;
  top: 0px;
  left: 400px;
  width: 20px;
  height: 20px;
  font-weight: 900;
  background-color: rgba(0, 0, 0, 0);
  color: white;
`

export const FlexButton = styled.span`
  position: absolute;
`

export const ModalWrapper = styled.div`
  position: relative;
  min-width: 200px;
  max-width: 400px;
  min-height: 400px;
  max-height: 100%;

  //
`
export const BottomBorder = styled.span`
  display: block;
  height: 40px;
`
