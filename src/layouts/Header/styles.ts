import styled from '@emotion/styled'

export const HeaderContainer = styled.div`
  height: 180px;
  align-items: center;
  justify-content: space-between;
  display: flex;
  flex-direction: column;
  background-color: #faf1ff;

  @media (min-width: 768px) {
    height: 310px;
  }
  @media (min-width: 1440px) {
    height: 210px;
  }
`

export const TopListContainer = styled.div`
  width: 100%;
  background-color: #343a40;
  display: none;

  @media (min-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 62px;
  }
  @media (min-width: 1440px) {
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
      color: #bcbcbc;
    }
  }
  @media (min-width: 768px) {
    width: 750px;
  }
  @media (min-width: 1440px) {
    width: 1110px;
  }
`

export const TopLinkItems = styled.li`
  text-align: center;
  cursor: pointer;

  @media (min-width: 768px) {
    height: 30px;
  }
  @media (min-width: 1440px) {
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

  @media (min-width: 768px) {
    justify-content: space-between;
    width: 680px;
    flex-direction: row;
    flex-wrap: nowrap;
  }
  @media (min-width: 1440px) {
    width: 1110px;
    justify-content: space-around;
  }
`

export const MenuIcon = styled.div`
  position: absolute;
  top: 100px;
  left: 35px;
  cursor: pointer;
  &:hover {
    filter: contrast(200%);
  }
  @media (min-width: 768px) {
    display: none;
  }
`

export const LogoIconContainer = styled.div`
  width: 230px;
  height: 20px;
  display: flex;
  justify-content: space-around;
  align-items: flex-start;

  @media (min-width: 768px) {
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

  @media (min-width: 768px) {
    width: 350px;
  }
  @media (min-width: 1440px) {
    width: 450px;
  }
`

export const IconList = styled.div`
  width: 170px;
  height: 80px;
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media (min-width: 768px) {
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
      color: #e68dba;
    }
  }
  @media (min-width: 768px) {
    width: 120px;
  }
`

export const Number = styled.a`
  text-decoration: none;
  color: inherit;
  font-weight: 700;
  font-size: 14px;
  margin-bottom: 0;
`

export const LanguageBlock = styled.p`
  font-size: 14px;
  display: flex;
  margin-bottom: 0;

  @media (min-width: 768px) {
    margin-bottom: 7px;
    margin-top: 0;
  }
`

export const BottomListContainer = styled.div`
  display: none;
  width: 100%;
  justify-content: center;
  align-items: center;
  background-color: #e68dba;

  @media (min-width: 768px) {
    display: flex;
    height: 95px;
  }
  @media (min-width: 1440px) {
    height: 50px;
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
      color: #343a40;
    }
  }
  @media (min-width: 1440px) {
    align-items: flex-start;
    width: 1110px;
  }
`

export const BottomLinkItems = styled.li`
  height: 47px;
  text-align: center;

  @media (min-width: 1440px) {
    height: 21px;
  }
`
