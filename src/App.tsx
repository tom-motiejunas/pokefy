import React, { useState } from "react";

import "./App.scss";

import { Search } from "./components/search/search.component";
import { PokeContainer } from "./components/poke-container/poke-container";

import { SearchDataContext } from "./contexts/search-data.context";

import { data } from "./tempData";

function App() {
  const [searchData, setSearchData] = useState(data);

  return (
    <div className="App">
      <SearchDataContext.Provider value={searchData}>
        <Search setData={setSearchData}></Search>
        <PokeContainer></PokeContainer>
      </SearchDataContext.Provider>
    </div>
  );
}

export default App;
