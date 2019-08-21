import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import { Button, Text } from "native-base";
import { Actions } from "react-native-router-flux";

class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>SYND iNNOVATE</Text>
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

export default Home;
