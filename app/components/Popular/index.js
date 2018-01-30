/**
 *
 * Popular
 *
 */

import React from 'react'
import styled from 'styled-components'

const PopularWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;  
  width: 100%;
  height: auto;
  background-color:#b18e78;
  border-top: 1px solid #000;
  h2{
    font-family: Helvetica, sans-serif;
    background-color:#765f50;
    margin: 0;
    width: 100%;
    color: #ffffff;
    font-size: 22px;  
    height: 40px;
    line-height: 40px;  
    padding-left: 20px;
    border-bottom: 1px solid #000;
  }
  p{
    border-bottom: 1px solid #000;
    background-color:#adffa4;
    font-weight: 600; 
    font-family: Helvetica, sans-serif;
    width: 100%;
    font-size: 16px;
    padding-left: 20px;
    height: 40px;
    line-height: 45px;  
    margin: 0;
    color: #ffffff;
    cursor:pointer;
    transition: 200ms all ease;
    .active{
      background-color:#78b272;
    }
    &:hover{
      background-color:#78b272;
    }
  }
`

function Popular () {
  return (
    <PopularWrapper>
      <h2>Popular places</h2>
      <p>Pharmacies</p>
      <p>Gas Stations</p>
      <p>Schools</p>
      <p>Restaurants</p>
    </PopularWrapper>
  )
}

Popular.propTypes = {}

export default Popular
