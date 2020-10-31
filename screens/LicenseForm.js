import React, { useState } from "react";
import { View, ScrollView, Text } from "react-native";
import {
    Appbar,
    TextInput,
    HelperText,
    Button,
    Menu,
    Divider,
    Subheading,
    Checkbox,
} from "react-native-paper";
import primaryColors from "../primaryColors";

export default function LicenseForm({ navigation }) {
    const [text, setText] = useState("");
    const onChangeText = (text) => {
        setText(text);
        setShow(false);
    };
    const [show, setShow] = useState(false);
    const hasErrors = () => {
        if (text.length == 0) {
            setShow(true);
        }
    };
    const [visible, setVisible] = React.useState(false);

    const openMenu = () => setVisible(true);

    const closeMenu = () => setVisible(false);

    const [checked, setChecked] = React.useState(false);
    return (
        <ScrollView
            style={{
                backgroundColor: "white",
            }}
        >
            <Appbar.Header
                style={{ backgroundColor: primaryColors.orangeColor }}
            >
                <Appbar.BackAction onPress={() => navigation.pop()} />
                <Appbar.Content title="License Form" />
            </Appbar.Header>
            <View
                style={{
                    backgroundColor: "white",
                    height: "100%",
                    paddingHorizontal: 30,
                    paddingTop: 60,
                }}
            >
                {/* <Subheading>
                    Please ensure you have uploaded the required documents in
                    the upload documents section. 1. Address Proof 2.Age Proof
                    3.Learner's Driving License 4. Pan Card
                </Subheading> */}
                <Menu
                    visible={visible}
                    onDismiss={closeMenu}
                    anchor={
                        <Button
                            style={{
                                width: "100%",
                                paddingTop: 8,
                                marginTop: 5,
                                height: 55,
                            }}
                            mode="outlined"
                            color={primaryColors.orangeColor}
                            onPress={openMenu}
                            icon="chevron-down"
                            labelStyle={{
                                fontSize: 30,
                            }}
                        >
                            <Text
                                style={{
                                    fontSize: 16,
                                }}
                            >
                                Select Residence Proof
                            </Text>
                        </Button>
                    }
                >
                    <Menu.Item onPress={() => {}} title="Item 1" />
                    <Menu.Item onPress={() => {}} title="Item 2" />
                    <Divider />
                    <Menu.Item onPress={() => {}} title="Item 3" />
                </Menu>
                <HelperText
                    type="error"
                    visible={show}
                    style={{ marginBottom: 9, marginTop: -6, marginLeft: -8 }}
                >
                    You have not uploaded this document. Please go back to
                    upload using upload documents.
                </HelperText>
                <Menu
                    visible={visible}
                    onDismiss={closeMenu}
                    anchor={
                        <Button
                            style={{
                                width: "100%",
                                paddingTop: 8,
                                marginTop: 5,
                                height: 55,
                            }}
                            mode="outlined"
                            color={primaryColors.orangeColor}
                            onPress={openMenu}
                            icon="chevron-down"
                            labelStyle={{
                                fontSize: 30,
                            }}
                        >
                            <Text
                                style={{
                                    fontSize: 16,
                                }}
                            >
                                Select Age Proof
                            </Text>
                        </Button>
                    }
                >
                    <Menu.Item onPress={() => {}} title="Item 1" />
                    <Menu.Item onPress={() => {}} title="Item 2" />
                    <Divider />
                    <Menu.Item onPress={() => {}} title="Item 3" />
                </Menu>
                <HelperText
                    type="error"
                    visible={show}
                    style={{ marginBottom: 9, marginTop: -6, marginLeft: -8 }}
                >
                    You have not uploaded this document. Please go back to
                    upload using upload documents.
                </HelperText>
                <View
                    style={{
                        flexDirection: "row",
                        alignItems: "center",
                        marginBottom: 7,
                    }}
                >
                    <View style={{ flex: 1 }}>
                        <Checkbox
                            status={checked ? "checked" : "unchecked"}
                            color={primaryColors.orangeColor}
                            onPress={() => {
                                setChecked(!checked);
                            }}
                        />
                    </View>
                    <View style={{ flex: 7 }}>
                        <Text>
                            I have uploaded my learner's driving license.
                        </Text>
                    </View>
                </View>
                <View
                    style={{
                        flexDirection: "row",
                        alignItems: "center",
                        marginBottom: 25,
                    }}
                >
                    <View style={{ flex: 1 }}>
                        <Checkbox
                            status={checked ? "checked" : "unchecked"}
                            color={primaryColors.orangeColor}
                            onPress={() => {
                                setChecked(!checked);
                            }}
                        />
                    </View>
                    <View style={{ flex: 7 }}>
                        <Text>I have uploaded my PAN Card.</Text>
                    </View>
                </View>
                <Button
                    icon="check"
                    color={primaryColors.orangeColor}
                    mode="contained"
                    // onPress={selectLocality}
                    labelStyle={{ fontSize: 16, color: "white" }}
                >
                    Confirm
                </Button>
            </View>
        </ScrollView>
    );
}
