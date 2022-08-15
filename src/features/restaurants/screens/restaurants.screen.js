import React from "react";
import {
  View,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  ScrollView,
} from "react-native";
import { Searchbar } from "react-native-paper";

import RestaurantInfo from "../components/restaurant-info-card.component";

const RestaurantsScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView keyboardShouldPersistTaps="handled">
        <Searchbar style={styles.search} placeholder="Search" />
        <View style={styles.list}>
          <RestaurantInfo />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  search: {},
  list: {
    padding: 16,
    flex: 1,
  },
});

export default RestaurantsScreen;
