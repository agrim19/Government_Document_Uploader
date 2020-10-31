import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./screens/Home";
import ChooseScreen from "./screens/SelectApplication";
import UploadDocuments from "./screens/UploadDocuments";
import PassportForm from "./screens/PassportForm";
import LicenseForm from "./screens/LicenseForm";
import CameraScreen from "./screens/Camera";

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Select" component={ChooseScreen} />
                <Stack.Screen name="Upload" component={UploadDocuments} />
                <Stack.Screen name="PassportForm" component={PassportForm} />
                <Stack.Screen name="LicenseForm" component={LicenseForm} />
                <Stack.Screen name="CameraScreen" component={CameraScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}