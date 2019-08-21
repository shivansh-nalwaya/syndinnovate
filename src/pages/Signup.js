import {
  Button,
  Card,
  CardItem,
  Input,
  Item,
  Label,
  Text,
  Icon
} from "native-base";
import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { Actions } from "react-native-router-flux";

const IconButton = props => {
  return (
    <TouchableOpacity
      style={{
        justifyContent: "center",
        alignItems: "center",
        width: 36,
        height: 36,
        borderRadius: 36,
        backgroundColor: props.color
      }}
    >
      <Icon
        name={props.name}
        type="FontAwesome"
        style={{
          fontSize: 18,
          color: "white",
          textAlign: "center"
        }}
      />
    </TouchableOpacity>
  );
};

class Signup extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>Signup</Text>
        <Card style={styles.formContainer}>
          <CardItem>
            <Item stackedLabel style={styles.formContainer}>
              <Label>Email</Label>
              <Input />
            </Item>
          </CardItem>
          <CardItem>
            <Item stackedLabel style={styles.formContainer}>
              <Label>Contact</Label>
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
            <Button block style={styles.button}>
              <Text>Signup</Text>
            </Button>
          </CardItem>
          <CardItem
            style={{
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <View>
              <Text>Or signup using </Text>
            </View>
            <View
              style={{
                width: "100%",
                marginTop: 10,
                flexDirection: "row",
                justifyContent: "space-around"
              }}
            >
              <IconButton name="facebook" color="#4362C4" />
              <IconButton name="google" color="#F6002C" />
              <IconButton name="twitter" color="#3191F6" />
              <IconButton name="linkedin" color="#1A6BB7" />
            </View>
          </CardItem>
          <CardItem style={styles.center}>
            <Text style={styles.grey}>Already a member? </Text>
            <TouchableOpacity onPress={() => Actions.jump("login")}>
              <Text style={styles.link}>Log in</Text>
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

export default Signup;
