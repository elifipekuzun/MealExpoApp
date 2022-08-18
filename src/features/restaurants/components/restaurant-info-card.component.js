import React from "react";
import { Card } from "react-native-paper";
import { SvgXml } from "react-native-svg";

import star from "../../../../assets/star";
import open from "../../../../assets/open";
import { Text } from "../../../components/typography/text.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import {
  Icon,
  RestaurantCard,
  RestaurantCardCover,
  Info,
  Section,
  Rating,
  SectionEnd,
  Address,
} from "./restaurant-info-card.styles";
import Favorite from "../../../components/favorites/favorite.component";

const RestaurantInfoCard = ({ restaurant }) => {
  const {
    name,
    icon,
    photos,
    vicinity,
    isOpenNow,
    rating,
    isClosedTemporarily = true,
    placeId,
  } = restaurant;
  const { Content } = Card;

  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover source={{ uri: photos[0] }} />
      <Favorite restaurant={restaurant} />
      <Content>
        <Info>
          <Text variant="label">{name}</Text>
          <Section>
            <Rating>
              {new Array(Math.floor(rating)).fill("").map((_, i) => {
                if (!rating) {
                  return 0;
                }
                return (
                  <SvgXml
                    key={`star-${placeId}-${i}`}
                    xml={star}
                    width={20}
                    height={20}
                  />
                );
              })}
            </Rating>
            <SectionEnd>
              {isClosedTemporarily && (
                <Text variant="error">CLOSED TEMPORARILY</Text>
              )}
              <Spacer position="left" size="large">
                {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
              </Spacer>
              <Spacer position="left" size="large">
                {isClosedTemporarily && <Icon source={{ uri: icon }} />}
              </Spacer>
            </SectionEnd>
          </Section>
          <Address>{vicinity}</Address>
        </Info>
      </Content>
    </RestaurantCard>
  );
};

export default RestaurantInfoCard;
