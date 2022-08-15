import React from "react";
import { View, SafeAreaView, StatusBar, ScrollView } from "react-native";
import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";

import RestaurantInfo from "../components/restaurant-info-card.component";

const RestaurantListContainer = styled(View)`
  padding: ${(props) => props.theme.space[3]};
  flex: 1;
`;
const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight} && 'margin-top: ${StatusBar.currentHeight}px';
`;

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const RestaurantsScreen = () => {
  return (
    <SafeArea>
      <ScrollView keyboardShouldPersistTaps="handled">
        <SearchContainer>
          <Searchbar placeholder="Search" />
        </SearchContainer>
        <RestaurantListContainer>
          <RestaurantInfo />
        </RestaurantListContainer>
      </ScrollView>
    </SafeArea>
  );
};

export default RestaurantsScreen;
