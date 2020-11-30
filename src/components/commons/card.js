import React from "react";
import {
  Card,
  CardImage,
  Container,
  AddButton,
  CardContent,
  CardContentHeader,
  BrifInfo,
  TopInfo,
  ButtomInfo,
  CardContentText,
  FavIcon
} from "../../styles/cardstyle";
import MyExpandCollapse from './MyExpandCollapse'
const StoreCard = ({ imageSrc, name, abv, description,price}) => {
  return (
    <>
      <Container>
        <Card>
          <CardImage src={imageSrc} />
          <FavIcon>
            <i class="fa fa-star-o" aria-hidden="true"></i>
          </FavIcon>
          <CardContent>
            <CardContentHeader>
              <AddButton>+</AddButton>
              <BrifInfo>
                <TopInfo>{name}</TopInfo>
                <ButtomInfo>${price}</ButtomInfo>
              </BrifInfo>
            </CardContentHeader>
            <CardContentText>
              <MyExpandCollapse
                text={description}
              />

            </CardContentText>
          </CardContent>
        </Card>{" "}
      </Container>
    </>
  );
};

export default StoreCard;