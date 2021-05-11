import React, { useState } from "react";

const About = (props) => {
  const { userDetails, handleDetailsClick = () => {} } = props;
  const [editDetails, setEditDetails] = useState(false);

  const editProfileHandler = () => {
    setEditDetails((prevState) => {
      return !prevState;
    });
  };

  return (
    <div className="row" style={{ width: "100%" }}>
      <div className="col-md-12">
        <div className="card mb-3">
          <div className="card-body">
            <div className="row">
              <div className="col-sm-3">
                <h6 className="mb-0">Full Name</h6>
              </div>
              <div className="col-sm-9 text-secondary">
                {editDetails ? (
                  <input
                    type="text"
                    value={userDetails.fullname}
                    onChange={(e) => {
                      handleDetailsClick("fullname", e.target.value);
                    }}
                  />
                ) : (
                  <React.Fragment>{userDetails.fullname}</React.Fragment>
                )}
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-sm-3">
                <h6 className="mb-0">Email</h6>
              </div>
              <div className="col-sm-9 text-secondary">{userDetails.email}</div>
            </div>
            <hr />
            <div className="row">
              <div className="col-sm-3">
                <h6 className="mb-0">Phone</h6>
              </div>
              <div className="col-sm-9 text-secondary">
                {editDetails ? (
                  <input
                    type="text"
                    value={userDetails.phone}
                    onChange={(e) => {
                      handleDetailsClick("phone", e.target.value);
                    }}
                  />
                ) : (
                  <React.Fragment>{userDetails.phone}</React.Fragment>
                )}
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-sm-3">
                <h6 className="mb-0">Joining Date</h6>
              </div>
              <div className="col-sm-9 text-secondary">
                {userDetails.dateOfJoining}
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-sm-3">
                <h6 className="mb-0">Gender</h6>
              </div>
              <div className="col-sm-9 text-secondary">
                {editDetails ? (
                  <React.Fragment>
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadio1"
                        value="Male"
                        onChange={(e) => {
                          handleDetailsClick("gender", e.target.value);
                        }}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="inlineRadio1"
                      >
                        Male
                      </label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadio2"
                        value="Female"
                        onChange={(e) => {
                          handleDetailsClick("gender", e.target.value);
                        }}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="inlineRadio2"
                      >
                        Female
                      </label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadio2"
                        value="Other"
                        onChange={(e) => {
                          handleDetailsClick("gender", e.target.value);
                        }}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="inlineRadio2"
                      >
                        Other
                      </label>
                    </div>
                  </React.Fragment>
                ) : (
                  <React.Fragment>{userDetails.gender}</React.Fragment>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6 offset-sm-3 text-center">
            <button
              className="btn btn-outline-primary"
              onClick={editProfileHandler}
            >
              {editDetails ? "Save" : "Edit"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
