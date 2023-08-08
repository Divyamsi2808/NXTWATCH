import {Component} from 'react'
import Cookie from 'js-cookie'
import {Redirect} from 'react-router-dom'
import NxtWatchAppContext from '../../NxtWatchAppContext'

import {
  LoginPageBgContainer,
  LoginFormContainer,
  LogoImage,
  InputElementContainer,
  InputLabelElement,
  InputElement,
  CheckBoxContainer,
  CheckBoxLabelElement,
  LoginButton,
  ErrorMassage,
} from './styledComponents'

class LoginRout extends Component {
  state = {
    passwordType: 'password',
    password: '',
    username: '',
    errorMsg: '',
    errorOccurred: false,
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props
    this.setState({errorOccurred: false})
    Cookie.set('jwt_token', jwtToken, {
      expires: 30,
      path: '/',
    })
    history.replace('/')
  }

  onSubmitFailure = errMsg =>
    this.setState({errorMsg: errMsg, errorOccurred: true})

  onSubmitLoginForm = async event => {
    event.preventDefault()
    const {password, username} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  onChangePassword = event => this.setState({password: event.target.value})

  onChangeUserName = event => this.setState({username: event.target.value})

  onChangePasswordType = () =>
    this.setState(prevState => ({
      passwordType: prevState.passwordType === 'password' ? 'text' : 'password',
    }))

  renderLoginPage = () => {
    const {
      passwordType,
      password,
      username,
      errorMsg,
      errorOccurred,
    } = this.state

    return (
      <NxtWatchAppContext.Consumer>
        {value => {
          const {isDarkMode} = value
          const imageSrc = isDarkMode
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

          const renderUserNameField = () => (
            <InputElementContainer isDarkMode={isDarkMode}>
              <InputLabelElement isDarkMode={isDarkMode} htmlFor="userName">
                USERNAME
              </InputLabelElement>
              <InputElement
                id="userName"
                isDarkMode={isDarkMode}
                type="text"
                value={username}
                onChange={this.onChangeUserName}
                placeholder="Username"
              />
            </InputElementContainer>
          )

          const renderPasswordField = () => (
            <InputElementContainer isDarkMode={isDarkMode}>
              <InputLabelElement isDarkMode={isDarkMode} htmlFor="password">
                PASSWORD
              </InputLabelElement>
              <InputElement
                id="password"
                isDarkMode={isDarkMode}
                type={passwordType}
                value={password}
                onChange={this.onChangePassword}
                placeholder="Password"
              />
            </InputElementContainer>
          )

          const renderCheckBoxField = () => (
            <CheckBoxContainer>
              <input
                type="checkBox"
                id="checkBox"
                onClick={this.onChangePasswordType}
              />
              <CheckBoxLabelElement htmlFor="checkBox" isDarkMode={isDarkMode}>
                Show Password
              </CheckBoxLabelElement>
            </CheckBoxContainer>
          )

          return (
            <LoginPageBgContainer isDarkMode={isDarkMode}>
              <LoginFormContainer
                isDarkMode={isDarkMode}
                onSubmit={this.onSubmitLoginForm}
              >
                <LogoImage src={imageSrc} alt="website logo" />
                {renderUserNameField()}
                {renderPasswordField()}
                {renderCheckBoxField()}
                <LoginButton type="submit">Login</LoginButton>
                {errorOccurred && <ErrorMassage>*{errorMsg}</ErrorMassage>}
              </LoginFormContainer>
            </LoginPageBgContainer>
          )
        }}
      </NxtWatchAppContext.Consumer>
    )
  }

  render() {
    const jwtToken = Cookie.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return <>{this.renderLoginPage()}</>
  }
}

export default LoginRout
