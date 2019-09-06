import React, { Component } from "react";
import { Router, Scene } from "react-native-router-flux";
import Dashboard from "./Dashboard";
import Category from "./Category";
import Form from "./Form";

export default class App extends Component {
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene key="admin" title="Admin Dashboard" component={Dashboard} />
          <Scene key="category" title="Category" component={Category} />
          <Scene key="form" title="Form" component={Form} />
        </Scene>
      </Router>
    );
  }
}
