import React, { useState, useEffect } from 'react';
import { getbeers } from '../serveces/beerService';
import ItemsCarousel from './commons/carousel'
import SearchBar from './commons/searchbar'
const Home = () => {
    const [beers, setBeers] = useState([]);
    useEffect(() => {
        (async () => {
            const { data } = await getbeers();
            setBeers(data);
        })();
    }, []);
    return (
        <>
            <SearchBar />
            <ItemsCarousel data={beers} />

        </>
    );
}

export default Home;