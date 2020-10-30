import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Image } from 'react-native';
import {
	Button,
	Title,
  Subheading,
} from "react-native-paper";

export default function App() {
  return (
    <View style={{backgroundColor: "white",
		height: "100%",
	  paddingHorizontal: 30,
		paddingTop: 90,}}>
      <Title style={{
          fontSize: 25,
          textAlign: "center",
      }}>Welcome to Government Document Scanner and Uploader!</Title>
      <Subheading
					style={{
						fontSize: 14,
						textAlign: "center",
						color: "#9a9a9a",
						lineHeight: 20,
					}}
				>
					For all your application needs and blah blah blah blah blah blah catchy line
				</Subheading>
        <BigImage image="https://image.freepik.com/free-vector/image-upload-concept-landing-page_23-2148317961.jpg" />
        <Button
					icon="check"
					color="#fddb3a"
					mode="contained"
					// onPress={navigateToOtpScreen}
					labelStyle={{ fontSize: 16, color: "white" }}
				>
					GET STARTED
				</Button>
    </View>
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
          marginVertical: 30,
				}}
				source={{ uri: image }}
			/>
		</View>
	);
}