import React, { useContext, useEffect, useState } from "react";
import { TouchableOpacity } from "react-native";
import { List, Avatar } from "react-native-paper";
import styled from "styled-components/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { Context as AuthContext } from "../../../services/authentication/authentication.context";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { Text } from "../../../components/typography/text.component";
import { Spacer } from "../../../components/spacer/spacer.component";

const SettingsItem = styled(List.Item)`
  padding: ${(props) => props.theme.space[3]};
`;

const AvatarContainer = styled.View`
  align-items: center;
`;
const SettingsScreen = ({ navigation }) => {
  const {
    logout,
    state: { userEmail, uid },
  } = useContext(AuthContext);

  const [profilePhoto, setProfilePhoto] = useState();

  useEffect(() => {
    navigation.addListener("focus", async () => {
      const photo = await AsyncStorage.getItem(`photo-${uid}`);
      setProfilePhoto(photo);
    });
  }, [navigation, uid]);

  const logoutHandler = () => {
    logout();
  };
  return (
    <SafeArea>
      <TouchableOpacity onPress={() => navigation.navigate("Camera")}>
        <AvatarContainer>
          {profilePhoto ? (
            <Avatar.Image size={180} source={{ uri: profilePhoto }} />
          ) : (
            <Avatar.Icon
              size={180}
              icon="human"
              style={{ backgroundColor: "#2182BD" }}
            />
          )}

          <Spacer position={"top"} size="large">
            <Text variant="label">{userEmail}</Text>
          </Spacer>
        </AvatarContainer>
      </TouchableOpacity>
      <List.Section>
        <SettingsItem
          title="Favorites"
          description="View your favorites"
          left={(props) => (
            <List.Icon {...props} color="black" icon={"heart"} />
          )}
          onPress={() => navigation.navigate("Favorites")}
        />
        <SettingsItem
          title="Logout"
          left={(props) => <List.Icon {...props} color="black" icon={"door"} />}
          onPress={logoutHandler}
        />
      </List.Section>
    </SafeArea>
  );
};

export default SettingsScreen;
