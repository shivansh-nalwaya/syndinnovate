import { Card, CardItem, Text } from "native-base";
import React, { Component } from "react";
import { StyleSheet, View, Image } from "react-native";
import Images from "../images";

class Box extends Component {
  render() {
    return (
      <View style={styles.boxContainer}>
        <Image source={this.props.image} style={styles.image} />
        <Text style={styles.textCenter}>{this.props.title}</Text>
      </View>
    );
  }
}

class Dashboard extends Component {
  render() {
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
            <Box image={Images.SavingsAccount} title="Savings Account" />
            <Box image={Images.CreditCard} title="Credit Card" />
          </View>
          <View style={styles.row}>
            <Box image={Images.HousingLoan} title="Housing Loan" />
            <Box image={Images.PersonalLoan} title="Personal Loan" />
          </View>
          <View style={styles.row}>
            <Box image={Images.InsurancePolicy} title="Insurance Policy" />
            <Box image={Images.Others} title="Others" />
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
  row: { flexDirection: "row" }
});

export default Dashboard;
