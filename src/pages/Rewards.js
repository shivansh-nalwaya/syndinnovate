import React from "react";
import {
  Card,
  CardItem,
  H2,
  Text,
  List,
  Left,
  Right,
  Icon,
  ListItem
} from "native-base";
import { ScrollView, View } from "react-native";

export default class Rewards extends React.PureComponent {
  render() {
    return (
      <View style={{ padding: 20 }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            marginBottom: 20
          }}
        >
          <View style={{ alignItems: "center" }}>
            <Text style={{ margin: 10, color: "#787878" }}>Total Rewards</Text>
            <H2>2000</H2>
          </View>
          <View style={{ alignItems: "center" }}>
            <Text style={{ margin: 10, color: "#787878" }}>Total Leads</Text>
            <H2>200</H2>
          </View>
        </View>
        <Card>
          <CardItem>
            <Left>
              <Text style={{ fontSize: 18 }}>Recent rewards</Text>
            </Left>
            <Right>
              <Icon
                size={18}
                style={{ color: "black" }}
                name="md-arrow-down"
              ></Icon>
            </Right>
          </CardItem>
          <CardItem>
            <ScrollView style={{ height: 400 }}>
              <List>
                {[...Array(10).keys()].map(() => {
                  return (
                    <ListItem>
                      <Left>
                        <View
                          style={{
                            flexDirection: "column",
                            alignItems: "center"
                          }}
                        >
                          <Text style={{ alignSelf: "flex-start" }}>
                            Simon Mignolet
                          </Text>
                          <Text
                            style={{
                              color: "#676767",
                              fontSize: 14,
                              alignSelf: "flex-start"
                            }}
                          >
                            Credit Card
                          </Text>
                        </View>
                      </Left>
                      <Right>
                        <Text style={{ color: "limegreen" }}>+ 30</Text>
                      </Right>
                    </ListItem>
                  );
                })}
              </List>
            </ScrollView>
          </CardItem>
        </Card>
      </View>
    );
  }
}
