import React from 'react';

function Signup() {
  return (
    <div>
      <form className="row g-3">
        <div className="col-md-6">
          <label htmlFor="inputName" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="inputName"
            placeholder="First and Last Name"
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="inputEmailAddress" className="form-label">
            Email Address
          </label>
          <input
            type="text"
            className="form-control"
            id="inputEmailAddress"
          />
        </div>
        <div className="col-11">
          <label htmlFor="inputUserName" className="form-label">
            Username
          </label>
          <input
            type="text"
            className="form-control"
            id="inputUserName"
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="inputPassword" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="inputPassword"
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="inputPasswordConfirmation" className="form-label">
            Password Confirmation
          </label>
          <input
            type="password"
            className="form-control"
            id="inputPasswordConfirmation"
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="inputSpecialization" className="form-label">
            Specialization
          </label>
          <input
            type="text"
            className="form-control"
            id="inputSpecialization"
          />
        </div>
        <div className="col-12">
          <label htmlFor="inputAddress" className="form-label">
            Address
          </label>
          <input
            type="text"
            className="form-control"
            id="inputAddress"
            placeholder="1234 Main St"
          />
        </div>
        <div className="col-12">
          <label htmlFor="inputPhoneNumber" className="form-label">
            Phone Number
          </label>
          <input
            type="text"
            className="form-control"
            id="inputPhoneNumber"
          />
        </div>
        <div className="col-12 d-flex justify-content-center">
          <button type="submit" className="btn btn-primary">
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
}

export default Signup;
