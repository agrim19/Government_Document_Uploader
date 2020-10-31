import React from "react";
import {
    View,
    ScrollView,
    FlatList,
    SafeAreaView,
    StatusBar,
    Text,
} from "react-native";
import BigImage from "./BigImage.js";
import { Button, Title, Subheading, Appbar } from "react-native-paper";
import primaryColors from "../primaryColors";

const DATA = [
    {
        id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
        title: "Aadhar Card",
    },
    {
        id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
        title: "PAN Card",
    },
    {
        id: "58694a0f-3da1-471f-bd96-145571e29d72",
        title: "Voter ID",
    },
];

const Item = ({ title }) => (
    <View>
        <Text
            style={{
                backgroundColor: "#d9ecf2",
                color: "#000",
                padding: 20,
                marginVertical: 8,
                marginHorizontal: 16,
                borderRadius: 7,
                fontSize: 15,
                fontWeight: "700",
            }}
        >
            {title}
        </Text>
    </View>
);

export default function SeeDocuments({ navigation }) {
    const renderItem = ({ item }) => <Item title={item.title} />;
    return (
        <View>
            <Appbar.Header style={{ backgroundColor: primaryColors.redColor }}>
                <Appbar.BackAction onPress={() => navigation.pop()} />
                <Appbar.Content title="List of Uploaded Documents" />
            </Appbar.Header>
            <ScrollView
                style={{
                    backgroundColor: "white",
                    height: "100%",
                    paddingHorizontal: 5,
                    paddingTop: 20,
                }}
            >
                <SafeAreaView
                    style={{
                        flex: 1,
                        marginTop: StatusBar.currentHeight || 0,
                    }}
                >
                    <FlatList
                        data={DATA}
                        renderItem={renderItem}
                        keyExtractor={(item) => item.id}
                    />
                </SafeAreaView>
            </ScrollView>
        </View>
    );
}
