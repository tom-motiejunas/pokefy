import React, { useContext } from "react";

import "./stat-chart.style.scss";

import { RadarChart } from "react-vis";
import { SearchDataContext } from "../../contexts/search-data.context";

interface objectArr {
  [index: string]: number;
}

export const StatChart: React.FC = () => {
  const pokemonData = useContext(SearchDataContext);
  const pokemonStats = pokemonData?.stats;
  if (!pokemonStats) return null;
  // loop through pokemon stats and fill up all posible stat names
  let data: objectArr = {};
  const domains = pokemonStats.map((el) => {
    data[el.stat.name] = el.base_stat;
    return { name: el.stat.name, domain: [0, 160] };
  });

  return (
    <section className="stat-chart-container">
      <RadarChart
        data={[data]}
        domains={domains}
        height={350}
        width={300}
        margin={{ top: 50, right: 20, left: 20, bottom: 50 }}
        startingAngle={1.58}
        hideInnerMostValues={true}
        style={{
          axes: {
            line: {},
            ticks: {},
            text: {},
          },
          labels: {
            fontSize: 10,
          },
          polygons: {
            strokeWidth: 0.5,
            strokeOpacity: 1,
            fillOpacity: 0.1,
          },
        }}
      />
    </section>
  );
};
