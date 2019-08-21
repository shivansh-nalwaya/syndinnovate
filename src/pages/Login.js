import { Button, Card, CardItem, Input, Item, Label, Text } from "native-base";
import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { Actions } from "react-native-router-flux";

class Login extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>Login</Text>
        <Card style={styles.formContainer}>
          <CardItem>
            <Item stackedLabel style={styles.formContainer}>
              <Label>Email or Contact</Label>
              <Input />
            </Item>
          </CardItem>
          <CardItem>
            <Item stackedLabel style={styles.formContainer}>
              <Label>Password</Label>
              <Input />
            </Item>
          </CardItem>
          <CardItem>
            <Text style={styles.link}>Forgot password?</Text>
          </CardItem>
          <CardItem>
            <Button block style={styles.button}>
              <Text>Login</Text>
            </Button>
          </CardItem>
          <CardItem style={styles.center}>
            <Text style={styles.grey}>New here? </Text>
            <TouchableOpacity onPress={() => Actions.jump("signup")}>
              <Text style={styles.link}>Sign up</Text>
            </TouchableOpacity>
          </CardItem>
        </Card>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    alignItems: "center",
    justifyContent: "space-around"
  },
  heading: {
    justifyContent: "center",
    fontSize: 30,
    color: "#787878"
  },
  button: {
    width: "94%",
    borderRadius: 10,
    margin: 10,
    backgroundColor: "#FF8C00"
  },
  formContainer: {
    width: "100%"
  },
  grey: {
    fontSize: 14,
    color: "#9a9a9a"
  },
  link: {
    fontSize: 14,
    color: "#e27900"
  },
  center: {
    justifyContent: "center",
    alignItems: "center"
  }
});

export default Login;
