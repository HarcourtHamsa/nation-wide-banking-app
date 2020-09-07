import React, {useState, useEffect} from 'react';
import Nav from './Nav';
import UserList from './UserList';
import axios from 'axios';

import {RiUserSearchLine} from 'react-icons/ri';

function Home () {
  // default state for app
  const [usersArray, setUsersArray] = useState ([]);

  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  useEffect (() => {
    axios
      .get ('/api/users')
      .then (res => {
        setUsersArray (Object.values (res.data));
      })
      .catch (err => console.log (err));
  }, []);

  // Event handler to delete users
  function handleDeleteUser (id) {
    axios
      .delete ('/api/users/delete/' + id)
      .then (setUsersArray (usersArray.filter (user => user.id !== id)))
      .catch (err => console.log (err));
  }

  return (
    <React.Fragment>
      <Nav />
      <main className="container mb-3 mt-3">
        <section>
          <h5> <RiUserSearchLine size="30" /> Database</h5>

          {/* table to display users */}
          <table className="table table-hover table-sm">
            <thead>
              <tr className="">
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
              {/* conditional rendering  */}
              {usersArray.length !== 0
                ? usersArray.map (user => (
                    <UserList
                      id={user._id}
                      key={user._id}
                      firstname={user.firstname}
                      lastname={user.lastname}
                      deleteUser={handleDeleteUser}
                    />
                  ))
                : null}
            </tbody>
          </table>

        </section>
      </main>
    </React.Fragment>
  );
}

export default Home;
