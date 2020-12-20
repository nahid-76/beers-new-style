import React, { useState, useEffect } from 'react';
import { getbeers } from '../serveces/beerService';
import ItemsCarousel from './commons/carousel'
import FilterBar from './commons/filterbar'
import _ from 'lodash'
const Home = () => {
    const [beers, setBeers] = useState([]);
    useEffect(() => {
        (async () => {
            const { data } = await getbeers();
            setBeers(data);
        })();
    }, []);
    const [filteritems] = useState(['All', 'Most Expensive', 'Cheapest', 'Pair With Pizza', 'Pair With Beef']);
    const [selectedFilterOption, setSelectedFilterOption] = useState('All');
    const handleFilterOptionSelect = (item) => {
        setSelectedFilterOption(item);
    }
    const findPairFoods = food => {
        let pairFood = [];
        for (let beer of beers) {
            let splited = [];
            for (let temp of beer.food_pairing) {
                splited.push(...temp.split(" "));
            }
            if (splited.includes(food)) pairFood.push(beer);
        }
        return pairFood;
    }
    const getFilteredItems = () => {
        let filteredBeerItems = beers;
        switch (selectedFilterOption) {
            case "Most Expensive":
                filteredBeerItems = _.orderBy(filteredBeerItems, ['srm'], ['desc']);
                break;
            case "Cheapest":
                filteredBeerItems = _.orderBy(filteredBeerItems, ['srm'], ['asc']);
                break;
            case "Pair With Pizza":
                filteredBeerItems = findPairFoods("pizza");
                break;
            case "Pair With Beef":
                filteredBeerItems = findPairFoods("beef");
                break;


        }
        return { filteredBeerItems };
    }
    const { filteredBeerItems } = getFilteredItems();
    return (
        <>
            <FilterBar
                items={filteritems}
                onItemSelect={handleFilterOptionSelect}
            />
            <ItemsCarousel data={filteredBeerItems} />

        </>
    );
}

export default Home;