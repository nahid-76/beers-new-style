import React from "react";
import { SearchBarInput } from '../../styles/searchbar'
const SearchBar = () => {
    return (
            <SearchBarInput
                type="text"
                name="query"
                placeholder="Search..."
            />
        
    );
};

export default SearchBar;