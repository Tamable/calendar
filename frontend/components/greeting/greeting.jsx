import React from 'react';
import { Link } from 'react-router-dom';

class Greeting extends React.Component {
  render() {
    let currentUser = this.props.currentUser;
    let logout = this.props.logout;

    const notLoggedIn = () => {
      return (
        <div>
          <Link to='/login'>Log in</Link>
          <Link to='/signup'>Sign up</Link>
        </div>
      )
    }

    const loggedIn = () => {
      return (
        <div>
          <div>{currentUser.name}</div>
          <button onClick={logout}>Log out</button>
        </div>
      )
    }

    if (currentUser) {
      return loggedIn();
    } else {
      return notLoggedIn();
    }
  }
}

export default Greeting;
