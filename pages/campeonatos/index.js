// Import everything needed to use the `useQuery` hook
import PlannedTable from "@/app/components/PlannedTable";
import { useQuery, gql } from "@apollo/client";
import React, { useRef, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import CardChampionship from "../../src/app/components/CardChampionship";

const GET_ALL_CHAMPIOSHIPS = gql`
  query MyQuery {
    championships(orderBy: ID_DESC) {
      totalCount
      nodes {
        name
        id
        gamesByIdchampionship {
          totalCount
        }
      }
    }
  }
`;

export default function index() {
  const [championships, setChampionships] = useState([]);

  const championshipsQuery = useQuery(GET_ALL_CHAMPIOSHIPS);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    if (!championshipsQuery.loading && championshipsQuery.data) {
      let newChampionships = [];
      championshipsQuery.data.championships.nodes.map((championship) => {
        newChampionships.push(championship);
      });

      setChampionships(newChampionships);
    }
  }, [championshipsQuery.loading]);

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gridAutoFlow: "row",
        rowGap: "10px",
        columnGap: "10px",
      }}
    >
      {championships.map((champ) => (
        <CardChampionship
          key={champ.id}
          menuSuperior={champ.name}
          totalGames={champ.gamesByIdchampionship.totalCount}
          link={`/campeonatos/${champ.id}`}
        />
      ))}
    </div>
  );
}
