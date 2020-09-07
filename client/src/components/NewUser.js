import React, {useState} from 'react';
import axios from 'axios';
import {RiAddCircleFill} from 'react-icons/ri';
import {Redirect} from 'react-router-dom';
import Nav from './Nav';

function NewUser () {
  // Application state
  const [firstname, setFirstname] = useState ('');
  const [lastname, setLastname] = useState ('');
  const [email, setEmail] = useState ('');
  const [balance, setBalance] = useState ('');
  const [password, setPassword] = useState ('');
  const [profilePhoto, setProfilePhoto] = useState ('');

  //  Redirect user to home page if true
  const [redirectUser, setRedirectUser] = useState (false);

  const handleSubmit = e => {
    e.preventDefault (); // prevent default action
    const formData = new FormData (e.target);

    axios
      .post ('/api/users/add', formData)
      .then (setRedirectUser (true))
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

      case 'balance':
        setBalance (e.target.value);
        break;
      case 'profilePhoto':
        setProfilePhoto (e.target.value);
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
      <div className="container mt-3">
        <h5><RiAddCircleFill size="30" /> Create New User</h5>

        <form onSubmit={handleSubmit} id="addUserForm">
          <div className="form-row">
            <div className="col">
              <label className="small">firstname</label>
              <input
                type="text"
                className="form-control"
                name="firstname"
                value={firstname}
                onChange={handleChange}
                placeholder=""
              />
            </div>
            <div className="col">
              <label className="small">lastname</label>
              <input
                type="text"
                className="form-control"
                name="lastname"
                value={lastname}
                onChange={handleChange}
                placeholder=""
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
                placeholder=""
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
                placeholder=""
              />
            </div>
          </div>
          <div className="form-row">
            <div className="col">
              <label className="small">Password</label>
              <input
                type="password"
                className="form-control"
                name="password"
                value={password}
                onChange={handleChange}
              />
            </div>

            <div className="col">
              <label className="small">Profile picture</label><br />
              <input
                type="file"
                name="profilePhoto"
                value={profilePhoto}
                onChange={handleChange}
              />
            </div>
          </div>

          <button className="btn btn-success mt-3 text-white">
            <small>Create User</small>
          </button>
        </form>
      </div>
    </React.Fragment>
  );
}

export default NewUser;
