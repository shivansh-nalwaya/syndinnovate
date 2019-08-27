import { Body, Button, Header, Icon, Left, Right, Title } from "native-base";
import React, { Component } from "react";
import { StyleSheet } from "react-native";

class Dashboard extends Component {
  render() {
    return (
      <Header style={styles.header}>
        <Left>
          <Button transparent>
            <Icon name="menu" />
          </Button>
        </Left>
        <Body>
          <Title>{this.props.title}</Title>
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

export default Dashboard;
