import {
  Button,
  Card,
  CardItem,
  Input,
  Item,
  Label,
  Text,
  Spinner
} from "native-base";
import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import Actions from "../models/ActionModel";
import { observer } from "mobx-react";
import { decorate, observable } from "mobx";
import Session from "../models/Session";

class Login extends Component {
  loading = false;
  email = "example@mail.com";
  password = "123123123";

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>Login</Text>
        <Card style={styles.formContainer}>
          <CardItem>
            <Item stackedLabel style={styles.formContainer}>
              <Label>Email or Contact</Label>
              <Input onChangeText={e => (this.email = e)} />
            </Item>
          </CardItem>
          <CardItem>
            <Item stackedLabel style={styles.formContainer}>
              <Label>Password</Label>
              <Input onChangeText={p => (this.password = p)} />
            </Item>
          </CardItem>
          <CardItem>
            <Text style={styles.link}>Forgot password?</Text>
          </CardItem>
          <CardItem>
            <Button
              block
              disabled={this.loading}
              style={styles.button}
              onPress={() => {
                this.loading = true;
                const { email, password } = this;
                Session.login({ email, password })
                  .then(res => {
                    this.loading = false;
                    Actions.jump("dashboard");
                  })
                  .catch(err => {
                    this.loading = false;
                  });
              }}
            >
              {this.loading && <Spinner color="black" />}
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

decorate(Login, {
  loading: observable,
  email: observable,
  password: observable
});

export default observer(Login);
