/**
 *
 * Profile
 *
 */

import React from 'react'
import styled from 'styled-components'
import {Avatar} from './Avatar'
import {LogOut} from './LogOut'

const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;  
  width: 100%;
  height: 180px;
  background-color:#7dbeff;
  .name{
    margin-top: 10px;
    font-family: Helvetica, sans-serif;
    font-size: 18px;
    color: #ffffff;
  }
`

function Profile (props) {
  const email = props.user.email
  return (
    <ProfileWrapper>
      <LogOut onClick={() => props.logOut()} className="fa fa-sign-out"/>
      <Avatar src={props.user.photoUrl}/>
      <p className="name">{email.substring(0, email.indexOf('@'))}</p>
    </ProfileWrapper>
  )
}

Profile.propTypes = {}

export default Profile
