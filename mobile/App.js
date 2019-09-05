import { Container } from "native-base";
import React, { Component } from "react";
import { Router, Scene } from "react-native-router-flux";
import Header from "./src/components/Header";
import Footer from "./src/components/Footer";
import Admin from "./src/admin/index";
import { ROUTES } from "./Constants";

export default class App extends Component {
  render() {
    console.disableYellowBox = true;
    return (
      <Container>
        <Header />
        <Router>
          <Scene key="root" hideNavBar>
            {ROUTES.map((r, i) => (
              <Scene key={r.action} component={r.component} />
            ))}
            <Scene key="admin" component={Admin} />
          </Scene>
        </Router>
        <Footer />
      </Container>
    );
  }
}
