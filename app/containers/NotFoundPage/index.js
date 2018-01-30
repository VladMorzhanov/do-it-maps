/**
 *
 * Not Found
 *
 */

import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import {compose} from 'redux'
import styled from 'styled-components'
import {routerActions} from 'react-router-redux'
import BackArrow from '../About/BackArrow'

const NotFoundWrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color:#7dbeff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  h1{
    font-size: 80px;
    color: #ffffff;
    font-family: Helvetica, sans-serif;
    font-weight: 600;
  }
`

export class NotFound extends React.PureComponent {
  constructor () {
    super()
    this.back = this.back.bind(this)
  }

  back () {
    this.props.dispatch(routerActions.push('/'))
  }

  render () {
    return (
      <NotFoundWrapper>
        <BackArrow onClick={() => this.back()} className="fa fa-arrow-left"/>
        <h1>404</h1>
      </NotFoundWrapper>
    )
  }
}

NotFound.propTypes = {
  dispatch: PropTypes.func.isRequired
}

const mapStateToProps = createStructuredSelector({})

function mapDispatchToProps (dispatch) {
  return {
    dispatch
  }
}

const withConnect = connect(mapStateToProps, mapDispatchToProps)

export default compose(withConnect)(NotFound)
