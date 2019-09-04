import React from "react";
import { PieChart, BarChart } from "react-native-svg-charts";
import { Card, CardItem, H2, Text } from "native-base";
import { ScrollView } from "react-native";

export default class Stats extends React.PureComponent {
  render() {
    const data = [10, 20, 30, 40];

    const colors = ["#0FB0FF", "#4293FF", "#5673FF", "#5B5AFC"];

    const pieData = data.map((value, index) => ({
      value,
      svg: {
        fill: colors[index],
        onPress: () => console.log("press", index)
      },
      key: `pie-${index}`
    }));

    const fill = "#0FB0FF";

    return (
      <ScrollView style={{ padding: 10 }}>
        <Card style={{ margin: 10 }}>
          <CardItem>
            <H2>Rewards</H2>
          </CardItem>
          <CardItem>
            <Text>Last 30 days</Text>
          </CardItem>
          <BarChart
            style={{ height: 200, margin: 20 }}
            data={data}
            svg={{ fill }}
            contentInset={{ top: 30, bottom: 30 }}
          ></BarChart>
        </Card>
        <Card style={{ margin: 10 }}>
          <CardItem>
            <H2>Leads</H2>
          </CardItem>
          <CardItem>
            <Text>Last 30 days</Text>
          </CardItem>
          <PieChart style={{ height: 200, margin: 20 }} data={pieData} />
        </Card>
      </ScrollView>
    );
  }
}
