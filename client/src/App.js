import React, {useContext} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import {AppContext} from './context/Context';

import './App.css';

import Home from './components/Home.js';
import Profile from './components/Profile';
import NewUser from './components/NewUser';
import Login from './auth/Login.js';
import Landing from './pages/Landing.js';
import Dashboard from './pages/Dashboard.js';
import MemberProfile from './pages/MemberProfile';
import Loan from './pages/Loan';
import Transfers from './pages/Transfers';
import History from './pages/History';

function App () {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Landing} />

        <Route exact path="/login" component={Login} />

        {/* user dashboard */}
        <PrivateRoute exact path="/app" component={Dashboard} />
        <PrivateRoute exact path="/app/profile" component={MemberProfile} />
        <PrivateRoute exact path="/app/loan" component={Loan} />
        <PrivateRoute exact path="/app/transfer" component={Transfers} />
        <PrivateRoute exact path="/app/history" component={History} />

        {/* admin dashboard */}
        <PrivateRoute exact path="/admin" component={Home} />
        <PrivateRoute exact path="/admin/user/add" component={NewUser} />
        <PrivateRoute exact path="/admin/profile/:id" component={Profile} />
      </Switch>
    </Router>
  );
}

const PrivateRoute = ({component: Component, ...rest}) => {
  const [isAuthenticated] = useContext (AppContext);
  return (
    <Route
      {...rest}
      render={props =>
        isAuthenticated
          ? <Component {...props} />
          : <Redirect
              to={{
                pathname: '/login',
              }}
            />}
    />
  );
};

export default App;
