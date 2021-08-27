import React from "react";

import { evolutionData } from "../../tempData2";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

import "./evolution-chart.style.scss";

interface evolDetailsInt {
  gender: null | number;
  held_item: null | string;
  item: null | { name: string; url: string };
  known_move: null;
  known_move_type: null;
  location: null;
  min_affection: null | number;
  min_beauty: null | number;
  min_happiness: null | number;
  min_level: null | number;
  needs_overworld_rain: boolean;
  party_species: null;
  party_type: null;
  relative_physical_stats: null | number;
  time_of_day: string;
  trade_species: null;
  trigger: {
    name: string;
    url: string;
  };
  turn_upside_down: boolean;
}
[];

interface speciesInt {
  name: string;
  url: string;
}

interface evolutionInt {
  evolution_details: evolDetailsInt[] | never[];
  evolves_to: evolutionInt[];
  is_baby: boolean;
  species: speciesInt;
}
[];

// Recursion function to show evolution possibilities of pokemon

function addElement(chain: evolutionInt) {
  if (chain.evolves_to.length !== 0) {
    const elements = chain.evolves_to.map((el) => {
      // Getting details how to evolve pokemon
      const evolDetails = el.evolution_details[0];
      let details = "";
      let key: keyof typeof evolDetails;

      for (key in evolDetails) {
        const v = evolDetails[key];

        if (v instanceof Object) {
          details += `${key} ${v.name}`;
        } else if (evolDetails[key]) {
          details += `${key} ${evolDetails[key]} `;
        }
      }
      details = details.replace(
        /\b(?:trigger|level-up|use-item|time_of_day)\b/gi,
        ""
      );
      details = details.replace(/[-_]+/g, " ");

      const element = (
        <div key={el.species.name}>
          <div className="container">
            <div>
              <span className="details">{details}</span>
              <span>
                <FontAwesomeIcon icon={faArrowDown}></FontAwesomeIcon>
              </span>
            </div>
            <img
              src={`https://img.pokemondb.net/sprites/bank/normal/${el.species.name}.png`}
              alt="pokemon-pic"
            />
            <span>{el.species.name}</span>
            {addElement(el)}
          </div>
        </div>
      );
      return element;
    });
    return <div className="items-container">{elements}</div>;
  }
  return null;
}
// Needs starter cicle to go through starter evolves_to

// chain -> evolves_to -> 0 ->

export const EvolutionChart: React.FC = () => {
  const chain = evolutionData.chain;

  return (
    <section className="chart-container">
      <header className="item-container">
        <img
          src={`https://img.pokemondb.net/sprites/bank/normal/${chain.species.name}.png`}
          alt="pokemon-pic"
        />
        <span>{chain.species.name}</span>
      </header>
      <div className="items-container">{addElement(chain)}</div>
    </section>
  );
};
