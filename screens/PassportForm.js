import React, { useState } from "react";
import { View, ScrollView } from "react-native";
import { Appbar, TextInput, HelperText, Button } from "react-native-paper";
import * as DocumentPicker from "expo-document-picker";
import primaryColors from "../primaryColors";

export default function PassportForm({ navigation }) {
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

    return (
        <ScrollView
            style={{
                backgroundColor: "white",
            }}
        >
            <Appbar.Header
                style={{ backgroundColor: primaryColors.headerColor }}
            >
                <Appbar.BackAction onPress={() => navigation.pop()} />
                <Appbar.Content title="Aadhar Form" />
            </Appbar.Header>
            <View
                style={{
                    backgroundColor: "white",
                    height: "100%",
                    paddingHorizontal: 30,
                    paddingTop: 60,
                }}
            >
                <TextInput
                    mode="outlined"
                    label="Full Name"
                    theme={{
                        colors: {
                            primary: primaryColors.headerColor,
                            placeholder: primaryColors.headerColor,
                        },
                    }}
                    style={{
                        marginBottom: 10,
                    }}
                    onChangeText={onChangeText}
                    autoCapitalize="words"
                />
                <HelperText
                    type="error"
                    visible={show}
                    style={{ marginBottom: 9, marginTop: -6, marginLeft: -8 }}
                >
                    Please fill this field
                </HelperText>
                <TextInput
                    mode="outlined"
                    label="Aadhaar Number"
                    theme={{
                        colors: {
                            primary: primaryColors.headerColor,
                            placeholder: primaryColors.headerColor,
                        },
                    }}
                    style={{
                        marginBottom: 10,
                    }}
                    onChangeText={onChangeText}
                    autoCapitalize="words"
                />
                <HelperText
                    type="error"
                    visible={show}
                    style={{ marginBottom: 9, marginTop: -6, marginLeft: -8 }}
                >
                    Please fill this field
                </HelperText>
                <TextInput
                    mode="outlined"
                    label="Field 2"
                    theme={{
                        colors: {
                            primary: primaryColors.headerColor,
                            placeholder: primaryColors.headerColor,
                        },
                    }}
                    style={{
                        marginBottom: 10,
                    }}
                    onChangeText={onChangeText}
                    autoCapitalize="words"
                />
                <HelperText
                    type="error"
                    visible={show}
                    style={{ marginBottom: 9, marginTop: -6, marginLeft: -8 }}
                >
                    Please fill this field
                </HelperText>
                <TextInput
                    mode="outlined"
                    label="Field 3"
                    theme={{
                        colors: {
                            primary: primaryColors.headerColor,
                            placeholder: primaryColors.headerColor,
                        },
                    }}
                    style={{
                        marginBottom: 10,
                    }}
                    onChangeText={onChangeText}
                    autoCapitalize="words"
                />
                <HelperText
                    type="error"
                    visible={show}
                    style={{ marginBottom: 9, marginTop: -6, marginLeft: -8 }}
                >
                    Please fill this field
                </HelperText>

                <Button
                    icon="check"
                    color={primaryColors.headerColor}
                    mode="contained"
                    style={{ marginTop: 10 }}
                    onPress={this._pickDocument}
                    labelStyle={{ fontSize: 16, color: "white" }}
                >
                    Upload an existing document
                </Button>
                <Button
                    icon="check"
                    color={primaryColors.headerColor}
                    mode="contained"
                    style={{ marginVertical: 10 }}
                    // onPress={selectLocality}
                    labelStyle={{ fontSize: 16, color: "white" }}
                >
                    Scan a new document
                </Button>
                <Button
                    icon="check"
                    color={primaryColors.headerColor}
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
