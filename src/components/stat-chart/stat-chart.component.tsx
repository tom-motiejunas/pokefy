import React, { useContext, useEffect } from "react";

import "./stat-chart.style.scss";

import { RadarChart } from "react-vis";
import { SearchDataContext } from "../../contexts/search-data.context";

interface objectArr {
  [index: string]: number;
}

export const StatChart: React.FC = () => {
  const pokemonStats = useContext(SearchDataContext).stats;

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
        height={450}
        width={400}
      />
    </section>
  );
};
