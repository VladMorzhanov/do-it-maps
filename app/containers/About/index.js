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
import styled from 'styled-components'
import AuthorPhotoImg from '../../images/author.jpg'
import {routerActions} from 'react-router-redux'
import BackArrow from './BackArrow'
import {SocialLink} from './SocialLink'
import {AuthorInfo, AuthorPhoto} from './Author'

const AboutWrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color:#7dbeff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

export class About extends React.PureComponent {
  constructor () {
    super()
    this.back = this.back.bind(this)
  }

  back () {
    this.props.dispatch(routerActions.push('/'))
  }

  render () {
    return (
      <AboutWrapper>
        <BackArrow onClick={() => this.back()} className="fa fa-arrow-left"/>
        <AuthorPhoto src={AuthorPhotoImg}/>
        <AuthorInfo>
          <p className="name">Vlad Morzhanov</p>
          <p className="position">Javascript engineer</p>
          <div className="social">
            <SocialLink
              href="https://www.facebook.com/vmorzhanov"
              target="_blank"
              className="fa fa-facebook"/>
            <SocialLink
              href="mailto:vlad.morzhanov@gmail.com"
              className="fa fa-envelope"/>
            <SocialLink
              href="https://github.com/VladMorzhanov"
              target="_blank"
              className="fa fa-github"/>
            <SocialLink
              href="https://www.linkedin.com/in/vladmorzhanov/"
              target="_blank"
              className="fa fa-linkedin"/>
            <SocialLink
              href="https://twitter.com/vladmorzhanov"
              target="_blank"
              className="fa fa-twitter"/>
            <SocialLink
              href="https://www.pinterest.com/VladMorzhanov/"
              target="_blank"
              className="fa fa-pinterest"/>
          </div>
        </AuthorInfo>
      </AboutWrapper>
    )
  }
}

About.propTypes = {
  dispatch: PropTypes.func.isRequired
}

const mapStateToProps = createStructuredSelector({})

function mapDispatchToProps (dispatch) {
  return {
    dispatch
  }
}

const withConnect = connect(mapStateToProps, mapDispatchToProps)

export default compose(withConnect)(About)
