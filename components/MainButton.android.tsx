import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, TouchableNativeFeedback, Platform } from "react-native"
import Colours from "../constants/colours";

function MainButton(props: any) {
    let ButtonComponent: any = TouchableOpacity;

    if (Platform.Version >= 21) {
        ButtonComponent = TouchableNativeFeedback;
    }

    return (
        <View style={styles.buttonContainer}>
            <ButtonComponent activeOpacity={0.6} onPress={props.onPress}>
                <View style={styles.button}>
                    <Text style={styles.buttonText}>{props.children}</Text>
                </View>
            </ButtonComponent>
        </View>
    );
}

const styles = StyleSheet.create({
    buttonContainer:{
        borderRadius: 25,  
        overflow: "hidden",
    },
    button: {
        backgroundColor: Colours.primary,
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 25,
    },
    buttonText: {
        color: "white",
        fontFamily: "open-sans",
        fontSize: 18
    }
});

export default MainButton