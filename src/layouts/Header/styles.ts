import { styled } from '@linaria/react'
import { theme } from 'src/theme/theme'
import { media } from 'src/theme/breakpoints'

export const HeaderContainer = styled.div`
  height: 180px;
  align-items: center;
  justify-content: space-between;
  display: flex;
  flex-direction: column;

  ${media.tablet} {
    height: 298px;
  }
  ${media.laptopL} {
    height: 198px;
  }
`

export const TopListContainer = styled.div`
  width: 100%;
  background-color: #343a40;
  display: none;

  ${media.tablet} {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 62px;
  }
  ${media.laptopL} {
    width: 100%;
    height: 31px;
    align-items: center;
  }
`

export const TopLinkList = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 5px;
  a {
    cursor: pointer;
    &:hover {
      color: ${theme.colors.hover};
    }
  }
  ${media.tablet} {
    width: 750px;
  }
  ${media.laptopL} {
    width: 1110px;
  }
`

export const TopLinkItems = styled.li`
  text-align: center;
  cursor: pointer;

  ${media.tablet} {
    height: 30px;
  }
  ${media.laptopL} {
    padding: 0;
    height: 21px;
  }
`

export const CentralBlock = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column-reverse;
  flex-wrap: wrap;

  ${media.tablet} {
    justify-content: space-between;
    width: 680px;
    flex-direction: row;
    flex-wrap: nowrap;
  }
  ${media.laptopL} {
    width: 1110px;
    justify-content: space-around;
  }

  // Overflow changes
  position: relative;
`

export const LogoIconContainer = styled.div`
  width: 230px;
  height: 20px;
  display: flex;
  justify-content: space-around;
  align-items: flex-start;

  ${media.tablet} {
    width: 100px;
    height: 52px;
    justify-content: space-between;
  }
`

export const ContactsList = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;

  ${media.tablet} {
    width: 370px;
  }
  ${media.laptopL} {
    width: 450px;
  }
`

export const IconList = styled.div`
  width: 170px;
  height: 80px;
  display: flex;
  justify-content: space-around;
  align-items: center;

  ${media.tablet} {
    width: 175px;
    height: 98px;
    justify-content: space-between;
    padding: 15x;
  }
`

export const LogoIcon = styled.a`
  filter: opacity(50%);
  &:hover {
    filter: opacity(1);
  }
`

export const ContactBlock = styled.div`
  width: 170px;
  height: 70px;
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  justify-content: center;
  button {
    &:hover {
      color: ${theme.colors.secondary};
    }
  }
  ${media.tablet} {
    width: 140px;
  }
`

export const Number = styled.a`
  text-decoration: none;
  color: inherit;
  font-weight: 700;
  font-size: ${theme.fontSize.bigFont};
  margin-bottom: 0;
`

export const LanguageBlock = styled.div`
  display: flex;
  margin-bottom: 0;

  ${media.tablet} {
    margin-bottom: 7px;
    margin-top: 0;
  }
`

export const BottomListContainer = styled.div`
  display: none;
  width: 100%;
  justify-content: center;
  align-items: center;
  background-color: ${theme.colors.secondary};
  margin-bottom: -12px;

  ${media.tablet} {
    display: flex;
    height: 95px;
  }
  ${media.laptop} {
    margin-bottom: -15px;
  }
  ${media.laptopL} {
    height: 50px;
    margin-bottom: -22px;
  }
  ${media.desktop} {
    margin-bottom: -30px;
  }
`

export const BottomLinkList = styled.ul`
  list-style-type: none;
  width: 750px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 5px;
  height: 100%;
  a {
    cursor: pointer;
    &:hover {
      color: ${theme.colors.tertiary};
    }
  }
  ${media.laptopL} {
    align-items: flex-start;
    width: 1110px;
  }
`

export const BottomLinkItems = styled.li`
  height: 47px;
  text-align: center;

  ${media.laptopL} {
    height: 21px;
  }
`
