import React from "react";
import { View, Text, StyleSheet, Platform } from "react-native";
import colours from "../constants/colours";
import TitleText from "./TitleText";

function Header(props: any) {
  return (
    <View style={{
      ...styles.headerBase,
      ...Platform.select({
        ios: styles.headerIOS,
        android: styles.headerAndroid
      })
    }}
    >
      <TitleText style={styles.headerTitle}>{props.title}</TitleText>
    </View>
  );
}

const styles = StyleSheet.create({
  headerBase: {
    width: "100%",
    height: 90,
    paddingTop: 36,
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "open-sans-bold",

  },
  headerTitle: {
    color: Platform.OS == "ios" ? colours.primary : "white",
  },
  headerIOS: {
    backgroundColor: "white",
    borderBottomColor: "#ccc",
    borderBottomWidth: 1
  },
  headerAndroid: {
    backgroundColor: colours.primary,
  }
});

export default Header;
