/**
 *
 * Home
 *
 */

import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {List} from 'immutable'
import {createStructuredSelector} from 'reselect'
import {compose} from 'redux'
import Sidebar from '../../components/Sidebar/Loadable'
import Map from '../../components/Map/Loadable'
import injectSaga from 'utils/injectSaga'
import {routerActions} from 'react-router-redux'
import injectReducer from 'utils/injectReducer'
import {
  makeSelectCenter, makeSelectMapDataType, makeSelectMarkers,
  makeSelectPopularType, makeSelectUser, makeSelectZoom
} from './selectors'
import reducer from './reducer'
import saga from './saga'
import styled from 'styled-components'
import {
  addMarker, changeCenter, changeMapDataType, changePopularType,
  changeZoom, clearMarkers, deleteMarkers, fetchMarkersDataRequest,
  fetchUserDataRequest, saveMarkersDataRequest
} from './actions'
import {logOut} from '../App/actions'
import {
  MAP_DATA_TYPE_MARKERS, MAP_DATA_TYPE_POPULAR, POPULAR_TYPE_GAS,
  POPULAR_TYPE_NONE, POPULAR_TYPE_PHARMA, POPULAR_TYPE_REUSTARANTS,
  POPULAR_TYPE_SCHOOL
} from './constants'
import PopularProvider from '../../utils/PopularProvider'

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
    this.toAuthorPage = this.toAuthorPage.bind(this)
    this.logOut = this.logOut.bind(this)
  }

  toAuthorPage () {
    this.props.dispatch(routerActions.push('/about'))
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

  logOut () {
    window.localStorage.clear()
    this.props.logOut()
    this.props.dispatch(routerActions.push('/auth'))
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
    const email = this.props.user.email
    let markers = this.props.markers

    if (this.props.mapDataType === MAP_DATA_TYPE_POPULAR) {
      switch (this.props.popularType) {
        case POPULAR_TYPE_NONE:
          markers = new List([])
          break
        case POPULAR_TYPE_PHARMA:
          markers = new List(PopularProvider.pharmacies)
          break
        case POPULAR_TYPE_GAS:
          markers = new List(PopularProvider.gas)
          break
        case POPULAR_TYPE_REUSTARANTS:
          markers = new List(PopularProvider.restaurants)
          break
        case POPULAR_TYPE_SCHOOL:
          markers = new List(PopularProvider.schools)
          break
      }
    }

    return (
      <HomeWrapper>
        <Sidebar user={this.props.user}
                 saveMarkers={this.props.saveMarkers}
                 fetchMarkers={this.props.fetchMarkers}
                 changePopularType={this.props.changePopularType}
                 deleteMarkers={(e) => this.deleteMarkers(e)}
                 clearMarkers={this.props.clearMarkers}
                 toAuthorPage={() => this.toAuthorPage()}
                 logOut={() => this.logOut()}
                 popularType={this.props.popularType}/>
        <Map markers={markers}
             username={email.substring(0, email.indexOf('@'))}
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
    changePopularType: (v) => {
      dispatch(changePopularType(v))
      dispatch(changeMapDataType(MAP_DATA_TYPE_POPULAR))
    },
    fetchMarkers: (v) => {
      dispatch(changePopularType(POPULAR_TYPE_NONE))
      dispatch(fetchMarkersDataRequest(v))
      dispatch(changeMapDataType(MAP_DATA_TYPE_MARKERS))
    },
    saveMarkers: (v) => dispatch(saveMarkersDataRequest(v)),
    clearMarkers: (v) => {
      dispatch(changePopularType(POPULAR_TYPE_NONE))
      dispatch(clearMarkers(v))
      dispatch(changeMapDataType(MAP_DATA_TYPE_MARKERS))
    },
    addMarker: (v) => dispatch(addMarker(v)),
    changeCenter: (v) => dispatch(changeCenter(v)),
    logOut: (v) => dispatch(logOut(v)),
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
