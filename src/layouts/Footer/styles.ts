import styled from '@emotion/styled'
import { theme } from '@/theme/theme'
import { media } from '../../theme/breakpoints'

export const FooterContainer = styled.div`
  height: 204px;
  display: flex;
  justify-content: center;
  background-color: #212121;

  ${media.tablet} {
    height: 138px;
    align-items: center;
  }
  ${media.laptopL} {
    height: 91px;
  }
`

export const FooterWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;

  ${media.tablet} {
    width: 740px;
    justify-content: space-between;
    flex-direction: row;
  }
  ${media.laptopL} {
    width: 1110px;
  }
`

export const ContactBlockContainer = styled.div`
  display: flex;
  align-items: stretch;
  padding-top: 10px;

  ${media.tablet} {
    height: 30px;
    width: 285px;
    align-items: center;
    padding-top: 20px;
  }
  ${media.laptopL} {
    height: 90px;
    padding-top: 10px;
  }
`

export const ContactBlock = styled.div`
  display: flex;
  flex-direction: column;
  button {
    transition: color 0.4s ease-in-out;
    &:hover {
      color: ${theme.colors.secondary};
    }
  }
  ${media.tablet} {
    width: 235px;
    height: 50px;
    justify-content: flex-start;
    align-items: flex-start;
  }
  ${media.laptopL} {
    width: 170px;
    justify-content: center;
  }
`

export const TelephoneIcon = styled.div`
  height: 35px;
  display: flex;
  align-items: center;
  padding: 3px 17px 0 10px;

  ${media.tablet} {
    height: 37px;
    align-items: flex-start;
  }
  ${media.laptopL} {
    align-items: center;
  }
`

export const Number = styled.a`
  text-decoration: none;
  color: ${theme.colors.textPrimary};
  font-size: ${theme.fontSize.bigFont};
  margin-bottom: 0;
  transition: color 0.4s ease-in-out;
  &:hover {
    color: black;
  }
`

export const IconList = styled.div`
  width: 140px;
  height: 30px;
  display: flex;
  justify-content: space-around;
  align-items: flex-end;

  ${media.tablet} {
    width: 170px;
    height: 80px;
    align-items: center;
    padding-top: 10px;
  }
  ${media.laptopL} {
    align-items: center;
  }
`

export const LogoIcon = styled.a`
  filter: invert(1);
  transition: filter 0.4s ease-in-out;
  &:hover {
    filter: invert(0);
  }
`

export const LanguageBlock = styled.p`
  height: 15px;
  font-size: ${theme.fontSize.bigFont};
  color: ${theme.colors.textPrimary};

  ${media.tablet} {
    display: flex;
    width: 285px;
    height: 25px;
    padding: 5px 0px;
    justify-content: flex-end;
  }
  ${media.laptopL} {
  }
`
