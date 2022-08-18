import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components/native";
import { Searchbar } from "react-native-paper";

import { Context as LocationContext } from "../../../services/location/location.context";

const Search = ({ onIconPress, isIconPressed }) => {
  const SearchContainer = styled.View`
    padding: ${(props) => props.theme.space[3]};
  `;
  const { retrieveLocation } = useContext(LocationContext);

  const [defaultSearchKey, setDefaultSearchKey] = useState("san francisco");
  useEffect(() => {
    retrieveLocation(defaultSearchKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <SearchContainer>
      <Searchbar
        icon={isIconPressed ? "heart" : "heart-outline"}
        onIconPress={onIconPress}
        placeholder="Search for a location"
        onSubmitEditing={(e) => {
          retrieveLocation(e.nativeEvent.text);
          setDefaultSearchKey(e.nativeEvent.text);
        }}
      />
    </SearchContainer>
  );
};

export default Search;
