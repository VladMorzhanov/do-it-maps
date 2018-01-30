/**
 *
 * Auth
 *
 */

import React from 'react'
import reducer from './reducer'
import saga from './saga'
import * as EmailValidator from 'email-validator'
import injectReducer from 'utils/injectReducer'
import injectSaga from 'utils/injectSaga'
import {compose} from 'redux'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import FacebookLogin from 'react-facebook-login'
import {createStructuredSelector} from 'reselect'
import styled from 'styled-components'
import LogoImage from '../../images/logo.png'
import makeSelectAuth from './selectors'
import GoogleLogin from 'react-google-login'
import {facebookLoginRequest, googleLoginRequest, loginRequest} from './actions'
import {MessageManager} from '../../utils/MessageManager'
import {Form} from './Form'
import Button from './Button'

const AuthWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const AuthHeader = styled.div`
  margin-top: -100px; 
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  img{
    display: block;
    width: 200px;
    height: 200px;
  }
  h1{
    text-align: center;
    width: 100%;
    color:#4877bf;
    font-family: Helvetica, sans-serif;
  }
`

const SignInButton = Button.extend`
 margin-top: 20px;
 background-color:#5da2ff;
 &:hover{
  background-color:#4877bf;  
 }
`

export class Auth extends React.PureComponent {
  constructor () {
    super()
    this.state = {
      email: '',
      pwd: '',
      googleId: '',
      facebookId: ''
    }
    this.handleFacebookSuccess = this.handleFacebookSuccess.bind(this)
    this.handleGoogleSuccess = this.handleGoogleSuccess.bind(this)
    this.handleGoogleFailure = this.handleGoogleFailure.bind(this)
    this.handleFacebookFailure = this.handleFacebookFailure.bind(this)
    this.handleEmailChange = this.handleEmailChange.bind(this)
    this.handlePwdChange = this.handlePwdChange.bind(this)
    this.signIn = this.signIn.bind(this)
  }

  handleFacebookSuccess (e) {
    this.props.dispatch(facebookLoginRequest(e.email, e.id, e.picture.data.url))
  }

  handleFacebookFailure (e) {
  }

  handleGoogleSuccess (e) {
    this.props.dispatch(googleLoginRequest(
      e.profileObj.email,
      e.profileObj.googleId,
      e.profileObj.imageUrl))
  }

  handleGoogleFailure (e) {
  }

  signIn () {
    if (!EmailValidator.validate(this.state.email)) {
      return MessageManager.addMessage('Please provide valid email address.')
    }

    if (this.state.pwd.length < 5) {
      return MessageManager
        .addMessage('Password must be at least 5 characters long.')
    }

    this.props.dispatch(loginRequest(this.state.email, this.state.pwd))
  }

  handleEmailChange (e) {
    this.setState({email: e.target.value})
  }

  handlePwdChange (e) {
    this.setState({pwd: e.target.value})
  }

  render () {
    return (
      <AuthWrapper>
        <AuthHeader>
          <img src={LogoImage}/>
          <h1>Do IT Maps</h1>
        </AuthHeader>
        <Form>
          <label htmlFor='email'>Email</label>
          <input type='email'
                 id='email'
                 value={this.state.email}
                 onChange={this.handleEmailChange}
                 placeholder='Email: '/>
          <label htmlFor='password'>Password</label>
          <input type='password'
                 id='password'
                 value={this.state.pwd}
                 onChange={this.handlePwdChange}
                 placeholder='Password: '/>
          <SignInButton onClick={(e) => this.signIn(e)}>Sign In</SignInButton>
          <div className='social'>
            <FacebookLogin
              // local
              appId="336286580204732"
              // heroku
              // appId="192240534855789"
              cssClass="facebook-button"
              textButton="Facebook"
              fields="email,picture.type(large)"
              callback={this.handleFacebookSuccess}/>
            <GoogleLogin
              className="google-button"
              // localhost
              clientId="948851556336-j8nvssf5ir85rh3t12k9q8ifbrv7e1ha.apps.googleusercontent.com"
              // heroku
              // clientId="845786820006-5ed6u705rmb6lrbqttr0s2g6qqc42u80.apps.googleusercontent.com"
              buttonText="Google"
              onSuccess={this.handleGoogleSuccess}
              onFailure={this.handleGoogleFailure}
            />
          </div>
        </Form>
      </AuthWrapper>
    )
  }
}

Auth.propTypes = {
  dispatch: PropTypes.func.isRequired
}

const mapStateToProps = createStructuredSelector({
  auth: makeSelectAuth()
})

function mapDispatchToProps (dispatch) {
  return {
    dispatch
  }
}

const withConnect = connect(mapStateToProps, mapDispatchToProps)

const withReducer = injectReducer({key: 'auth', reducer})
const withSaga = injectSaga({key: 'auth', saga})

export default compose(
  withReducer,
  withSaga,
  withConnect
)(Auth)
