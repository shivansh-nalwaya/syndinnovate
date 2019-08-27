import {
  Body,
  Button,
  Header,
  Icon,
  Left,
  Right,
  Title,
  View
} from "native-base";
import React, { Component } from "react";
import { StyleSheet } from "react-native";
import ActionModel from "../models/ActionModel";
import { observer } from "mobx-react";

class CustomHeader extends Component {
  render() {
    if (ActionModel.hideHeaderFooter) return <View />;
    return (
      <Header style={styles.header}>
        <Left>
          <Button transparent>
            <Icon name="menu" />
          </Button>
        </Left>
        <Body>
          <Title>{this.props.title || "Home"}</Title>
        </Body>
        <Right>
          <Button transparent>
            <Icon name="md-notifications" />
          </Button>
        </Right>
      </Header>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#FF8C00"
  }
});

export default observer(CustomHeader);
