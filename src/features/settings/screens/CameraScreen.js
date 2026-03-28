import { useRef, useState, useEffect, useContext } from "react";
import { CameraView, useCameraPermissions } from "expo-camera";
import styled from "styled-components/native";
import { View, TouchableOpacity } from "react-native";
import { Text } from "../../../components/typography/text";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthenticationContext } from "../../../services/authentication/AuthenticationContext";
const ProfileCamera = styled(CameraView)`
  width: 100%;
  height: 100%;
`;

export const CameraScreen = ({ navigation }) => {
  const [permission, requestPermission] = useCameraPermissions();
  const cameraRef = useRef();
  const { user } = useContext(AuthenticationContext);
  if (!permission) {
    return <View />;
  }

  if (!permission.granted) {
    return (
      <View>
        <Text>No access to camera</Text>
        <TouchableOpacity onPress={requestPermission}>
          <Text>Allow Camera</Text>
        </TouchableOpacity>
      </View>
    );
  }

  const snap = async () => {
    if (cameraRef.current) {
      const photo = await cameraRef.current.takePictureAsync();
      navigation.navigate("Settings", { photo: photo.uri });
      AsyncStorage.setItem(`${user.uid}-photo`, photo.uri);
      navigation.goBack();
    }
  };

  return (
    <ProfileCamera facing="front" ref={cameraRef}>
      <TouchableOpacity
        onPress={snap}
        style={{
          position: "absolute",
          bottom: 40,
          alignSelf: "center",
          backgroundColor: "white",
          padding: 15,
          borderRadius: 50,
        }}
      >
        <Text>📸 Take Photo</Text>
      </TouchableOpacity>
    </ProfileCamera>
  );
};
