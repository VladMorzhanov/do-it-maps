import styled from 'styled-components'

export const SocialLink = styled.a`
  width: 40px;
  margin-top: 20px;
  line-height: 38px;
  margin-right: 18px;
  height: 40px;
  color: #ffffff;
  font-size: 22px;
  border: 2px solid #fff;
  border-radius: 50%;
  transition: 200ms ease all;
  cursor: pointer;
  text-decoration: none;
  &.fa-envelope{
    font-size: 20px;
    line-height: 36px;
  }
  &:hover{
    border: 2px solid #9fffe4;
    color:#9fffe4;
  }
`
