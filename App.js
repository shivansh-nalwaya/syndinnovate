import React, { Component } from "react";
import Home from "./src/pages/Home";
import Login from "./src/pages/Login";
import Signup from "./src/pages/Signup";
import { Router, Scene } from "react-native-router-flux";

class Routes extends Component {
  render() {
    console.disableYellowBox = true;
    return (
      <Router>
        <Scene key="root" hideNavBar={true}>
          <Scene key="home" component={Home} initial={true} />
          <Scene key="login" component={Login} />
          <Scene key="signup" component={Signup} />
        </Scene>
      </Router>
    );
  }
}

export default Routes;
