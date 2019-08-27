import React, { Component } from "react";
import { Router, Scene } from "react-native-router-flux";
import Header from "./src/components/Header";
import Home from "./src/pages/Home";
import Login from "./src/pages/Login";
import Signup from "./src/pages/Signup";
import Dashboard from "./src/pages/Dashboard";

class Routes extends Component {
  render() {
    console.disableYellowBox = true;
    return (
      <Router navBar={Header}>
        <Scene key="root">
          <Scene key="home" component={Home} hideNavBar />
          <Scene key="login" component={Login} hideNavBar />
          <Scene key="signup" component={Signup} hideNavBar />
          <Scene key="dashboard" component={Dashboard} title="Home" initial />
        </Scene>
      </Router>
    );
  }
}

export default Routes;
