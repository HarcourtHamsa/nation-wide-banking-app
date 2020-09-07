import React, {useState, useContext, useEffect} from 'react';
import {Redirect} from 'react-router-dom';
import {AppContext} from '../context/Context';

import {RiGlobalLine} from 'react-icons/ri';

import './login.css';
import axios from 'axios';
import {BeatLoader} from 'react-spinners';

import NavBar from '../layouts/Navbar';
import InfoCard from '../layouts/InfoCard';

function Login () {
  const [_id, setID] = useState ('');
  const [password, setPassword] = useState ('');

  // eslint-disable-next-line
  const [isLoggedIn, setIsLoggedIn] = useState (true);
  const [isAdmin, setIsAdmin] = useState (false);
  const [isLoading, setIsLoading] = useState (false);

  const [
    // eslint-disable-next-line
    isAuthenticated,
    setIsAuthenticated,
    // eslint-disable-next-line
    userDetails,
    setUserDetails,
  ] = useContext (AppContext);

  // set page title
  useEffect (() => {
    window.document.title = 'Nation wide - Login';
  });

  // Event handler to update ID
  const updateID = e => {
    setID (e.target.value);
  };
  // Event handler to update Password
  const updatePassword = e => {
    setPassword (e.target.value);
  };

  async function loginUser (data) {
    const res = await axios.post (
      '/api/users/login',
      data
    );
    return res.data;
  }

  // Event handler to handle form submission
  const handleSubmit = e => {
    e.preventDefault (); // prevent default behaviour
    setIsLoading (true); // show loading indicator

    loginUser ({_id, password})
      .then (user => {
        // Check if the current user is admin
        if (user.role === 'admin') {
          setIsAdmin (true);
        }

        setIsLoggedIn (true);
        setIsAuthenticated (true);
        setUserDetails (user);
      })
      .catch (err => console.log (err)); // Catch error
  };

  if (isAuthenticated) {
    if (isAdmin) {
      return <Redirect to="/admin" />;
    }
    return <Redirect to="/app" />;
  }

  return (
    <React.Fragment>
      <InfoCard />
      <NavBar />
      <main className="container mt-5 mb-5 " id="login-form">
        <h5 className="mb-5 text-danger">
          <RiGlobalLine size="30" /> Nation Wide
        </h5>

        <form className="" onSubmit={handleSubmit}>
          <label className="text-blue">Customer number</label>
          <br />
          <input
            type="text"
            className="mb-3 form-control p-3"
            name="_id"
            value={_id}
            onChange={updateID}
            autoComplete="true"
            required
          />
          {' '}
          <br />

          <label className="text-blue">Password</label><br />
          <input
            type="password"
            className="mb-3 form-control p-3"
            name="password"
            value={password}
            onChange={updatePassword}
            autoComplete="true"
            required
          />
          <br />

          <button
            type="submit"
            className="btn btn-danger mt-3 p-4 text-white btn-block"
            id="login-btn"
          >
            {isLoading ? <BeatLoader color="white" /> : 'Log in'}
          </button>

          <small className="text-muted">Fogort password?</small>
        </form>
      </main>

    </React.Fragment>
  );
}

export default Login;
