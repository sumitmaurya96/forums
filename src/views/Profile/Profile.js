import { useState } from "react";
import "./Profile.css";
import YourForums from "./Section/YourForums/YourForums";
import YourPosts from "./Section/YourPosts/YourPosts";
import About from "./Section/About/About";
import Following from "./Section/Following/Following";
import Followers from "./Section/Followers/Followers";

const Profile = (props) => {
  const { apiLink } = props;
  const [currPage, setCurrPage] = useState(1);

  const [userDetails, setUserDetails] = useState({
    fullname: "Rashmi Rashmi",
    email: "rasmi@gmail.com",
    phone: "999999990",
    gender: "Female",
    dateOfJoining: "20-Aug-2020",
    image: "/img/Content/avatar/avatar7.png",
  });

  const handleDetailsClick = (field, value) => {
    setUserDetails((prevDetails) => {
      const UserDetails = { ...prevDetails };
      UserDetails[field] = value;
      return UserDetails;
    });
  };

  const handleNavClick = (page) => {
    setCurrPage(page);
  };

  const getPage = () => {
    switch (currPage) {
      case 1:
        return <YourPosts />;
      case 2:
        return <YourForums />;
      case 3:
        return (
          <About
            {...props}
            userDetails={userDetails}
            handleDetailsClick={handleDetailsClick}
          />
        );
      case 4:
        return <Following />;
      default:
        return <Followers />;
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="fb-profile-block">
            <div className="fb-profile-block-thumb cover-container"></div>
            <div className="profile-img">
              <a href="#">
                <img src={`${apiLink}${userDetails.image}`} alt="" title="" />
              </a>
            </div>
            <div className="profile-name">
              <h2>{userDetails.fullname}</h2>
            </div>

            <div className="fb-profile-block-menu">
              <div className="block-menu">
                <ul className="bg-warning">
                  <li>
                    <a href="#" onClick={() => handleNavClick(1)}>
                      Your Posts
                    </a>
                  </li>
                  <li>
                    <a href="#" onClick={() => handleNavClick(2)}>
                      Your Forums
                    </a>
                  </li>
                  <li>
                    <a href="#" onClick={() => handleNavClick(3)}>
                      About
                    </a>
                  </li>
                  <li>
                    <a href="#" onClick={() => handleNavClick(4)}>
                      Following
                    </a>
                  </li>
                  <li>
                    <a href="#" onClick={() => handleNavClick(5)}>
                      Followers
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div>{getPage()}</div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
