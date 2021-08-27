import React, { useContext } from "react";
import { SearchDataContext } from "../../contexts/search-data.context";

import "./infocard.style.scss";

export default function InfoCard() {
  const searchData = useContext(SearchDataContext);

  return (
    <section className="info-card">
      <header>
        <img
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
          alt="pokemon-pic"
        />
        <div className="header-info">
          <div>
            <h3>Name:</h3>
            <span>Ditto</span>
          </div>
          <div>
            <h3>Id:</h3>
            <span>132</span>
          </div>
          <div>
            <h3>Height:</h3>
            <span>3</span>
          </div>
          <div>
            <h3>Weight:</h3>
            <span>60</span>
          </div>
        </div>
      </header>
      <div className="types-abilities">
        <div>
          <h3>Types: </h3>
          <p>
            <span>Electric</span>
            <span>Electric</span>
          </p>
        </div>
        <div>
          <h3>Abilities:</h3>
          <p>
            <span>Static</span>
            <span>Lighting Rod</span>
          </p>
        </div>
      </div>
    </section>
  );
}
