//@format
import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Public from '../components/Public';
import Protected from '../components/Protected';
import ProtectedRoute from '../components/ProtectedRoute';
import Login from '../components/Login';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/public">Public page</Link>
            </li>
            <li>
              <Link to="/protected">Protected page</Link>
            </li>
          </ul>
          <Route path="/public" component={Public} />
          <Route path="/login" component={Login} />
          <ProtectedRoute path="/protected" Component={Protected} />
        </div>
      </Router>
    );
  }
}

export default App;
