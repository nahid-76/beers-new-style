import React from "react";
import '../../styles/filterbar.css'
const FilterBar = ({ items, onItemSelect }) => {
    return (
        <div className="dropdown dropright">
            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Filter
             </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                {items.map(item =>
                    <a onClick={() => onItemSelect(item)} className="dropdown-item">{item}</a>
                )}
            </div>
        </div>

    );
};

export default FilterBar;