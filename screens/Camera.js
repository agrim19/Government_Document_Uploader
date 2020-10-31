import React, { useState, useEffect } from 'react';
import { Button, Image, View, Platform } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';

export default function CameraScreen() {
  const [image, setImage] = useState(null);
  const effectFunc=async () => {
    if (Platform.OS !== 'web') {
      console.log("hello tried picking");
      const { status } = await ImagePicker.requestCameraPermissionsAsync();
      const ImagePermission = await ImagePicker.requestCameraRollPermissionsAsync();
      if (status !== 'granted') {
        alert('Sorry, we need camera permissions to make this work!');
      }
      console.log(ImagePermission.status+"hi")
      if (ImagePermission.status !== 'granted') {
          alert('Sorry, we need camera permissions to make this work!');
      }
    }
  }
  useEffect(() => {
    effectFunc();
  }, []);

  clickImage = async () => {
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [9, 16],
      quality: 1,
      base64: true,
    });

    console.log(result);
    if (!result.cancelled) {
      setImage('data:image/jpeg;base64,'+result.base64);
    }
    
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button title="Take an image" onPress={clickImage} />
      {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
    </View>
  );
}