import React, { useContext } from "react";
import { SearchDataContext } from "../../contexts/search-data.context";

import "./infocard.style.scss";

export default function InfoCard() {
  const searchData = useContext(SearchDataContext);
  if (!searchData) return null;
  return (
    <section className="info-card">
      <header>
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${searchData.id}.png`}
          alt="pokemon-pic"
        />
        <div className="header-info">
          <div>
            <h3>Name:</h3>
            <span>{searchData.name}</span>
          </div>
          <div>
            <h3>Id:</h3>
            <span>{searchData.id}</span>
          </div>
          <div>
            <h3>Height:</h3>
            <span>{searchData.height}</span>
          </div>
          <div>
            <h3>Weight:</h3>
            <span>{searchData.weight}</span>
          </div>
        </div>
      </header>
      <div className="types-abilities">
        <div>
          <h3>Types: </h3>
          <p>
            {searchData.types.map((el) => {
              return <span>{el.type.name}</span>;
            })}
          </p>
        </div>
        <div>
          <h3>Abilities:</h3>
          <p>
            {searchData.abilities.map((el) => {
              return <span>{el.ability.name}</span>;
            })}
          </p>
        </div>
      </div>
    </section>
  );
}
