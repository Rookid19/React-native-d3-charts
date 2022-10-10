import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import React, { FC } from "react";

export default function App() {
  const makeGraph = (data) => {};

  // calculating the max and min values in our dataset
  const max = Math.max(...data.map((val) => val.value));
  const min = Math.min(...data.map((val) => val.value));

  // This will ensure all our data points are mapped to y coordinates on the
  // screen that is no greater then the graph’s height.
  //create y axis line
  const y = scaleLinear().domain([0, max]).range([GRAPH_HEIGHT, 35]);

  // starting point and ending points at the first and fifteenth of the month respectively
  //
  const x = scaleTime()
    .domain([new Date(2000, 1, 1), new Date(2000, 1, 15)])
    .range([10, GRAPH_WIDTH - 10]);

  //  creating the line chart using the line function from D3
  const curvedLine = line()
    .x((d) => x(new Date(d.date)))
    .y((d) => y(d.value))
    .curve(curveBasis)(data);
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
