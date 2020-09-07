import React, {useContext} from 'react';
import {AppContext} from '../context/Context';

import {RiUser6Line} from 'react-icons/ri';

import TopNav from '../layouts/TopNav';

const MemberProfile = () => {
  // eslint-disable-next-line
  const [, , userDetails, setUserDetails] = useContext (AppContext);

  return (
    <div>
      <TopNav />
      <div className="container custom-margin">
        <p className="font-weight-bold">CUSTOMER PROFILE</p>

        <div className="row">
          <div className="col-xl-5 p-5 container card">
            <h5>
              <RiUser6Line size="30" /> Personalize
            </h5>
            <form>
              <div className="form-row">
                <div className="col-xl-6">
                  <label className="small">First name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder={userDetails.firstname}
                  />
                </div>
                <div className="col-xl-6">
                  {' '} <label className="small">Last name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder={userDetails.lastname}
                  />
                </div>
              </div>

              <label className="small">Email</label>
              <input
                type="email"
                className="form-control"
                placeholder={userDetails.emailaddress}
              />

              <label className="small">Account no.</label>
              <input
                type="email"
                className="form-control"
                placeholder="00223234020"
                disabled
              />

              <label className="small">Account type</label>
              <input
                type="email"
                className="form-control"
                placeholder="Savings"
                disabled
              />

              <p className="small text-bold mt-5 font-weight-bold">
                Change Password
              </p>
              <div className="form-row">
                <div className="col-xl-6">
                  <label className="small">old password</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder=""
                  />

                </div>
                <div className="col-xl-6">
                  <label className="small">new password</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder=""
                  />
                </div>
              </div>

              <button className="btn btn-red text-white mt-3">
                <small> Save Changes</small>
              </button>
            </form>
          </div>

          <div className="col-xl-6">

            <div className="card p-3">
              <p className="card-title font-weight-bold">
                ATM CARD DETAILS
              </p>
              <div className="card-body">
                <form>
                  <label className="text-success font-weight-bold">
                    Card Number
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="4257 9845 7609 XXXX"
                    disabled
                  />

                  <div className="form-row">
                    <div className="col">
                      {' '}
                      <label className="text-success font-weight-bold">
                        Ex.Date
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="06/26"
                        disabled
                      />
                    </div>
                    <div className="col">
                      {' '}
                      <label className="text-success font-weight-bold">
                        Csv
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="268"
                        disabled
                      />
                    </div>
                    <div className="col">
                      {' '}
                      <label className="text-success font-weight-bold">
                        Pin
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="0804"
                        disabled
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemberProfile;
