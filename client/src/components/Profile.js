import React, {useState, useEffect} from 'react';
import {getUserIdFromWindowLocation} from '../util';
import {RiUser6Line} from 'react-icons/ri';
import {Redirect} from 'react-router-dom';
import axios from 'axios';
import Nav from './Nav';

function Profile () {
  // Application state
  const [currentUser, setCurrentUser] = useState ('');
  const [firstname, setFirstname] = useState ('');
  const [lastname, setLastname] = useState ('');
  const [email, setEmail] = useState ('');
  const [balance, setBalance] = useState ('');
  const [password, setPassword] = useState ('');
  const [newPassword, setNewPassword] = useState ('');
  const [role, setRole] = useState ('');

  //  Redirect user to home page if true
  const [redirectUser, setRedirectUser] = useState (false);

  //  Redirect user to home page if true
  const [notify, setNotify] = useState (false);

  // get userId from current window location
  const userId = getUserIdFromWindowLocation (window.location.href);

  // ComponentDidMount
  useEffect (
    () => {
      axios
        .get (`/api/users/${userId}`)
        .then (result => setCurrentUser (result.data))
        .catch (err => console.log (err));
      // eslint-disable-next-line
    },
    [currentUser, userId]
  );
  // Event handler to handle an onsubmit event
  const handleSubmit = e => {
    e.preventDefault (); // prevent default behaviour
    axios
      .put (`/api/users/update/${userId}`, {
        firstname: firstname ? firstname : currentUser.firstname,
        lastname: lastname ? lastname : currentUser.lastname,
        emailaddress: email ? email : currentUser.emailaddress,
        password: newPassword ? newPassword : currentUser.password,
        balance: balance ? balance : currentUser.balance,
        role: role ? role : currentUser.role,
      })
      .then (() => {
        setNotify (true);
        setRedirectUser (true); // redirect user to home page
      })
      .catch (err => console.log (err));
  };

  // handle input change
  const handleChange = e => {
    switch (e.target.name) {
      case 'firstname':
        setFirstname (e.target.value);
        break;
      case 'lastname':
        setLastname (e.target.value);
        break;
      case 'email':
        setEmail (e.target.value);
        break;
      case 'password':
        setPassword (e.target.value);
        break;
      case 'newPassword':
        setNewPassword (e.target.value);
        break;
      case 'balance':
        setBalance (e.target.value);
        break;
      case 'role':
        setRole (e.target.value);
        break;
      default:
        break;
    }
  };

  // conditional rendering
  if (redirectUser) {
    return <Redirect to="/admin" />;
  }

  return (
    <React.Fragment>
      <Nav />
      {notify ? 'update successful' : null}
      <div className="container mt-3">
        <h5><RiUser6Line size="30" /> Edit User Profile</h5>

        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="col">
              <label className="small">firstname</label>
              <input
                type="text"
                className="form-control"
                name="firstname"
                value={firstname}
                onChange={handleChange}
                placeholder={currentUser.firstname}
              />
            </div>
            <div className="col">
              {' '} <label className="small">lastname</label>
              <input
                type="text"
                className="form-control"
                name="lastname"
                value={lastname}
                onChange={handleChange}
                placeholder={currentUser.lastname}
              />
            </div>
          </div>

          <div className="form-row">
            <div className="col">
              <label className="small">email</label>
              <input
                type="email"
                className="form-control"
                name="email"
                value={email}
                onChange={handleChange}
                placeholder={currentUser.emailaddress}
              />
            </div>

            <div className="col">
              <label className="small">account balance</label>
              <input
                type="number"
                className="form-control"
                name="balance"
                value={balance}
                onChange={handleChange}
                placeholder={currentUser.balance}
              />
            </div>
          </div>

          <div className="form-row">
            <div className="col">
              <label className="small">role</label>
              <input
                type="type"
                className="form-control"
                name="role"
                value={role}
                onChange={handleChange}
                placeholder={currentUser.role}
              />
            </div>
            <div className="col">
              <label className="small">customer id</label>
              <input
                type="type"
                className="form-control"
                disabled
                placeholder={currentUser._id}
              />
            </div>
          </div>

          <div className="form-row">
            <div className="col">
              <label className="small">old password</label>
              <input
                type="password"
                className="form-control"
                name="password"
                value={password}
                onChange={handleChange}
                placeholder={currentUser.password}
              />

            </div>
            <div className="col">
              <label className="small">new password</label>
              <input
                type="password"
                className="form-control"
                name="newPassword"
                value={newPassword}
                onChange={handleChange}
                placeholder=""
              />
            </div>
          </div>

          <button className="btn btn-success mt-3 text-white">
            <small>Save Changes</small>
          </button>
        </form>
      </div>
    </React.Fragment>
  );
}

export default Profile;
