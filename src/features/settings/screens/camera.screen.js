import React, { useState, useEffect, useRef, useContext } from "react";
import { Camera, CameraType } from "expo-camera";
import { Button } from "react-native-paper";
import styled from "styled-components/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { SafeArea } from "../../../components/utility/safe-area.component";
import { Context as AuthContext } from "../../../services/authentication/authentication.context";
import { Text } from "../../../components/typography/text.component";

const CameraArea = styled(Camera)`
  flex: 1;
  align-items: center;
`;

const CameraButton = styled(Button).attrs({
  color: "#ffff",
})`
  width: 80px;
  height: 80px;
  border-radius: 50px;
  align-items: center;
  justify-content: center;
`;

const ButtonContainer = styled.View`
  width: 100%;
  position: absolute;
  bottom: 20px;
  align-items: center;
  justify-content: space-around;
  padding: 0 50px;
  flex-direction: row;
`;

const CameraScreen = ({ navigation }) => {
  const {
    state: { uid },
  } = useContext(AuthContext);

  const [type, setType] = useState(CameraType.front);
  const [hasPermission, setHasPermission] = useState(false);

  const camera = useRef();

  const permissionHandler = async () => {
    const { status } = await Camera.requestCameraPermissionsAsync();
    setHasPermission(status === "granted");
  };

  useEffect(() => {
    permissionHandler();
  }, []);

  const toggleCamera = () => {
    setType((current) =>
      current === CameraType.front ? CameraType.back : CameraType.front
    );
  };

  const takePictureHandler = async () => {
    const picture = await camera.current.takePictureAsync();
    if (picture.uri) {
      await AsyncStorage.setItem(`photo-${uid}`, picture.uri);
      navigation.goBack();
    }
  };

  if (!hasPermission) {
    return <Text>Need to allow for camera usage!</Text>;
  }

  return (
    <SafeArea>
      <CameraArea ref={(ref) => (camera.current = ref)} type={type}>
        <ButtonContainer>
          <CameraButton onPress={takePictureHandler} mode="contained" />
          <CameraButton onPress={toggleCamera} mode="contained">
            Flip
          </CameraButton>
        </ButtonContainer>
      </CameraArea>
    </SafeArea>
  );
};

export default CameraScreen;
