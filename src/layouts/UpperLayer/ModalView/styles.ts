import { styled } from '@linaria/react'
// types
import { UpperLayerEnum } from 'src/store/upperLayer'

export const ModalBackdrop = styled.div`
  &[data-kind='${UpperLayerEnum.modal}'] {
    display: flex;
    align-items: center;

    justify-content: center;
    padding: 40px;

    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;

    background-color: rgba(0, 0, 0, 0.5);

    overflow-y: scroll;
    overflow-x: hidden;

    cursor: pointer;
  }

  &[data-kind='${UpperLayerEnum.drawer}'] {
    display: flex;
    align-items: center;

    justify-content: left;
    padding: 0;

    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;

    background-color: rgba(0, 0, 0, 0.5);

    overflow-y: scroll;
    overflow-x: hidden;

    cursor: pointer;
  }
`
export const ModalViewContent = styled.div`
  &[data-kind='${UpperLayerEnum.modal}'] {
    display: block;
    position: relative;
    left: 0;

    padding: 10px;
    border-radius: 10px;

    min-width: inherit;
    min-height: inherit;
    max-width: inherit;
    max-height: 100%;

    background-color: white;
    color: black;

    cursor: default;
  }

  &[data-kind='${UpperLayerEnum.drawer}'] {
    display: block;
    position: relative;
    left: 0;

    padding: 0;
    border-radius: 0px;

    min-width: inherit;
    min-height: inherit;
    max-width: inherit;
    max-height: 100%;

    background-color: white;
    color: black;

    cursor: default;
  }
`

export const ModalCloseButton = styled.button`
  &[data-kind='${UpperLayerEnum.modal}'] {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 20px;
    height: 20px;
    font-weight: 900;
    background-color: rgba(0, 0, 0, 0);
    border-color: rgba(0, 0, 0, 0);
    color: white;

    cursor: pointer;

    top: 0px;
    left: 20px;
  }

  &[data-kind='${UpperLayerEnum.drawer}'] {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 20px;
    height: 20px;
    font-weight: 900;
    background-color: rgba(0, 0, 0, 0);
    border-color: rgba(0, 0, 0, 0);
    color: white;

    cursor: pointer;

    top: 0px;
    left: 0px;
    z-index: 1;
  }
`

export const FlexButton = styled.span`
  &[data-kind='${UpperLayerEnum.modal}'] {
    float: right;
  }

  &[data-kind='${UpperLayerEnum.drawer}'] {
    float: none;
    padding: 25px 29px 25px 34px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    border-bottom: 1px solid #efefef;
    cursor: default;
  }
`

export const ModalWrapper = styled.div`
  &[data-kind='${UpperLayerEnum.modal}'] {
    position: absolute;

    left: auto;

    top: 40px;
    min-width: 120px;
    max-width: 400px;
    min-height: 0px;
    max-height: 100%;

    margin: 0 30px 0 30px;
  }

  &[data-kind='${UpperLayerEnum.drawer}'] {
    position: absolute;

    left: auto;

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
  }
`
export const TopBorder = styled.span`
  &[data-kind='${UpperLayerEnum.modal}'] {
    display: none;
  }

  &[data-kind='${UpperLayerEnum.drawer}'] {
    display: 'block';
  }

  height: 0px;
`
export const BottomBorder = styled.span`
  &[data-kind='${UpperLayerEnum.modal}'] {
    display: 'block';
  }

  &[data-kind='${UpperLayerEnum.drawer}'] {
    display: 'none';
  }

  height: 40px;
`
