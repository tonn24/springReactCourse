import React, {Component} from "react";
import {BrowserRouter as Router, Route} from 'react-router-dom';

class TodoApp extends Component {
  render() {
    return (
      <>
        <div className="TodoApp">
          My todo app
        </div>
        <Router>
          <Route path="/login" component={LoginComponent}></Route>
          <Route path="/welcome" component={WelcomeComponent}></Route>
        </Router>
      </>
    )
  }
}

class LoginComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: 'username',
      password: '',
      hasLoginFailed: false,
      showSuccessMessage: false
    }
    this.handleChange = this.handleChange.bind(this)
    this.onLogin = this.onLogin.bind(this)
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value})
    console.log(event.target.value)
  }

  onLogin() {
    if (this.state.username === 'username' && this.state.password === 'password') {
      this.setState({showSuccessMessage: true})
    } else  {
      this.setState({showSuccessMessage: false, hasLoginFailed: true})
    }
  }

  render() {
    return (
      <div>
        Username: <input
        type="username" name="username" value={this.state.username} onChange={this.handleChange} />
        Password: <input type="password"
                         name="password"
                         value={this.state.password}
                         onChange={this.handleChange} />
        <button onClick={this.onLogin}>Login</button>
        {this.state.showSuccessMessage === true && <p>Valid crendetials</p>}
        {!this.state.showSuccessMessage === true && <p>Invalid credentials</p>}
      </div>
    )
  }
}

class WelcomeComponent extends Component {
  render() {
    return (
      <p>Welcome to our page</p>
    )
  }
}

export default TodoApp