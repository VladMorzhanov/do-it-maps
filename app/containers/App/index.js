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
import {Route, Switch} from 'react-router-dom'
import '../../styles/css/index.css'
import reducer from './reducer'
import injectReducer from 'utils/injectReducer'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {compose} from 'redux'
import {createStructuredSelector} from 'reselect'
import Auth from '../Auth/Loadable'
import Home from '../Home/Loadable'
import About from '../About/Loadable'
import NotFound from '../NotFoundPage/Loadable'

export class App extends React.PureComponent {
  checkAuth () {

  }

  render () {
    return (
      <div>
        <Switch>
          <Route onEnter={this.checkAuth} exact path='/' component={Home}/>
          <Route path='/about' component={About}/>
          <Route path='/auth' component={Auth}/>
          <Route path='*' exact={true} component={NotFound}/>
        </Switch>
      </div>
    )
  }
}

App.propTypes = {
  dispatch: PropTypes.func.isRequired
}

const mapStateToProps = createStructuredSelector({})

function mapDispatchToProps (dispatch) {
  return {
    dispatch
  }
}

const withConnect = connect(mapStateToProps, mapDispatchToProps)

const withReducer = injectReducer({key: 'global', reducer})

export default compose(
  withReducer,
  withConnect
)(App)
