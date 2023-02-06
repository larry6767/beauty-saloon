import styled from '@emotion/styled'

export const BaseLayout = styled.body`
  background-color: pink;
  overflow: ${({ isVisible }: { isVisible: boolean }): string =>
    isVisible ? 'hidden' : 'visible'};
`
