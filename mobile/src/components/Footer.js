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
          {ActionModel.tabs.map(t => (
            <Button
              vertical
              onPress={() => ActionModel.jump(t.action)}
              style={ActionModel.current === t.action ? styles.activeTab : {}}
            >
              <Icon type="FontAwesome5" style={styles.darkText} name={t.icon} />
              <Text style={styles.darkText}>{t.title}</Text>
            </Button>
          ))}
        </FooterTab>
      </Footer>
    );
  }
}

const styles = StyleSheet.create({
  footer: { backgroundColor: "#FF8C00", padding: 0 },
  activeTab: {
    backgroundColor: "#d87300",
    borderColor: "#d87300",
    borderWidth: 1.5
  },
  darkText: { color: "black" }
});

export default observer(CustomFooter);
