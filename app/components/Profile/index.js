/**
 *
 * Profile
 *
 */

import React from 'react'
import styled from 'styled-components'

const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;  
  width: 100%;
  height: 200px;
  background-color:#6db19e;
  .name{
    
  }
`

const Avatar = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 3px solid #fff;
`

function Profile (props) {
  const email = props.user.email
  return (
    <ProfileWrapper>
      <Avatar src={props.user.photoUrl}/>
      <p className="name">{email.substring(0, email.indexOf('@'))}</p>
    </ProfileWrapper>
  )
}

Profile.propTypes = {}

export default Profile
