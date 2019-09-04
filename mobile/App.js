import { Container } from "native-base";
import React, { Component } from "react";
import { Router, Scene } from "react-native-router-flux";
import Header from "./src/components/Header";
import Footer from "./src/components/Footer";
import Dashboard from "./src/pages/Dashboard";
import Home from "./src/pages/Home";
import Login from "./src/pages/Login";
import Signup from "./src/pages/Signup";
import Stats from "./src/pages/Stats";
import Rewards from "./src/pages/Rewards";
import Profile from "./src/pages/Profile";
import Form from "./src/pages/Form";

export default class App extends Component {
  render() {
    console.disableYellowBox = true;
    return (
      <Container>
        <Header />
        <Router>
          <Scene key="root" hideNavBar>
            <Scene key="home" component={Home} />
            <Scene key="login" component={Login} />
            <Scene key="signup" component={Signup} />
            <Scene key="dashboard" component={Dashboard} initial />
            <Scene key="form" component={Form} />
            <Scene key="stats" component={Stats} />
            <Scene key="rewards" component={Rewards} />
            <Scene key="profile" component={Profile} />
          </Scene>
        </Router>
        <Footer />
      </Container>
    );
  }
}
