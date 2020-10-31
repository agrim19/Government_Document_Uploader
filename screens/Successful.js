import React from "react";
import { View, ScrollView } from "react-native";
import BigImage from "./BigImage.js";

export default function Successful({ navigation }) {
    return (
        <ScrollView
            style={{
                backgroundColor: "white",
            }}
        >
            <View
                style={{
                    backgroundColor: "white",
                    height: "100%",
                    paddingHorizontal: 30,
                    paddingTop: 60,
                    marginVertical: "30%",
                }}
            >
                <BigImage image="https://image.freepik.com/free-vector/message-bubble-notifications-with-check-marks-mobile-phone_212005-36.jpg" />
            </View>
        </ScrollView>
    );
}
