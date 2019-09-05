import {
  Body,
  Button,
  Header,
  Icon,
  Left,
  Right,
  Title,
  View,
  ListItem,
  Text,
  Picker,
  Container,
  List
} from "native-base";
import React, { Component } from "react";
import { StyleSheet, TouchableHighlight, Dimensions } from "react-native";
import Actions from "../models/ActionModel";
import { observer } from "mobx-react";
import styled from "styled-components";
import posed from "react-native-pose";
import Session from "../models/Session";

const Box = posed.View({
  visible: {
    left: 0,
    transition: { duration: 300 }
  },
  hidden: {
    left: -600,
    transition: { duration: 300 }
  }
});

const StyledBox = styled(Box)`
  position: absolute;
  left: -100;
  width: 300;
  z-index: 5;
  height: ${Dimensions.get("window").height};
`;

const LightContainer = styled(Container)``;

const PaddedList = styled(List)`
  margin-right: 20px;
`;

const routes = [
  { name: "Home", action: "dashboard", icon: "home" },
  { name: "Enquiries", action: "leads", icon: "address-book" },
  { name: "Admissions", icon: "graduation-cap" },
  { name: "Batches", action: "downloaded_batch_page", icon: "users" },
  { name: "Clock In / Clock Out", action: "user_attendance", icon: "clock-o" },
  {
    name: "Logout",
    icon: "sign-out",
    onPress: () => {
      Session.logout();
      Actions.jump("home");
    }
  }
];

class CustomHeader extends Component {
  state = { isOpen: false };

  render() {
    if (Actions.hideHeaderFooter) return <View />;
    return (
      <React.Fragment>
        <Header style={styles.header}>
          <Left>
            <Button
              transparent
              onPress={() => {
                this.setState({ isOpen: !this.state.isOpen });
              }}
            >
              <Icon name={this.state.isOpen ? "close" : "menu"} />
            </Button>
          </Left>
          <Body>
            <Title>
              {this.state.isOpen
                ? "Menu"
                : this.props.title || Actions.currentTitle}
            </Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name="md-notifications" />
            </Button>
          </Right>
        </Header>
        <View style={{ width: "100%" }}>
          <StyledBox pose={this.state.isOpen ? "visible" : "hidden"}>
            <LightContainer style={{ elevation: 50 }}>
              <View style={{ margin: 20 }}>
                <Text>Current Center</Text>
                <View
                  style={{
                    borderWidth: 1,
                    borderColor: "#9a9a9a",
                    borderRadius: 5,
                    marginTop: 4
                  }}
                >
                  <Picker
                    onValueChange={id => {
                      this.setState({ isOpen: false });
                      Sessions.setCenter(id)
                        .then(() => {
                          Toast.show({
                            text: "Center changed",
                            duration: 2000
                          });
                          Actions.jump("dashboard");
                        })
                        .catch(() => {
                          Toast.show({
                            text: "Unable to change center",
                            duration: 2000
                          });
                        });
                    }}
                  >
                    {[{ label: "1", value: "1" }].map(c => {
                      return (
                        <Picker.Item
                          key={c.value}
                          label={c.label}
                          value={c.value}
                        />
                      );
                    })}
                  </Picker>
                </View>
              </View>
              <PaddedList>
                {routes.map((data, ind) => {
                  return (
                    <ListItem
                      icon
                      key={ind}
                      style={{ marginVertical: 5 }}
                      onPress={() => {
                        if (data.action) Actions.jump(data.action);
                        else if (data.onPress) data.onPress();
                      }}
                    >
                      <Left>
                        <Icon
                          type="FontAwesome"
                          name={data.icon}
                          style={{ fontSize: 20 }}
                        />
                      </Left>
                      <Body>
                        <Text>{data.name}</Text>
                      </Body>
                    </ListItem>
                  );
                })}
              </PaddedList>
            </LightContainer>
          </StyledBox>
          {this.state.isOpen && (
            <TouchableHighlight
              style={{
                backgroundColor: "rgba(0,0,0,0.5)",
                position: "absolute",
                zIndex: 4,
                width: Dimensions.get("window").width,
                height: Dimensions.get("window").height
              }}
              onPress={() => {
                this.setState({ isOpen: false });
              }}
            >
              <Text />
            </TouchableHighlight>
          )}
        </View>
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#FF8C00"
  }
});

export default observer(CustomHeader);
