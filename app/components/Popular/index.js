/**
 *
 * Popular
 *
 */

import React from 'react'
import styled from 'styled-components'
import {
  POPULAR_TYPE_GAS, POPULAR_TYPE_PHARMA, POPULAR_TYPE_REUSTARANTS,
  POPULAR_TYPE_SCHOOL
} from '../../containers/Home/constants'

const PopularWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;  
  width: 100%;
  height: auto;
  background-color:#7dbeff;
  border-top: 1px solid #000;
  h2{
    font-family: Helvetica, sans-serif;
    background-color:#5271c9;
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
    background-color:#7dbeff;
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
    &.active{
      background-color:#5d78de;
    }
    &:hover{
      background-color:#5d78de;
    }
  }
`

function Popular (props) {
  return (
    <PopularWrapper>
      <h2>Popular places</h2>
      <p
        onClick={() => props.changePopularType(POPULAR_TYPE_PHARMA)}
        className={props.popularType === POPULAR_TYPE_PHARMA ? 'active' : null}>
        Pharmacies</p>
      <p
        onClick={() => props.changePopularType(POPULAR_TYPE_GAS)}
        className={props.popularType === POPULAR_TYPE_GAS ? 'active' : null}>
        Gas Stations</p>
      <p
        onClick={() => props.changePopularType(POPULAR_TYPE_SCHOOL)}
        className={props.popularType === POPULAR_TYPE_SCHOOL ? 'active' : null}>
        Schools</p>
      <p
        onClick={() => props.changePopularType(POPULAR_TYPE_REUSTARANTS)}
        className={props.popularType === POPULAR_TYPE_REUSTARANTS ? 'active' : null}>
        Restaurants</p>
    </PopularWrapper>
  )
}

Popular.propTypes = {}

export default Popular
