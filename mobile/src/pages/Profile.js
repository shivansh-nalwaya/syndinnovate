import { Card, H3, Icon, Text, CardItem } from "native-base";
import React from "react";
import { Image, View } from "react-native";

export default class Profile extends React.PureComponent {
  render() {
    return (
      <View style={{ padding: 20 }}>
        <Card>
          <View style={{ flexDirection: "row" }}>
            <Image
              style={{
                flex: 1,
                height: 100,
                width: 100,
                resizeMode: "center"
              }}
              source={{
                uri:
                  "https://cdn2.vectorstock.com/i/1000x1000/20/76/man-avatar-profile-vector-21372076.jpg"
              }}
            />
            <View
              style={{
                flex: 3,
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <H3>
                Mike Johnson{" "}
                <Icon
                  style={{ fontSize: 18 }}
                  type="FontAwesome5"
                  name="check-circle"
                />
              </H3>
            </View>
          </View>
        </Card>
        <Card>
          <CardItem>
            <H3>Contact Info</H3>
          </CardItem>
          <CardItem style={{ marginBottom: -12 }}>
            <Text style={{ fontSize: 16, color: "#787878" }}>Address</Text>
          </CardItem>
          <CardItem>
            <Text>42, Brigade Road, London, UK</Text>
          </CardItem>
          <CardItem style={{ marginBottom: -12 }}>
            <Text style={{ fontSize: 16, color: "#787878" }}>Phone</Text>
          </CardItem>
          <CardItem>
            <Text>9826352398</Text>
          </CardItem>
          <CardItem style={{ marginBottom: -12 }}>
            <Text style={{ fontSize: 16, color: "#787878" }}>Email</Text>
          </CardItem>
          <CardItem>
            <Text>mikejohnson@gmail.com</Text>
          </CardItem>
        </Card>
      </View>
    );
  }
}
