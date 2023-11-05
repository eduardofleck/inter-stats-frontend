// Import everything needed to use the `useQuery` hook
import PlannedTable from "@/app/components/PlannedTable";
import { useQuery, gql } from "@apollo/client";
import React, { useRef, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import CardGame from "../../src/app/components/CardGame";
import { useRouter } from "next/router";

const GET_ALL_GAMES = (id) => gql`
  query MyQuery {
    games(condition: { idchampionship: ${id} }, orderBy: IDROUND_ASC) {
      nodes {
        id
        teamByIdteamhome {
          id
          name
        }
        teamByIdteamaway {
          id
          name
        }
        scoreteamhome
        scoreteamaway
        gamedate
        gamecanceled
        idround
      }
    }
  }
`;

export default function jogos() {
  const [games, setGames] = useState([]);
  const router = useRouter();
  const championshipGamesQuery = useQuery(GET_ALL_GAMES(router.query.id));
  const { t, i18n } = useTranslation();

  useEffect(() => {
    if (!championshipGamesQuery.loading && championshipGamesQuery.data) {
      let newGames = [];
      championshipGamesQuery.data.games.nodes.map((game) => {
        newGames.push({
          id: game.id,
          scoreTeamHome: game.scoreteamhome,
          scoreTeamAway: game.scoreteamaway,
          gameDate: game.gamedate,
          gameCanceled: game.gamecanceled,
          round: game.idround,
          teamHome: {
            id: game.teamByIdteamhome.id,
            name: game.teamByIdteamhome.name,
          },
          teamAway: {
            id: game.teamByIdteamaway.id,
            name: game.teamByIdteamhome.name,
          },
        });
      });

      setGames(newGames);
    }
  }, [championshipGamesQuery.loading]);

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
      {games.map((game) => (
        <CardGame game={game} />
      ))}
    </div>
  );
}
