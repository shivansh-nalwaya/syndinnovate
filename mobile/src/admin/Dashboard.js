import {
  Text,
  Spinner,
  H1,
  List,
  ListItem,
  Button,
  Left,
  Icon,
  Right,
  Content
} from "native-base";
import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { extendObservable } from "mobx";
import Categories from "../models/Categories";
import { observer } from "mobx-react";
import { Actions } from "react-native-router-flux";

class AdminDashboard extends Component {
  constructor(props) {
    super(props);
    extendObservable(this, {
      loading: true,
      all: []
    });
    Categories.all().then(res => {
      this.all = res;
      this.loading = false;
    });
  }

  render() {
    if (this.loading) return <Spinner />;
    return (
      <Content>
        <H1>Categories</H1>
        <List>
          {this.all.map((x, i) => (
            <ListItem key={i} iconRight>
              <Left>
                <Text>{x.title}</Text>
              </Left>
              <Right>
                <Icon type="FontAwesome5" name="edit"></Icon>
              </Right>
            </ListItem>
          ))}
        </List>
        <Button bordered onPress={() => Actions.jump("category")}>
          <Text>Add Category</Text>
        </Button>
      </Content>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: "center"
  }
});

export default observer(AdminDashboard);
