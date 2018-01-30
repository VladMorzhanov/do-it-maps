/**
 *
 * Sidebar
 *
 */

import React from 'react'
import styled from 'styled-components'
import Profile from '../Profile/Loadable'
import Popular from '../Popular/Loadable'

const SidebarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 250px;
  height: 100%;
  background-color:#9fffe4;
  border-right: 2px solid #000;
  padding-bottom: 20px;
  .buttons{
    margin-top: auto;
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: flex-end;
  }
`

const Button = styled.div`
  width: 80%;
  height: 40px;
  margin-bottom: 10px;
  font-size: 18px;
  background-color:#6690ff;
  line-height: 40px;
  cursor: pointer;
  color: #ffffff;
  border-radius: 6px;
  font-family: Helvetica, sans-serif;
  text-align: center;
  transition: 200ms ease all;
  &:hover{
      background-color:#6690a9;
  }
  &.about{
    margin-top: 20px;
    background-color:#c97eff;
    &:hover{
      background-color:#8555a9;
    }
  }
`

function Sidebar (props) {
  return (
    <SidebarWrapper>
      <Profile user={props.user}/>
      <Popular/>
      <div className="buttons">
        <Button onClick={(e) => props.fetchMarkers(e)}>Show Markers</Button>
        <Button onClick={(e) => props.saveMarkers(e)}>Save Markers</Button>
        <Button onClick={(e) => props.deleteMarkers(e)}>Delete Markers</Button>
        <Button onClick={(e) => props.clearMarkers(e)}>Clear Map</Button>
        <Button className="about">About</Button>
      </div>
    </SidebarWrapper>
  )
}

Sidebar.propTypes = {}

export default Sidebar
