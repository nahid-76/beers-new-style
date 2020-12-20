import React from "react";
import { FavIcon } from "../../styles/cardstyle";
const Star = ({ onStarClick, isStarActive }) => {
  return (
    <FavIcon>
      <i
        className={`fa fa-star${isStarActive ? "" : "-o"}`}
        onClick={onStarClick}
        aria-hidden="true"
      ></i>
    </FavIcon>
  );
};

export default Star;
