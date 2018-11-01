//@format
import React, {Component} from 'react';
import fakeAuth from '../fakeAuth';
import {Redirect} from 'react-router-dom';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirectToReferrer: false,
    };
  }

  login() {
    fakeAuth.authenticate(() => {
      this.setState({redirectToReferrer: true});
    });
  }

  render() {
    const from = this.props.location.location || '/';
    if (this.state.redirectToReferrer) {
      return <Redirect to={from} />;
    }
    return (
      <div>
        <div>{from !== '/' && `you must login to go to ${from}`}</div>
        <button onClick={this.login.bind(this)}>login</button>
      </div>
    );
  }
}
export default Login;
