import { theme } from '@/theme/theme'
import styled from '@emotion/styled'
export const FlexCenter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const AdvantagesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  max-width: 1000px;
`

export const AdvantagesHeaderWrapper = styled.div`
  display: flex;
  justify-content: left;

  position: relative;

  padding: 0 50px;
`
export const AdvantagesHeader = styled.h2`
  font-size: 26px;
  font-weight: 700;
  line-height: 1.066;

  &::after {
    content: ' ';
    display: block;
    position: absolute;
    top: 60px;
    left: 50px;
    border-radius: 4px;
    width: 75px;
    height: 6px;
    background-color: ${theme.colors.secondary};
  }
`

export const AdvantagesListWrapper = styled.div`
  display: flex;
  justify-content: center;
`

export const AdvantagesList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 1000px;
`
export const AdvantagesItem = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;

  min-width: 200px
  min-height: 60px;
  padding: 15px 0 15px 0;
  margin: 5px;
`
export const AdvantagesImage = styled.div`
  margin: 10px;
`
export const AdvantagesTextWrapper = styled.div`
  width: 120px;
  max-width: 100%;
  margin: 10px;
`

export const AdvantagesText = styled.p`
  width: 100%;

  text-aligne: left;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.5;
  font-style: unset;
`
