import React from 'react';
import {Link} from 'react-router-dom';
import {RiAddLine, RiHome2Fill, RiLogoutBoxRFill} from 'react-icons/ri';

function Nav () {
  return (
    <nav className="mb- bg-danger text-white p-3 ">

      <Link to="/admin" className="btn btn-success text-white mr-2">
        <small><RiHome2Fill /> Home</small>
      </Link>

      {/* button to add new user */}
      <Link to="admin/user/add" className="btn btn-success text-white mr-2">
        <small><RiAddLine /> New user</small>
      </Link>

      <Link to="/" className="btn btn-success text-white mr-2">
        <small><RiLogoutBoxRFill /> Log out</small>
      </Link>
    </nav>
  );
}

export default Nav;
