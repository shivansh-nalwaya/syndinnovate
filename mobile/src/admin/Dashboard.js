import { Card, CardItem, Text, Spinner } from "native-base";
import React, { Component } from "react";
import { StyleSheet, View, Image, TouchableOpacity } from "react-native";
import { extendObservable } from "mobx";
import Categories from "../models/Categories";
import { observer } from "mobx-react";
import ActionModel from "../models/ActionModel";

class Box extends Component {
  render() {
    return (
      <TouchableOpacity
        style={styles.boxContainer}
        onPress={() => ActionModel.jump("form")}
      >
        <Image source={this.props.image} style={styles.image} />
        <Text style={styles.textCenter}>{this.props.title}</Text>
      </TouchableOpacity>
    );
  }
}

class AdminDashboard extends Component {
  constructor(props) {
    super(props);
    extendObservable(this, {
      loading: true,
      all: []
    });
    const c = new Categories();
    c.all().then(res => {
      this.all = res;
      this.loading = false;
    });
  }

  render() {
    if (this.loading) return <Spinner />;
    return (
      <View style={styles.container}>
        <View style={styles.column}>
          <View style={styles.row}>
            {this.all.map((c, i) => (
              <Box key={i} id={c.id} image={c.image} title={c.title} />
            ))}
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: "center"
  },
  boxContainer: {
    width: "46%",
    margin: "2%",
    padding: 16,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 5,
    backgroundColor: "white"
  },
  card: {
    width: "100%"
  },
  rewardItem: {
    padding: 16,
    backgroundColor: "#676767",
    justifyContent: "space-between"
  },
  leadItem: {
    padding: 16,
    justifyContent: "space-between"
  },
  rewardText: {
    marginVertical: 6,
    color: "white",
    fontSize: 16
  },
  leadText: {
    marginVertical: 6,
    fontSize: 16
  },
  textCenter: {
    textAlign: "center"
  },
  image: { height: 60, width: 60, marginBottom: 10 },
  column: { flexDirection: "column", marginTop: 10 },
  row: { flexDirection: "row", flexWrap: "wrap" }
});

export default observer(AdminDashboard);
