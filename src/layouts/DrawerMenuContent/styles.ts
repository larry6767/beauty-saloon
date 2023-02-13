import styled from '@emotion/styled'

export const DrawerWrapper = styled.div`
  width: 300px;
  max-width: 100%;
`
export const DrawerLinkItems = styled.div`
  width: 300px;
  max-width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #efefef;
`
export const LinkContent = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: 400;
`

export const LinkContentTelephone = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
export const TelephoneImgWrapper = styled.div`
  margin: 0 10px 0 0;
`
export const ImgWrapper = styled.div`
  margin: 0 0px 0 10px;
`
export const DrawerLinks = styled.div`
  min-height: 100%;
`
export const DrawerButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const DrawerButton = styled.div`
  background-color: black;
  border-radius: 5px;
  margin: 20px;
`
export const DrawerBookingButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 90px;
  height: 45px;

  font-size: 14px;
  text-align: center;
  letter-spacing: 1px;
  line-height: 16px;
  vertical-align: middle;
  font-weight: 600;

  font-family: Play, sans-serif !important;

  background: #e68dba;
  border-radius: 5px;

  opacity: 0.9;
  transition: opacity 0.15s;
  &:hover {
    background: linear-gradient(-135deg, #e68dba 0, #000000 100%);
  }
`

export const FixedButton = styled.div`
  position: fixed;
  top: 495px;
  left: 285px;
`
