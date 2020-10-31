import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { View, Image, ScrollView } from "react-native";
import {
    Title,
    Subheading,
    RadioButton,
    Text,
    Appbar,
    TextInput,
    HelperText,
    Button,
} from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as DocumentPicker from "expo-document-picker";
import primaryColors from "./primaryColors";

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Select" component={ChooseScreen} />
                <Stack.Screen name="Form" component={Form} />
                <Stack.Screen name="LicenseForm" component={LicenseForm} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

function Home({ navigation }) {
    return (
        <View
            style={{
                backgroundColor: "white",
                height: "100%",
                paddingHorizontal: 30,
                paddingTop: 90,
            }}
        >
            <Title
                style={{
                    fontSize: 25,
                    textAlign: "center",
                }}
            >
                Welcome to Government Document Scanner and Uploader!
            </Title>
            <Subheading
                style={{
                    fontSize: 14,
                    textAlign: "center",
                    color: primaryColors.subheadingColor,
                    lineHeight: 20,
                }}
            >
                For all your application needs and blah blah blah blah blah blah
                catchy line
            </Subheading>
            <BigImage image="https://image.freepik.com/free-vector/image-upload-concept-landing-page_23-2148317961.jpg" />
            <Button
                icon="check"
                color={primaryColors.yellowColor2}
                mode="contained"
                onPress={() => navigation.navigate("Select")}
                labelStyle={{ fontSize: 16, color: "white" }}
            >
                GET STARTED
            </Button>
        </View>
    );
}

function ChooseScreen({ navigation }) {
    const [value, setValue] = React.useState("first");
    return (
        <View>
            <Appbar.Header
                style={{ backgroundColor: primaryColors.headerColor }}
            >
                <Appbar.BackAction onPress={() => navigation.pop()} />
                <Appbar.Content title="Select Application" />
            </Appbar.Header>
            <ScrollView
                style={{
                    backgroundColor: "white",
                    height: "100%",
                    paddingHorizontal: 30,
                    marginBottom: "5%",
                    paddingTop: 20,
                }}
            >
                <BigImage image="https://image.freepik.com/free-vector/copywriting-social-media-post-content-marketing-internet-commercial-cartoon-character-writing-text-advertising-promotional-strategy_335657-356.jpg" />
                <RadioButton.Group
                    onValueChange={(value) => setValue(value)}
                    value={value}
                >
                    <View
                        style={{ flexDirection: "row", alignItems: "center" }}
                    >
                        <View style={{ flex: 1 }}>
                            <RadioButton
                                value="first"
                                color={primaryColors.headerColor}
                            />
                        </View>
                        <View style={{ flex: 7 }}>
                            <Text
                                style={{
                                    fontSize: 18,
                                    color: primaryColors.headerColor,
                                    fontWeight: "700",
                                }}
                            >
                                Passport
                            </Text>
                        </View>
                    </View>
                    <View
                        style={{ flexDirection: "row", alignItems: "center" }}
                    >
                        <View style={{ flex: 1 }}>
                            <RadioButton
                                value="second"
                                color={primaryColors.headerColor}
                            />
                        </View>
                        <View style={{ flex: 7 }}>
                            <Text
                                style={{
                                    fontSize: 18,
                                    color: primaryColors.headerColor,
                                    fontWeight: "700",
                                }}
                            >
                                Aadhaar
                            </Text>
                        </View>
                    </View>
                    <View
                        style={{ flexDirection: "row", alignItems: "center" }}
                    >
                        <View style={{ flex: 1 }}>
                            <RadioButton
                                value="third"
                                color={primaryColors.headerColor}
                            />
                        </View>
                        <View style={{ flex: 7 }}>
                            <Text
                                style={{
                                    fontSize: 18,
                                    color: primaryColors.headerColor,
                                    fontWeight: "700",
                                }}
                            >
                                PAN Card
                            </Text>
                        </View>
                    </View>
                    <View
                        style={{ flexDirection: "row", alignItems: "center" }}
                    >
                        <View style={{ flex: 1 }}>
                            <RadioButton
                                value="fourth"
                                color={primaryColors.headerColor}
                            />
                        </View>
                        <View style={{ flex: 7 }}>
                            <Text
                                style={{
                                    fontSize: 18,
                                    color: primaryColors.headerColor,
                                    fontWeight: "700",
                                }}
                            >
                                Driver's License
                            </Text>
                        </View>
                    </View>
                    <View
                        style={{ flexDirection: "row", alignItems: "center" }}
                    >
                        <View style={{ flex: 1 }}>
                            <RadioButton
                                value="fifth"
                                color={primaryColors.headerColor}
                            />
                        </View>
                        <View style={{ flex: 7 }}>
                            <Text
                                style={{
                                    fontSize: 18,
                                    color: primaryColors.headerColor,
                                    fontWeight: "700",
                                }}
                            >
                                Voter ID Card
                            </Text>
                        </View>
                    </View>
                </RadioButton.Group>
                <View style={{ paddingTop: 30 }}>
                    <Button
                        icon="check"
                        color="#fddb3a"
                        mode="contained"
                        onPress={() => navigation.navigate("LicenseForm")}
                        labelStyle={{ fontSize: 16, color: "white" }}
                        style={{
                            marginBottom: "5%",
                        }}
                    >
                        Select
                    </Button>
                </View>
            </ScrollView>
        </View>
    );
}

function Form({ navigation }) {
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
    _pickDocument = async () => {
        let result = await DocumentPicker.getDocumentAsync({});
        // alert(result.uri);
        console.log(result.uri);
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

function LicenseForm({ navigation }) {
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
    _pickDocument = async () => {
        let result = await DocumentPicker.getDocumentAsync({});
        // alert(result.uri);
        console.log(result.uri);
    };
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
                <TextInput
                    mode="outlined"
                    label="Full Name"
                    theme={{
                        colors: {
                            primary: primaryColors.orangeColor,
                            placeholder: primaryColors.orangeColor,
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
                            primary: primaryColors.orangeColor,
                            placeholder: primaryColors.orangeColor,
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
                            primary: primaryColors.orangeColor,
                            placeholder: primaryColors.orangeColor,
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
                            primary: primaryColors.orangeColor,
                            placeholder: primaryColors.orangeColor,
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
                    color={primaryColors.orangeColor}
                    mode="contained"
                    style={{ marginTop: 10 }}
                    onPress={_pickDocument}
                    labelStyle={{ fontSize: 16, color: "white" }}
                >
                    Upload an existing document
                </Button>
                <Button
                    icon="check"
                    color={primaryColors.orangeColor}
                    mode="contained"
                    style={{ marginVertical: 10 }}
                    // onPress={selectLocality}
                    labelStyle={{ fontSize: 16, color: "white" }}
                >
                    Scan a new document
                </Button>
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

function BigImage({ size = 350, image }) {
    return (
        <View>
            <Image
                width={size}
                height={size}
                style={{
                    width: size,
                    height: size,
                    borderRadius: 7,
                    alignSelf: "center",
                    marginVertical: 20,
                }}
                source={{ uri: image }}
            />
        </View>
    );
}
