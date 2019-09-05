import React, { Component } from "react";
import { Router, Scene } from "react-native-router-flux";
import Header from "../components/Header";
import Dashboard from "./Dashboard";

export default class Page extends Component {
  render() {
    return (
      <Router navBar={Header}>
        <Scene key="root">
          <Scene key="dashboard" component={Dashboard} />
        </Scene>
      </Router>
    );
  }
}
