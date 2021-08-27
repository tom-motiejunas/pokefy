import React, { useContext } from "react";

import "./poke-container.scss";

import { GenerationInfo } from "../generation-info/generation-info.component";
import InfoCard from "../infocard/infocard.component";
import { EvolutionChart } from "../evolution-chart/evolution-chart.component";
import { StatChart } from "../stat-chart/stat-chart.component";

import { SearchDataContext } from "../../contexts/search-data.context";

interface Props {}

export const PokeContainer: React.FC<Props> = () => {
  const searchData = useContext(SearchDataContext);
  if (!searchData) return null;

  return (
    <main className="main-container">
      <InfoCard></InfoCard>
      <GenerationInfo></GenerationInfo>
      <EvolutionChart></EvolutionChart>
      <StatChart></StatChart>
    </main>
  );
};
