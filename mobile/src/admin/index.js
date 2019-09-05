import React, { Component } from "react";
import { Router, Scene } from "react-native-router-flux";
import Dashboard from "./Dashboard";

export default class App extends Component {
  render() {
    return (
      <Router>
        <Scene key="root" hideNavBar>
          <Scene key="admin" component={Dashboard} />
        </Scene>
      </Router>
    );
  }
}
