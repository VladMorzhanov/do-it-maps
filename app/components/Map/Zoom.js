import styled from 'styled-components'

export const ZoomButtons = styled.div`
  position: fixed;
  bottom: 50px;
  right: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const ButtonZoom = styled.div`
  width: 50px;
  height: 50px;
  background-color:#fff;
  border-radius: 50%;
  border: 6px rgba(0,0,0,0.85) solid;
  line-height: 40px;
  color:rgba(0,0,0,0.85);
  text-align: center;
  font-size: 28px;
  font-weight: 600;
  cursor: pointer;
  transition: 200ms ease all;
  &:hover{
    background-color:#dfdfdf;
  }
`

export const ButtonZoomSmall = ButtonZoom.extend`
  margin-top: -5px;
  line-height: 24px;
  width: 40px;
  height: 40px;
`
