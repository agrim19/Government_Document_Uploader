import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./screens/Home";
import ChooseScreen from "./screens/SelectApplication";
import UploadDocuments from "./screens/UploadDocuments";
import PassportForm from "./screens/PassportForm";
import LicenseForm from "./screens/LicenseForm";
<<<<<<< HEAD
import { Provider as PaperProvider } from "react-native-paper";
import Successful from "./screens/Successful";
=======
import CameraScreen from "./screens/Camera";
>>>>>>> 295550e8f4e738f8a342b34748affd6b8477a236

const Stack = createStackNavigator();

export default function App() {
    return (
<<<<<<< HEAD
        <PaperProvider>
            <NavigationContainer>
                <Stack.Navigator screenOptions={{ headerShown: false }}>
                    <Stack.Screen name="Home" component={Home} />
                    <Stack.Screen name="Select" component={ChooseScreen} />
                    <Stack.Screen name="Upload" component={UploadDocuments} />
                    <Stack.Screen
                        name="PassportForm"
                        component={PassportForm}
                    />
                    <Stack.Screen name="LicenseForm" component={LicenseForm} />
                    <Stack.Screen name="Successful" component={Successful} />
                </Stack.Navigator>
            </NavigationContainer>
        </PaperProvider>
=======
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
>>>>>>> 295550e8f4e738f8a342b34748affd6b8477a236
    );
}
