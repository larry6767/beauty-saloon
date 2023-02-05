import styled from '@emotion/styled'
export const HeaderContainer = styled.div`
  margin: 0;
  padding: 0;
  width: 100%;
  height: 180px;
  align-items: center;
  justify-content: space-between;
  display: flex;
  flex-direction: column;
  background-color: #faf1ff;
  @media (min-width: 768px) {
    width: 100%;
    height: 310px;
  }
  @media (min-width: 1440px) {
    width: 100%;
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
  @media (min-width: 768px) {
    width: 750px;
  }
  @media (min-width: 1440px) {
    width: 1110px;
  }
`

export const TopLinkItems = styled.li`
  padding: 5px 7px 0 7px;
  text-align: center;
  line-height: 150%;
  font-size: 14px;
  font-weight: 500;
  color: #ffffff;
  cursor: pointer;
  &:hover {
    color: #bcbcbc;
  }
  @media (min-width: 768px) {
    height: 30px;
  }
  @media (min-width: 1440px) {
    padding: 0;
    height: 21px;
  }
`
export const TopLink = styled.a`
  color: inherit;
  text-decoration: none;
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

export const LogoImage = styled.a``

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
export const TikTokIcon = styled.a`
  filter: opacity(50%);
  &:hover {
    filter: opacity(1);
  }
`
export const WhatsAppIcon = styled.a`
  filter: opacity(50%);
  &:hover {
    filter: opacity(1);
  }
`
export const InstagramIcon = styled.a`
  filter: opacity(50%);
  &:hover {
    filter: opacity(1);
  }
`
export const TelegramIcon = styled.a`
  filter: opacity(50%);
  &:hover {
    filter: opacity(1);
  }
`

export const ContactBlock = styled.div`
  width: 170px;
  height: 70px;
  display: flex;
  align-items: center;
  flex-direction: column;
  @media (min-width: 768px) {
    width: 220px;
    align-items: flex-end;
  }
`

export const Number = styled.p`
  font-weight: 700;
  font-size: 14px;
  margin-bottom: 0;
  @media (min-width: 768px) {
    font-size: 14px;
  }
`

export const Text = styled.p`
  font-size: 13px;
  text-transform: uppercase;
  margin-top: 5px;
  cursor: pointer;
  &:hover {
    color: #e68dba;
  }
  @media (min-width: 768px) {
    font-size: 10px;
  }
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
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 5px;
  height: 100%;
  @media (min-width: 1440px) {
    width: 1110px;
  }
`

export const BottomLinkItems = styled.li`
  height: 47px;
  text-align: center;
  color: #ffffff;
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  padding: 5px 5px 0 5px;
  cursor: pointer;
  &:hover {
    color: #343a40;
  }
  @media (min-width: 768px) {
    line-height: 250%;
  }
  @media (min-width: 1440px) {
    height: 21px;
    line-height: 160%;
  }
`
export const BottomLink = styled.a`
  color: inherit;
  text-decoration: none;
`
