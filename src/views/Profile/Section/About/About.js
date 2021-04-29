import { useState } from "react";

const About = () => {
  const [userDetails, setUserDetails] = useState({
    fullname: { value: "Rashmi Rashmi", edit: true },
    email: { value: "rasmi@gmail.com" },
    phone: { value: "999999990", edit: false },
    gender: { value: "Male/Female/Other", edit: false },
  });

  const handleDetailsClick = (field, value) => {
    setUserDetails((prevDetails) => {
      const UserDetails = { ...prevDetails };
      UserDetails[field].value = value;
      return UserDetails;
    });
  };

  const handleEditClicked = (field) => {
    setUserDetails((prevDetails) => {
      const UserDetails = { ...prevDetails };
      UserDetails[field].edit = !UserDetails[field].edit;
      return UserDetails;
    });
  };

  return (
    <div>
      <div className="col-md-12">
        <div className="card mb-3">
          <div className="card-body">
            <div className="row">
              <div className="col-sm-3">
                <h6 className="mb-0">Full Name</h6>
              </div>
              <div className="col-sm-9">
                {userDetails.fullname.edit ? (
                  <input
                    type="text text-secondary"
                    value={userDetails.fullname.value}
                    onChange={(e) => {
                      handleDetailsClick("fullname", e.target.value);
                    }}
                  />
                ) : (
                  <span className="col-sm-9 text-secondary">
                    {userDetails.fullname.value}
                  </span>
                )}
                <button
                  className="btn btn-sm btn-outline-primary float-right"
                  onClick={() => handleEditClicked("fullname")}
                >
                  Edit
                </button>
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-sm-3">
                <h6 className="mb-0">Email</h6>
              </div>
              <div className="col-sm-9">
                {userDetails.email.edit ? (
                  <input
                    type="text text-secondary"
                    value={userDetails.email.value}
                    onChange={(e) => {
                      handleDetailsClick("email", e.target.value);
                    }}
                  />
                ) : (
                  <span className="col-sm-9 text-secondary">
                    {userDetails.email.value}
                  </span>
                )}
                <button
                  className="btn btn-sm btn-outline-primary float-right"
                  onClick={() => handleEditClicked("fullname")}
                >
                  Edit
                </button>
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-sm-3">
                <h6 className="mb-0">Phone</h6>
              </div>
              <div className="col-sm-7 text-secondary">(239) 816-9029</div>
              <button className="btn btn-sm btn-outline-primary col-sm-2">
                Edit
              </button>
            </div>
            <hr />
            <div className="row">
              <div className="col-sm-3">
                <h6 className="mb-0">Address</h6>
              </div>
              <div className="col-sm-7 text-secondary">
                Bay Area, San Francisco, CA
              </div>
              <button className="btn btn-sm btn-outline-primary col-sm-2">
                Edit
              </button>
            </div>
            <hr />
            <div className="row">
              <div className="col-sm-3">
                <h6 className="mb-0">Gender</h6>
              </div>
              <div className="col-sm-7 text-secondary">
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineRadio1"
                    value="option1"
                  />
                  <label class="form-check-label" for="inlineRadio1">
                    Male
                  </label>
                </div>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineRadio2"
                    value="option2"
                  />
                  <label class="form-check-label" for="inlineRadio2">
                    Female
                  </label>
                </div>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineRadio2"
                    value="option2"
                  />
                  <label class="form-check-label" for="inlineRadio2">
                    Other
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
