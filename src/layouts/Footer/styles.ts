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

export const FooterBlock = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;

  ${media.tablet} {
    justify-content: space-between;
    width: 740px;
  }
  ${media.laptopL} {
    width: 1110px;
    flex-direction: row;
  }
`

export const ContactsList = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;

  ${media.tablet} {
    width: 740px;
    height: 60px;
    justify-content: start;
    align-items: center;
    flex-direction: row;
  }
  ${media.laptopL} {
    width: 440px;
    justify-content: space-between;
  }
`

export const ContactBlockContainer = styled.div`
  height: 30px;
  display: flex;
  align-items: stretch;
  padding-top: 30px;

  ${media.tablet} {
    align-items: center;
    padding-top: 0;
  }
  ${media.laptopL} {
    height: 100px;
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
  font-weight: 400;
  font-size: ${theme.fontSize.numbers};
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
    align-items: flex-start;
    padding: 20px 0;
  }
  ${media.laptopL} {
    align-items: center;
    padding-top: 30px;
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
  height: 10px;
  font-size: ${theme.fontSize.numbers};
  color: ${theme.colors.textPrimary};

  ${media.tablet} {
    padding: 0 20px;
  }
`
