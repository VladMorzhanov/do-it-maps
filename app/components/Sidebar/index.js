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
  background-color:#7dbeff;
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
  background-color:#4f6ec4;
  line-height: 40px;
  cursor: pointer;
  color: #ffffff;
  border-radius: 6px;
  font-family: Helvetica, sans-serif;
  text-align: center;
  transition: 200ms ease all;
  &:hover{
      background-color:#5880e1;
  }
  &.about{
    margin-top: 20px;
    background-color:#7862c9;
    &:hover{
      background-color:#906fed;
    }
  }
`

function Sidebar (props) {
  return (
    <SidebarWrapper>
      <Profile logOut={props.logOut} user={props.user}/>
      <Popular popularType={props.popularType} changePopularType={props.changePopularType}/>
      <div className="buttons">
        <Button onClick={(e) => props.fetchMarkers(e)}>Show Markers</Button>
        <Button onClick={(e) => props.saveMarkers(e)}>Save Markers</Button>
        <Button onClick={(e) => props.deleteMarkers(e)}>Delete Markers</Button>
        <Button onClick={(e) => props.clearMarkers(e)}>Clear Map</Button>
        <Button onClick={(e) => props.toAuthorPage(e)}
                className="about">About author</Button>
      </div>
    </SidebarWrapper>
  )
}

Sidebar.propTypes = {}

export default Sidebar
