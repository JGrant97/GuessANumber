import React from "react";
import { View, Text, StyleSheet, Image, Dimensions, ScrollView } from "react-native";
import BodyText from "../components/BodyText";
import TitleText from "../components/TitleText";
import Colours from "../constants/colours";
import MainButton from "../components/MainButton";

function GameOverScreen(props: any) {
  return (
      <ScrollView>
        <View style={styles.screen}>
          <TitleText>The Game is over!</TitleText>
          <View style={styles.imageContainer}>
            <Image source={require("../assets/success.png")}
              style={styles.image}
              resizeMode="cover"
            />
          </View>
          <View style={styles.resultContainer}>
            <BodyText style={styles.resultText}>
              Your phone needed <Text style={styles.highlight}>{props.roundsNumber} </Text>
              rounds to guess the number <Text style={styles.highlight}>{props.userNumber}</Text>
            </BodyText>
          </View>
          <MainButton onPress={props.onRestart}>NEW GAME</MainButton>
        </View>
      </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 11
  },
  imageContainer: {
    width: Dimensions.get("window").width * 0.7,
    height: Dimensions.get("window").width * 0.7,
    borderRadius: Dimensions.get("window").width * 0.7 / 2,
    borderWidth: 3,
    borderColor: "black",
    overflow: "hidden",
    marginVertical: Dimensions.get("window").height / 30
  },
  image: {
    width: "100%",
    height: "100%",
  },
  highlight: {
    color: Colours.primary,
    fontFamily: "open-sans-bold",
  },
  resultText: {
    textAlign: "center",
    fontSize: Dimensions.get("window").height < 400 ? 16 : 20
  },
  resultContainer: {
    marginHorizontal: 30,
    marginVertical: Dimensions.get("window").height / 60
  }

});

export default GameOverScreen;
