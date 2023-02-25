import { styled } from '@linaria/react'

export const StyledLink = styled.a`
  display: inline-block;
  line-height: 1.5;
  text-decoration: none;
  color: white;

  cursor: pointer;

  &:hover {
    color: black;
  }
`

export const StyledLinkWithoutNextLinkWrapper = styled.a`
  display: inline-block;
  line-height: 1.5;
  text-decoration: none;
  color: white;

  cursor: pointer;

  &:hover {
    color: black;
  }

  box-shadow: none;
  outline: none;
  background: none;
  border: none;
`
