import { Container } from "native-base";
import React, { Component } from "react";
import { Router, Scene } from "react-native-router-flux";
import Admin from "./src/admin/index";
import Home from "./src/pages/Home";
import Login from "./src/pages/Login";
import Signup from "./src/pages/Signup";
import Page from "./src/pages";

export default class App extends Component {
  render() {
    console.disableYellowBox = true;
    return (
      <Container>
        <Router>
          <Scene key="root" hideNavBar>
            <Scene key="home" component={Home} />
            <Scene key="login" component={Login} />
            <Scene key="signup" component={Signup} />
            <Scene key="page" component={Page} />
            <Scene key="admin" component={Admin} initial />
          </Scene>
        </Router>
      </Container>
    );
  }
}
