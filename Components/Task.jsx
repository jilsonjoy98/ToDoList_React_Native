//import liraries
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

// create a component
const Task = (props) => {
  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <TouchableOpacity style={styles.square}></TouchableOpacity>
        <Text style={styles.itemText}>{props.text}</Text>
      </View>
      <View style={styles.circle} ></View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  item: {
    backgroundColor: "#FFF",
    padding: 10,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent:"space-between",
    marginBottom:20
  },

  itemLeft: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },
  square: {
    width: 24,
    height: 24,
    backgroundColor: "#55BCF6",
    opacity: 0.4,
    borderRadius: 5,
    marginRight:15,
  },
  itemText: {},
  circle: {
    width:12,
    height:12,
    borderColor:"red",
    borderWidth:2,
    borderRadius:5,
  },
});

//make this component available to the app
export default Task;
