import React, { useRef } from "react";

import "./search.style.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import { fetchData } from "../../fetch";

interface Props {
  setData: React.Dispatch<React.SetStateAction<any>>;
}

async function getData(url: string, setData: React.Dispatch<any>) {
  const data = await fetchData(url);
  setData(data);
}

export const Search: React.FC<Props> = ({ setData }) => {
  function searchPokemon(
    container: HTMLDivElement | null,
    result: HTMLInputElement | null
  ) {
    if (!result) return;

    getData(`https://pokeapi.co/api/v2/pokemon/${result.value}`, setData);

    if (container) {
      container.classList.add("shrink");
    }
  }
  const containerRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLInputElement>(null);

  return (
    <div className="search-container" ref={containerRef}>
      <input
        type="text"
        name="search-pokemon"
        placeholder="Enter pokemon's name"
        ref={searchRef}
      />
      <button
        onClick={() => searchPokemon(containerRef.current, searchRef.current)}
      >
        <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
      </button>
    </div>
  );
};
