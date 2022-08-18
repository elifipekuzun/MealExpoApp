import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components/native";
import { Searchbar } from "react-native-paper";

import { Context as LocationContext } from "../../../services/location/location.context";
import { Context as RestaurantContext } from "../../../services/restaurants/restaurants.context";

const Search = () => {
  const SearchContainer = styled.View`
    padding: ${(props) => props.theme.space[3]};
    position: absolute;
    z-index: 99;
    top: 30px;
    width: 100%;
  `;
  const {
    state: { keyword, lat, lng },
    retrieveLocation,
  } = useContext(LocationContext);

  const { retrieveRestaurants } = useContext(RestaurantContext);

  const [searchKey, setSearchKey] = useState(keyword);

  useEffect(() => {
    retrieveLocation(searchKey);
    if (lat && lng) {
      retrieveRestaurants(`${lat},${lng}`);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lat, lng]);
  return (
    <SearchContainer>
      <Searchbar
        autoFocus
        icon={"map"}
        placeholder="Search"
        value={searchKey}
        onChangeText={(text) => {
          setSearchKey(text);
        }}
        onSubmitEditing={() => {
          retrieveLocation(searchKey);
        }}
      />
    </SearchContainer>
  );
};

export default Search;
