import React, { useContext } from "react";
import { SearchDataContext } from "../../contexts/search-data.context";

import "./generation-info.style.scss";

export const GenerationInfo: React.FC = () => {
  const searchData = useContext(SearchDataContext);
  const gameIndices = searchData.game_indices;

  return (
    <section>
      <h2>Appear in </h2>
      <ul className="generation-list">
        {gameIndices.map((el) => {
          return <li key={el.version.name}>{el.version.name}</li>;
        })}
      </ul>
    </section>
  );
};
