import React, { Component } from "react";
import { Router, Scene } from "react-native-router-flux";
import Header from "../components/Header";
import Dashboard from "./Dashboard";
import Form from "./Form";

export default class Page extends Component {
  render() {
    return (
      <Router navBar={Header}>
        <Scene key="root">
          <Scene key="dashboard" title="Home" component={Dashboard} />
          <Scene key="form" title="Form" component={Form} />
        </Scene>
      </Router>
    );
  }
}
