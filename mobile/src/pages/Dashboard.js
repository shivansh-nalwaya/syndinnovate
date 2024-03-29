import { Card, CardItem, Text, Spinner } from "native-base";
import React, { Component } from "react";
import { StyleSheet, View, Image, TouchableOpacity } from "react-native";
import { extendObservable } from "mobx";
import Categories from "../models/Categories";
import { observer } from "mobx-react";
import { Actions } from "react-native-router-flux";

class Box extends Component {
  render() {
    return (
      <TouchableOpacity
        style={styles.boxContainer}
        onPress={() =>
          Actions.jump("form", {
            form_id: this.props.form_id
          })
        }
      >
        <Image source={this.props.image} style={styles.image} />
        <Text style={styles.textCenter}>{this.props.title}</Text>
      </TouchableOpacity>
    );
  }
}

class Dashboard extends Component {
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
      <View style={styles.container}>
        <Card style={styles.card}>
          <CardItem style={styles.rewardItem}>
            <Text style={styles.rewardText}>Rewards earned</Text>
            <Text style={styles.rewardText}>4000</Text>
          </CardItem>
          <CardItem style={styles.leadItem}>
            <Text style={styles.leadText}>Leads generated</Text>
            <Text style={styles.leadText}>40</Text>
          </CardItem>
        </Card>
        <View style={styles.column}>
          <View style={styles.row}>
            {this.all.map((c, i) => (
              <Box
                key={i}
                id={c.id}
                image={c.image}
                title={c.title}
                form_id={c.form_config.id}
              />
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

export default observer(Dashboard);
