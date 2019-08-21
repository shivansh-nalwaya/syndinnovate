import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import { Button, Text } from "native-base";

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>SYND iNNOVATE</Text>
        <View style={styles.buttonContainer}>
          <Button block style={styles.button}>
            <Text>Login</Text>
          </Button>
          <Button block style={styles.button}>
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

export default App;
