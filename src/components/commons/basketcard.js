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

const BasketCard = ({ imageSrc, name, tagline, price, count, onIncerement, onDecrement }) => {


    return (
        <>
            <Container>
                <Card>
                    <CardImage src={imageSrc} />
                    <CardContent>
                        <BrifInfo>
                            <TopInfo>{name}</TopInfo>
                            <ButtomInfo>${price}</ButtomInfo>
                        </BrifInfo>
                        <CardContentText>{tagline}</CardContentText>
                    </CardContent>
                    <AddButton>+</AddButton>
                    <span>{count}</span>
                    <AddButton>-</AddButton>
                </Card>{" "}
            </Container>
        </>
    );
};

export default BasketCard;