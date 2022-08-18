import React, { useState } from "react";
import { ScrollView } from "react-native";
import { List } from "react-native-paper";
import styled from "styled-components/native";

import { SafeArea } from "../../../components/utility/safe-area.component";
import RestaurantInfoCard from "../components/restaurant-info-card.component";

const RestaurantDetailScreen = ({ route }) => {
  const { restaurant } = route.params;
  const [breakfastExpanded, setBreakfastExpanded] = useState(false);
  const [lunchExpanded, setLunchExpanded] = useState(false);
  const [dinnerExpanded, setDinnerExpanded] = useState(false);
  const [drinksExpanded, setDrinksExpanded] = useState(false);

  return (
    <SafeArea>
      <RestaurantInfoCard restaurant={restaurant} />
      <ScrollView>
        <List.Section>
          <List.Accordion
            title="Breakfast"
            expanded={breakfastExpanded}
            onPress={() => setBreakfastExpanded(!breakfastExpanded)}
            left={(props) => <List.Icon {...props} icon="egg-fried" />}
          >
            <List.Item title="Eggs Benedict" />
            <List.Item title="Classic Breakfast" />
          </List.Accordion>
          <List.Accordion
            title="Lunch"
            expanded={lunchExpanded}
            onPress={() => setLunchExpanded(!lunchExpanded)}
            left={(props) => <List.Icon {...props} icon="food-outline" />}
          >
            <List.Item title="Burger w/ Fries" />
            <List.Item title="Steak Sandwich" />
            <List.Item title="Mushroom Soup" />
          </List.Accordion>
          <List.Accordion
            title="Dinner"
            expanded={dinnerExpanded}
            onPress={() => setDinnerExpanded(!dinnerExpanded)}
            left={(props) => <List.Icon {...props} icon="food-turkey" />}
          >
            <List.Item title="Spaghetti Bolognese" />
            <List.Item title="Veal Cutlet with Chicken Mushroom Rotini" />
            <List.Item title="Steak Frites" />
          </List.Accordion>
          <List.Accordion
            title="Drinks"
            expanded={drinksExpanded}
            onPress={() => setDrinksExpanded(!drinksExpanded)}
            left={(props) => <List.Icon icon="cup" {...props} />}
          >
            <List.Item title="Coffee" />
            <List.Item title="Tea" />
            <List.Item title="Modelo" />
            <List.Item title="Coke" />
            <List.Item title="Fanta" />
          </List.Accordion>
        </List.Section>
      </ScrollView>
    </SafeArea>
  );
};

export default RestaurantDetailScreen;
