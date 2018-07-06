import React from 'react';
import { merge } from 'lodash';
import { withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.demoLogin = this.demoLogin.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.processForm(merge({}, this.state)).then((user) => {
      this.props.history.push('home')
    });
    this.setState({
      username: "",
      password: ""
    })
  }

  update(field) {
    return (e) => {
      this.setState({
        [field]: e.target.value
      })
    }
  }

  demoLogin(e) {
    e.preventDefault();
    let userInfo = {
      username: 'Snorkie',
      password: 'password123'
    }
    this.props.processForm(userInfo).then((user) => {
      this.props.history.push('home')
    });
  }

  render() {
    let nameInput;
    if (this.props.header === 'Sign up') {
      nameInput = <input type="text" onChange={this.update('username')} value={this.state.username} placeholder='Name:'></input>;
    }

    let demoButton;
    if (this.props.header === 'Log in') {
      demoButton = <input type="submit" value="Sign in as a guest" onClick={this.demoLogin} className='demo-login'></input>;
    }

    return (
      <form onSubmit={this.handleSubmit}>
        <h1>{this.props.header}</h1>
        <ul className="error">
          {this.props.errors.map((error, i) => {
            return <li key={`${i}`}>{error}</li>
          })}
        </ul>
          { nameInput }
          <input type="text" onChange={this.update('username')} value={this.state.username} placeholder='Username: '></input>
        <br></br>
          <input type="password" onChange={this.update('password')} value={this.state.password} placeholder="Password:"></input>
          <input type="submit" value={this.props.buttonText}></input>
          { demoButton }
          <div>
          <p>{this.props.linkText}</p>
          <p>{this.props.link}</p>
          </div>
      </form>
    )
  }
}

export default withRouter(SessionForm)
