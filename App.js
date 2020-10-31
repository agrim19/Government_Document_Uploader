import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Image } from 'react-native';
import {
	Button,
  Title,
  Subheading,
  RadioButton,
  Text,
  Appbar,
} from "react-native-paper";

// export default function App() {
//   return (
//     <View style={{backgroundColor: "white",
// 		height: "100%",
// 	  paddingHorizontal: 30,
// 		paddingTop: 90,}}>
//       <Title style={{
//           fontSize: 25,
//           textAlign: "center",
//       }}>Welcome to Government Document Scanner and Uploader!</Title>
//       <Subheading
// 					style={{
// 						fontSize: 14,
// 						textAlign: "center",
// 						color: "#9a9a9a",
// 						lineHeight: 20,
// 					}}
// 				>
// 					For all your application needs and blah blah blah blah blah blah catchy line
// 				</Subheading>
//         <BigImage image="https://image.freepik.com/free-vector/image-upload-concept-landing-page_23-2148317961.jpg" />
//         <Button
// 					icon="check"
// 					color="#fddb3a"
// 					mode="contained"
// 					// onPress={navigateToOtpScreen}
// 					labelStyle={{ fontSize: 16, color: "white" }}
// 				>
// 					GET STARTED
// 				</Button>
//     </View>
//   );
// }

export default function App(){
  const [value, setValue] = React.useState('first');
  const _goBack = () => console.log('Went back');
  return(
    <View>
    <Appbar.Header style={{backgroundColor:"#333456"}}>
      <Appbar.BackAction onPress={_goBack} />
      <Appbar.Content title="Select Application"/>
    </Appbar.Header>
    <View style={{backgroundColor: "white",
    height: "100%",
   paddingHorizontal: 30,
    paddingTop: 20,}}>
      <BigImage image="https://image.freepik.com/free-vector/copywriting-social-media-post-content-marketing-internet-commercial-cartoon-character-writing-text-advertising-promotional-strategy_335657-356.jpg" />
      <RadioButton.Group onValueChange={value => setValue(value)} value={value} >
      <View style={{flexDirection:"row",alignItems:'center'}}>
        <View style={{flex:4}}>
        <Text style={{fontSize:18,color:"#333456",fontWeight:"700"  }}>Passport</Text>
        </View>
        <View style={{flex:1}}>
        <RadioButton value="first" color="#333456" />
        </View>
      </View>
      <View style={{flexDirection:"row",alignItems:'center'}}>
      <View style={{flex:4}}>
        <Text style={{fontSize:18,color:"#333456",fontWeight:"700"  }}>Adhar</Text>
        </View>
        <View style={{flex:1}}>
        <RadioButton value="second" color="#333456" />
        </View>
      </View>
      <View style={{flexDirection:"row",alignItems:'center'}}>
      <View style={{flex:4}}>
        <Text style={{fontSize:18,color:"#333456",fontWeight:"700"  }}>Pan Card</Text>
        </View>
        <View style={{flex:1}}>
        <RadioButton value="third" color="#333456"/>
        </View>
      </View>
      <View style={{flexDirection:"row",alignItems:'center'}}>
      <View style={{flex:4}}>
        <Text style={{fontSize:18,color:"#333456",fontWeight:"700" }}>Driving License</Text>
        </View>
        <View style={{flex:1}}>
        <RadioButton value="fourth" color="#333456"/>
        </View>
      </View>
      <View style={{flexDirection:"row",alignItems:'center'}}>
      <View style={{flex:4}}>
        <Text style={{fontSize:18,color:"#333456",fontWeight:"700" }}>Voter ID Card</Text>
        </View>
        <View style={{flex:1}}>
        <RadioButton value="fifth" color="#333456"/>
        </View>
      </View>
    </RadioButton.Group>
    <View style={{paddingTop:30,}}>
    <Button
					icon="check"
					color="#fddb3a"
					mode="contained"
					// onPress={navigateToOtpScreen}
					labelStyle={{ fontSize: 16, color: "white" }}
				>
					Select
				</Button>
        </View>
    </View>
    </View>
  )
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