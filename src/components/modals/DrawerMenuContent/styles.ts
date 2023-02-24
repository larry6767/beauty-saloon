import { styled } from '@linaria/react'
import { theme } from '@/theme/theme'

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
  border-bottom: 1px solid ${theme.colors.borderColor};
`
export const LinkContent = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: 400;
  text-transform: uppercase;
  text-decoration: none;
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
  text-transform: uppercase;
`
