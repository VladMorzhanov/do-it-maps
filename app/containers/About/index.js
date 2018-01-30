/**
 *
 * About
 *
 */

import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import {compose} from 'redux'

import injectSaga from 'utils/injectSaga'
import injectReducer from 'utils/injectReducer'
import makeSelectAbout from './selectors'
import reducer from './reducer'
import saga from './saga'

export class About extends React.PureComponent {
  render () {
    return (
      <div>
        ABOUT
      </div>
    )
  }
}

About.propTypes = {
  dispatch: PropTypes.func.isRequired
}

const mapStateToProps = createStructuredSelector({
  about: makeSelectAbout()
})

function mapDispatchToProps (dispatch) {
  return {
    dispatch
  }
}

const withConnect = connect(mapStateToProps, mapDispatchToProps)

const withReducer = injectReducer({key: 'about', reducer})
const withSaga = injectSaga({key: 'about', saga})

export default compose(
  withReducer,
  withSaga,
  withConnect
)(About)
