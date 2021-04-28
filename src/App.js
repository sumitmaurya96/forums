import Profile from "./views/Profile/Profile";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Profile />
      </div>
    );
  }
}

export default App;
