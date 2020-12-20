import React, { useContext } from "react";
import {
  Card,
  CardImage,
  Container,
  AddButton,
  CardContent,
  BrifInfo,
  TopInfo,
  ButtomInfo,
  CardContentText,
} from "../../styles/cardstyle";
import { toast } from "react-toastify";
import { ShopingItemsContext } from '../../contexts/shopingitemscontext'
import { FavsContext } from '../../contexts/favoritescontext'
import Star from './star'

const StoreCard = ({ imageSrc, name, tagline, price, id }) => {
  const { favs, handleFavs } = useContext(FavsContext);
  const { handleShopItems } = useContext(ShopingItemsContext);
  const onShopingBasketButtonClick = () => {
    handleShopItems(id) ?
      toast.error(`در سبد خرید وجود دارد:${name}`) :
      toast.success(`به سبد خرید اصافه شد:${name}`);
  }
  return (
    <>
      <Container>
        <Card>
          <CardImage src={imageSrc} />
          <Star onStarClick={() => handleFavs(id)} isStarActive={favs.includes(id)} />
          <CardContent>
              <BrifInfo>
                <TopInfo>{name}</TopInfo>
                <ButtomInfo>${price}</ButtomInfo>
              </BrifInfo>
            <CardContentText>{tagline}</CardContentText>
          </CardContent>
              <AddButton onClick={onShopingBasketButtonClick}>+</AddButton>
        </Card>{" "}
      </Container>
    </>
  );
};

export default StoreCard;