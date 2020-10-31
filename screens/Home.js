import React from "react";
import { View } from "react-native";
import { Title, Subheading, Button } from "react-native-paper";
import primaryColors from "../primaryColors";
import BigImage from "./BigImage.js";

export default function Home({ navigation }) {
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
                    fontSize: 21,
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
                Uploading Documents and Applying is now super easy!
            </Subheading>
            <BigImage image="https://image.freepik.com/free-vector/image-upload-concept-landing-page_23-2148317961.jpg" />
            <Button
                icon="check"
                color={primaryColors.yellowColor2}
                mode="contained"
                onPress={() => navigation.navigate("See")}
                labelStyle={{ fontSize: 16, color: "white" }}
            >
                See Uploaded Documents
            </Button>
            <Button
                icon="check"
                color={primaryColors.yellowColor2}
                mode="contained"
                style={{ marginTop: 15, marginBottom: 15 }}
                onPress={() => navigation.navigate("Upload")}
                labelStyle={{ fontSize: 16, color: "white" }}
            >
                Upload documents
            </Button>
            <Button
                icon="check"
                color={primaryColors.yellowColor2}
                mode="contained"
                onPress={() => navigation.navigate("Select")}
                labelStyle={{ fontSize: 16, color: "white" }}
            >
                Fill Application
            </Button>
        </View>
    );
}
