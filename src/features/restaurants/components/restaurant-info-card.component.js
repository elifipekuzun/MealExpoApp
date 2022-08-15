import React from "react";
import { Card } from "react-native-paper";
import { SvgXml } from "react-native-svg";

import star from "../../../../assets/star";
import open from "../../../../assets/open";
import { Text } from "../../../components/typography/text.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import {
  Icon,
  RestaurantCardCover,
  Info,
  Section,
  Rating,
  SectionEnd,
  Address,
} from "./restaurant-info-card.styles";

const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Some resturant",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "https://image-tc.galaxy.tf/wijpeg-78mv0gzn1mynnzu4pn6vj2foz/file.jpg?width=1920",
    ],
    address = "Beşiktaş",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = true,
  } = restaurant;
  const { Content } = Card;
  return (
    <Card elevation={5}>
      <RestaurantCardCover source={{ uri: photos[0] }} />
      <Content>
        <Info>
          <Text variant="label">{name}</Text>
          <Section>
            <Rating>
              {Array(Math.ceil(rating))
                .fill(0)
                .map((_, i) => (
                  <SvgXml key={i} xml={star} width={20} height={20} />
                ))}
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
          <Address>{address}</Address>
        </Info>
      </Content>
    </Card>
  );
};

export default RestaurantInfoCard;
