/**
 *
 * Map
 *
 */

import React from 'react'
import styled from 'styled-components'
import {Map as DgMap, Marker} from '2gis-maps-react'
import {ButtonZoom, ButtonZoomSmall, ZoomButtons} from './Zoom'

const MapWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

function Map (props) {
  let zoom = 12
  let center = props.center
  try {
    center = props.center.toJS()
  } catch (e) {
  }
  return (
    <MapWrapper>
      <DgMap
        onZoom={(e) => props.changeZoom(e.target._zoom)}
        // onZoom={(e) => console.log(e)}
        onClick={(e) => props.addMarker(e.latlng)}
        style={{width: '100%', height: '100%'}}
        center={center}
        zoom={props.zoom}>
        {props.markers.map((m) => <Marker key={m.lat} pos={[m.lat, m.lng]}/>)}
        <Marker
          pos={props.center}
          staticLabel={props.username}
        >
        </Marker>
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
