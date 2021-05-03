import Profile from "./views/Profile/Profile";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";

const App = (props) => {
  const apiLink = "https://bootdey.com";

  return (
    <div className="App">
      <Profile apiLink={apiLink} {...props} />
    </div>
  );
};

export default App;
