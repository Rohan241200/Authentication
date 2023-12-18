import {Component} from 'react'
import './index.css'

class LoginForm extends Component {
  state = {userName: '', passWord: '', isInvalid: false}

  getHomePage = () => {
    const {history} = this.props
    history.replace('/')
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {userName, passWord} = this.state
    const userDetails = {userName, passWord}

    const url = 'https://apis.ccbp.in/login'
    const option = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(url, option)
    const data = await response.json()
    console.log(data)

    if (response.ok === true) {
      this.getHomePage()
    } else {
      this.setState({isInvalid: true})
    }
  }

  userInputUsername = event => {
    this.setState({userName: event.target.value})
  }

  userInputPassword = event => {
    this.setState({passWord: event.target.value})
  }

  render() {
    const {userName, passWord, isInvalid} = this.state
    return (
      <div className="login-page-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          alt="website logo"
          className="website-logo-mobile-img"
        />
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
          alt="website login"
          className="website-login-img"
        />
        <form className="login-form-card" onSubmit={this.onSubmitForm}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            alt="website logo"
            className="website-logo-desktop-img"
          />
          <label htmlFor="username" className="user-label">
            USERNAME
          </label>
          <input
            type="text"
            id="username"
            value={userName}
            className="user-input"
            onChange={this.userInputUsername}
            placeholder="Username"
          />
          <br />
          <label htmlFor="password" className="user-label">
            PASSWORD
          </label>
          <input
            type="password"
            id="password"
            value={passWord}
            className="user-input"
            onChange={this.userInputPassword}
            placeholder="Password"
          />
          <br />
          <button type="submit" className="login-btn">
            Login
          </button>
          {isInvalid ? (
            <p className="error-message">Username is not found</p>
          ) : null}
        </form>
      </div>
    )
  }
}

export default LoginForm
