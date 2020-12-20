import React, { useEffect, useState, useContext } from 'react';
import { getbeers } from '../serveces/beerService';
import { FavsContext } from '../contexts/favoritescontext';
import StoreCard from './commons/card'
import {Container} from '../styles/favoritesstyle'
const Favorites = () => {
    const [favorites, setFavorits] = useState([]);
    const { favs } = useContext(FavsContext);
    useEffect(() => {
        (async () => {
            const { data } = await getbeers();
            data.map(d => {
                favs.includes(d.id) && setFavorits(favorites => [...favorites, d]);
            })
        })();

    }, [favs]);
    if (favorites.length === 0) return <p className="lead text-center">تا کنون کالایی به لیست مورد علاقه اضافه نشده</p>;
    return (
        <>
            <Container>
                {favorites.map((d, index) => {
                    const key = `card${index}${d.id}`;
                    return (
                        <div key={key}>
                            <StoreCard
                                imageSrc={d.image_url}
                                name={d.name}
                                price={d.srm}
                                tagline={d.tagline}
                                id={d.id}
                            />
                        </div>
                    );
                })}
            </Container>
        </>
    );
}

export default Favorites;