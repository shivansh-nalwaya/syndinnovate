import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import { Button, Text, Spinner } from "native-base";
import Actions from "../models/ActionModel";
import { observer } from "mobx-react";
import Session from "../models/Session";
import { decorate, observable } from "mobx";

class Home extends Component {
  constructor(props) {
    super(props);
    if (Session.isLoggedIn) Actions.jump("dashboard");
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>SYND iNNOVATE</Text>
        {this.loading ? (
          <Spinner></Spinner>
        ) : (
          <View style={styles.buttonContainer}>
            <Button
              block
              style={styles.button}
              onPress={() => Actions.jump("login")}
            >
              <Text>Login</Text>
            </Button>
            <Button
              block
              style={styles.button}
              onPress={() => Actions.jump("signup")}
            >
              <Text style={styles.buttonText}>Signup</Text>
            </Button>
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    justifyContent: "space-around",
    alignItems: "center"
  },
  heading: {
    justifyContent: "center",
    fontSize: 30,
    color: "#787878"
  },
  button: {
    borderRadius: 10,
    margin: 10,
    backgroundColor: "#FF8C00"
  },
  buttonContainer: {
    width: "100%"
  }
});

decorate(Home, {
  loading: observable
});

export default observer(Home);
