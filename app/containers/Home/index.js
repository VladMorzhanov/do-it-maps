/**
 *
 * Home
 *
 */

import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import {compose} from 'redux'
import Sidebar from '../../components/Sidebar/Loadable'
import Map from '../../components/Map/Loadable'
import injectSaga from 'utils/injectSaga'
import injectReducer from 'utils/injectReducer'
import {
  makeSelectCenter, makeSelectMapDataType, makeSelectMarkers,
  makeSelectPopularType, makeSelectUser, makeSelectZoom
} from './selectors'
import reducer from './reducer'
import saga from './saga'
import styled from 'styled-components'
import {
  addMarker, changeCenter, changeZoom, clearMarkers, deleteMarkers,
  fetchMarkersDataRequest, fetchUserDataRequest, saveMarkersDataRequest
} from './actions'

const HomeWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
`

export class Home extends React.PureComponent {
  constructor () {
    super()
    this.deleteMarkers = this.deleteMarkers.bind(this)
    this.enableGeo = this.enableGeo.bind(this)
  }

  componentWillMount () {
    this.props.fetchUser()
  }

  componentDidMount () {
    this.enableGeo()
  }

  deleteMarkers () {
    if (window.confirm('Are you really want to delete all markers ?')) {
      this.props.dispatch(deleteMarkers())
    }
  }

  enableGeo () {
    let nudge = document.getElementById('nudge')
    const self = this

    let showNudgeBanner = function () {
      nudge.style.display = 'block'
    }

    let nudgeTimeoutId = setTimeout(showNudgeBanner, 5000)

    let geoSuccess = function (position) {
      clearTimeout(nudgeTimeoutId)
      // Do magic with location
      self.props.changeCenter({
        lat: position.coords.latitude,
        lng: position.coords.longitude
      })
      console.log(position)
    }
    let geoError = function (error) {
      switch (error.code) {
        case error.TIMEOUT:
          // The user didn't accept the callout
          showNudgeBanner()
          break
      }
    }
    navigator.geolocation.getCurrentPosition(geoSuccess, geoError)
  }

  render () {
    return (
      <HomeWrapper>
        <Sidebar user={this.props.user}
                 saveMarkers={this.props.saveMarkers}
                 fetchMarkers={this.props.fetchMarkers}
                 deleteMarkers={(e) => this.deleteMarkers(e)}
                 clearMarkers={this.props.clearMarkers}
                 popularType={this.props.popularType}/>
        <Map markers={this.props.markers}
             zoom={this.props.zoom}
             center={this.props.center}
             changeZoom={this.props.changeZoom}
             addMarker={this.props.addMarker}
             mapDataType={this.props.mapDataType}/>
      </HomeWrapper>
    )
  }
}

Home.propTypes = {
  dispatch: PropTypes.func.isRequired
}

const mapStateToProps = createStructuredSelector({
  markers: makeSelectMarkers(),
  mapDataType: makeSelectMapDataType(),
  popularType: makeSelectPopularType(),
  user: makeSelectUser(),
  center: makeSelectCenter(),
  zoom: makeSelectZoom()
})

function mapDispatchToProps (dispatch) {
  return {
    dispatch,
    fetchUser: (v) => dispatch(fetchUserDataRequest(v)),
    fetchMarkers: (v) => dispatch(fetchMarkersDataRequest(v)),
    saveMarkers: (v) => dispatch(saveMarkersDataRequest(v)),
    clearMarkers: (v) => dispatch(clearMarkers(v)),
    addMarker: (v) => dispatch(addMarker(v)),
    changeCenter: (v) => dispatch(changeCenter(v)),
    changeZoom: (v) => dispatch(changeZoom(v))
  }
}

const withConnect = connect(mapStateToProps, mapDispatchToProps)

const withReducer = injectReducer({key: 'home', reducer})
const withSaga = injectSaga({key: 'home', saga})

export default compose(
  withReducer,
  withSaga,
  withConnect
)(Home)
