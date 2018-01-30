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
import {createStructuredSelector} from 'reselect'
import styled from 'styled-components'
import LogoImage from '../../images/logo.png'
import makeSelectAuth from './selectors'
import {addMessage} from '../App/actions'
import {loginRequest} from './actions'

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

const Form = styled.div`
  width: 300px;
  *{
    width: 100%;
  }
  label{
    width: 100%;
    font-weight: 600;
    font-size: 16px;
    color: #4877bf;
    font-family: Helvetica, sans-serif;
    text-align: center;
  }
  input{
    border: 2px #5da2ff solid;
    margin-bottom: 10px;
    border-radius: 10px;
    margin-top: 2px;
    background-color:#fff;
    color: #000000;
    height: 40px;
    font-size: 16px;
    padding: 5px 5px 5px 10px;
    transition: 200ms ease all;
    &:hover{
      border: 2px #416dae solid;
    }
  }
  .social{
    margin-top: 0;
    display: flex;
  }
`

const Button = styled.div`
  width: 100%;
  height: 40px;
  font-size: 18px;
  line-height: 40px;
  cursor: pointer;
  color: #ffffff;
  border-radius: 10px;
  font-family: Helvetica, sans-serif;
  text-align: center;
  transition: 200ms ease all;
`

const SignInButton = Button.extend`
 margin-top: 20px;
 background-color:#5da2ff;
 &:hover{
  background-color:#4877bf;  
 }
`

const FacebookButton = Button.extend`
 margin-top: 10px;  
 background-color:#4a54ff;
 margin-right: 5px;
 &:hover{
  background-color:#3036b0;  
 }
`

const GoogleButton = Button.extend`
 margin-top: 10px;  
 background-color:#ff5b43;
 margin-left: 5px;
 &:hover{
  background-color:#b84730;  
 }
`

export class Auth extends React.PureComponent {
  constructor () {
    super()
    this.state = {
      email: '',
      pwd: ''
    }
    this.handleEmailChange = this.handleEmailChange.bind(this)
    this.handlePwdChange = this.handlePwdChange.bind(this)
    this.signIn = this.signIn.bind(this)
  }

  signIn () {
    if (!EmailValidator.validate(this.state.email)) {
      return this.props.dispatch(addMessage({
        message: 'Please provide valid email address.',
        id: (new Date()).getTime().toString()
      }))
    }

    if (this.state.pwd.length < 5) {
      return this.props.dispatch(addMessage({
        message: 'Password must be at least 5 characters long.',
        id: (new Date()).getTime().toString()
      }))
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
          <img src={LogoImage} />
          <h1>Do IT Maps</h1>
        </AuthHeader>
        <Form>
          <label htmlFor='email'>Email</label>
          <input type='email'
            id='email'
            value={this.state.email}
            onChange={this.handleEmailChange}
            placeholder='Email: ' />
          <label htmlFor='password'>Password</label>
          <input type='password'
            id='password'
            value={this.state.pwd}
            onChange={this.handlePwdChange}
            placeholder='Password: ' />
          <SignInButton onClick={(e) => this.signIn(e)}>Sign In</SignInButton>
          <div className='social'>
            <FacebookButton>Facebook</FacebookButton>
            <GoogleButton>Google</GoogleButton>
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
