import React from "react";
import { View, Text, StyleSheet } from "react-native";
import colours from "../constants/colours";

function Header(props: any) {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>{props.title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 90,
    paddingTop: 36,
    backgroundColor: colours.primary,
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "open-sans-bold",
  },
  headerTitle: {
    color: "black",
    fontSize: 18,
  },
});

export default Header;
