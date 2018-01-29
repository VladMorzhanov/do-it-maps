/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react'
import {Redirect, Route, Switch, withRouter} from 'react-router-dom'
import '../../styles/css/index.css'
import reducer from './reducer'
import injectReducer from 'utils/injectReducer'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {compose} from 'redux'
import {createStructuredSelector} from 'reselect'
import Messages from '../../components/Messages/Loadable'
import Auth from '../Auth/Loadable'
import Home from '../Home/Loadable'
import About from '../About/Loadable'
import NotFound from '../NotFoundPage/Loadable'
import {removeMessage} from './actions'
import {makeSelectToken} from './selectors'

export class App extends React.PureComponent {
  constructor () {
    super()
    this.checkAuthorized = this.checkAuthorized.bind(this)
  }

  checkAuthorized () {
    if (!this.props.token) {
      return false
    }
    return this.props.token.length > 10
  }

  render () {
    return (
      <div>
        <Switch>
          <Route exact path='/' render={() => (
            this.checkAuthorized() ? (
              <Home/>
            ) : (
              <Redirect to="/auth"/>
            )
          )}/>
          <Route path='/auth' render={() => (
            !this.checkAuthorized() ? (
              <Auth/>
            ) : (
              <Redirect to="/"/>
            )
          )}/>
          <Route path='/about' component={About}/>
          <Route path='*' exact={true} component={NotFound}/>
        </Switch>
        <Messages
          messages={this.props.messages}
          removeMessage={this.props.removeMessage}/>
      </div>
    )
  }
}

App.propTypes = {
  dispatch: PropTypes.func.isRequired
}

const mapStateToProps = createStructuredSelector({
  token: makeSelectToken()
})

function mapDispatchToProps (dispatch) {
  return {
    dispatch,
    removeMessage: (v) => dispatch(removeMessage(v))
  }
}

const withConnect = connect(mapStateToProps, mapDispatchToProps)

const withReducer = injectReducer({key: 'global', reducer})

export default withRouter(compose(
  withReducer,
  withConnect
)(App))
