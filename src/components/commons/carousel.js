import React from 'react';
import Carousel from 'react-elastic-carousel'
import StoreCard from './card.js'
import '../../styles/carouselstyle.css'
const ItemsCarousel = ({ data }) => {
    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2 },
        { width: 768, itemsToShow: 3 },
        { width: 1200, itemsToShow: 5 },
    ];
    return (
        <Carousel breakPoints={breakPoints}>
            {
                data.map(d => {
                    return (
                        <StoreCard
                            imageSrc={d.image_url}
                            name={d.name}
                            price={d.srm}
                            description={d.description}

                        />
                    );
                })
            }
        </Carousel>
    );
}

export default ItemsCarousel;