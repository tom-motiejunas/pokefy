import React, { useState, useContext, useEffect } from "react";

import { SearchDataContext } from "../../contexts/search-data.context";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

import "./evolution-chart.style.scss";
import { fetchData } from "../../fetch";

interface pokemonSpeciesInt {
  id: number;
  name: string;
  order: number;
  gender_rate: number;
  capture_rate: number;
  base_happiness: number;
  is_baby: boolean;
  is_legendary: boolean;
  is_mythical: boolean;
  hatch_counter: boolean;
  has_gender_differences: boolean;
  forms_switchable: boolean;
  growth_rate: {
    name: string;
    url: string;
  };
  pokedex_numbers: {
    entry_number: number;
    pokedex: {
      name: string;
      url: string;
    };
  }[];
  egg_groups: {
    name: string;
    url: string;
  }[];
  color: {
    name: string;
    url: string;
  };
  shape: {
    name: string;
    url: string;
  };
  evolves_from_species: {
    name: string;
    url: string;
  };
  evolution_chain: {
    url: string;
  };
  habitat?: null | string;
  generation: {
    name: string;
    url: string;
  };
  names: {
    name: string;
    language: {
      name: string;
      url: string;
    };
  }[];
  flavor_text_entries: {
    flavor_text: string;
    language: {
      name: string;
      url: string;
    };
    version: {
      name: string;
      url: string;
    };
  }[];
  form_descriptions: {
    description: string;
    language: {
      name: string;
      url: string;
    };
  }[];
  genera: {
    genus: string;
    language: {
      name: string;
      url: string;
    };
  }[];
  varieties: {
    is_default: boolean;
    pokemon: {
      name: string;
      url: string;
    };
  }[];
}

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

interface evolutionData {
  type: evolutionData;
  id: number;
  baby_trigger_item?: null;
  chain: evolutionInt;
}

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
  const [evolutionData, setEvolutionData] = useState<evolutionInt | undefined>(
    undefined
  );

  function isFoo(object: any): object is pokemonSpeciesInt {
    return "evolution_chain" in object;
  }
  function isBoo(object: any): object is evolutionData {
    return "chain" in object;
  }

  async function getData(data: typeof searchData) {
    const pokemonSpecies = await fetchData(
      `https://pokeapi.co/api/v2/pokemon-species/${data?.name}/`
    );
    if (!pokemonSpecies) return;

    if (isFoo(pokemonSpecies)) {
      const evolutionData = await fetchData(pokemonSpecies.evolution_chain.url);
      if (!evolutionData) return;
      if (isBoo(evolutionData)) {
        setEvolutionData(evolutionData.chain);
      }
    }
  }

  // getData()
  const searchData = useContext(SearchDataContext);
  useEffect(() => {
    getData(searchData);
  }, []);
  if (!evolutionData) return null;
  const chain = evolutionData;

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
