/**
 *
 * Map
 *
 */

import React from 'react'
import styled from 'styled-components'
import {Map as DgMap, Marker} from '2gis-maps-react'

const MapWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const ZoomButtons = styled.div`
  position: fixed;
  bottom: 50px;
  right: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const ButtonZoom = styled.div`
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

const ButtonZoomSmall = ButtonZoom.extend`
  margin-top: -5px;
  line-height: 24px;
  width: 40px;
  height: 40px;
`

function Map (props) {
  let center = props.center
  try {
    center = props.center.toJS()
  } catch (e) {
  }
  return (
    <MapWrapper>
      <DgMap
        onClick={(e) => props.addMarker(e.latlng)}
        style={{width: '100%', height: '100%'}}
        center={center || [54.98, 82.89]}
        zoom={props.zoom || 13}>
        {props.markers.map((m) => <Marker key={m.lat} pos={[m.lat, m.lng]}/>)}
      </DgMap>
      <ZoomButtons>
        <ButtonZoom
          onClick={(e) => props.changeZoom(props.zoom + 1)}>+</ButtonZoom>
        <ButtonZoomSmall
          onClick={(e) => props.changeZoom(props.zoom - 1)}>-</ButtonZoomSmall>
      </ZoomButtons>
    </MapWrapper>
  )
}

Map.propTypes = {}

export default Map
