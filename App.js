import { Container } from "native-base";
import React, { Component } from "react";
import { Router, Scene } from "react-native-router-flux";
import Header from "./src/components/Header";
import Footer from "./src/components/Footer";
import Dashboard from "./src/pages/Dashboard";
import Home from "./src/pages/Home";
import Login from "./src/pages/Login";
import Signup from "./src/pages/Signup";

export default class App extends Component {
  render() {
    console.disableYellowBox = true;
    return (
      <Container>
        <Header />
        <Router>
          <Scene key="root">
            <Scene key="home" component={Home} hideNavBar />
            <Scene key="login" component={Login} hideNavBar />
            <Scene key="signup" component={Signup} hideNavBar />
            <Scene key="dashboard" component={Dashboard} hideNavBar initial />
          </Scene>
        </Router>
        <Footer />
      </Container>
    );
  }
}
