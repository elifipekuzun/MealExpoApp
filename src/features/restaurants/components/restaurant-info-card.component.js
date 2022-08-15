import React from "react";
import { StyleSheet } from "react-native";
import { Card, Text } from "react-native-paper";
import styled from "styled-components/native";

const Title = styled.Text`
  padding: 16px;
  font-size: 16px;
  font-weight: bold;
`;

const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Some resturant",
    icon,
    photos = [
      "https://image-tc.galaxy.tf/wijpeg-78mv0gzn1mynnzu4pn6vj2foz/file.jpg?width=1920",
    ],
    address = "Beşiktaş",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily,
  } = restaurant;
  const { Cover, Content } = Card;
  return (
    <Card elevation={5}>
      <Cover source={{ uri: photos[0] }} />
      <Content>
        <Title>{name}</Title>
      </Content>
    </Card>
  );
};

const styles = StyleSheet.create({});

export default RestaurantInfoCard;
