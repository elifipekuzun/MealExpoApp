import React from "react";
import styled from "styled-components/native";
import WebView from "react-native-webview";
import { Text, Platform, TouchableOpacity } from "react-native";

const CompactRestaurantInfo = ({ restaurant, onPress, isMap }) => {
  const CalloutContainer = styled.View`
    padding: ${(props) => props.theme.space[1]};
    max-width: 120px;
    align-items: center;
  `;
  const CalloutImage = styled.Image`
    width: 120px;
    height: 100px;
    border-radius: 10px;
  `;
  const CompactWebview = styled(WebView)`
    width: 120px;
    height: 100px;
    border-radius: 10px;
  `;
  const StyledText = styled(Text)`
    text-align: center;
    font-family: ${(props) => props.theme.fonts.monospace};
    margin-top: 5px;
  `;
  const isAndroid = Platform.OS === "android";
  const Image = isAndroid && isMap ? CompactWebview : CalloutImage;
  return (
    <TouchableOpacity onPress={onPress}>
      <CalloutContainer>
        <Image source={{ uri: restaurant.photos[0] }} resizeMode="cover" />
        <StyledText>{restaurant.name}</StyledText>
      </CalloutContainer>
    </TouchableOpacity>
  );
};

export default CompactRestaurantInfo;
