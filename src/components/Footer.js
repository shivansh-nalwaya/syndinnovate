import { Button, Footer, FooterTab, Icon, Text, View } from "native-base";
import React, { Component } from "react";
import { StyleSheet } from "react-native";
import ActionModel from "../models/ActionModel";
import { observer } from "mobx-react";

class CustomFooter extends Component {
  render() {
    if (ActionModel.hideHeaderFooter) return <View />;
    return (
      <Footer>
        <FooterTab style={styles.footer}>
          <Button vertical>
            <Icon type="FontAwesome" style={styles.darkText} name="home" />
            <Text style={styles.darkText}>Home</Text>
          </Button>
          <Button vertical>
            <Icon
              type="FontAwesome5"
              style={styles.darkText}
              name="chart-pie"
            />
            <Text style={styles.darkText}>Stats</Text>
          </Button>
          <Button vertical>
            <Icon type="FontAwesome" style={styles.darkText} name="star-o" />
            <Text style={styles.darkText}>Rewards</Text>
          </Button>
          <Button vertical>
            <Icon type="FontAwesome" style={styles.darkText} name="user" />
            <Text style={styles.darkText}>Profile</Text>
          </Button>
        </FooterTab>
      </Footer>
    );
  }
}

const styles = StyleSheet.create({
  footer: { backgroundColor: "#FF8C00" },
  darkText: { color: "black" }
});

export default observer(CustomFooter);
