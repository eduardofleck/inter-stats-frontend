// Import everything needed to use the `useQuery` hook
import PlannedTable from "@/app/components/PlannedTable";
import { useQuery, gql } from "@apollo/client";
import React, { useRef, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const GET_ALL_GAMES = gql`
  query MyQuery {
    games(condition: { idchampionship: 2023 }) {
      nodes {
        teamByIdteamhome {
          id
          name
          size
        }
        teamByIdteamaway {
          id
          name
          size
        }
        scoreteamaway
        scoreteamhome
        roundByIdround {
          round
        }
        id
      }
    }
  }
`;

export default function index() {
  const [teams, setTeams] = useState([]);
  const [games, setGames] = useState([]);

  //const teamsQuery = useQuery(GET_ALL_TEAMS);
  const gamesQuery = useQuery(GET_ALL_GAMES);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    if (!gamesQuery.loading && gamesQuery.data) {
      let teamsId = [];
      let newTeams = [];
      gamesQuery.data.games.nodes.map(
        ({ teamByIdteamhome, teamByIdteamaway }) => {
          if (!teamsId.includes(teamByIdteamhome.id)) {
            teamsId.push(teamByIdteamhome.id);
            newTeams.push(teamByIdteamhome);
          }
          if (!teamsId.includes(teamByIdteamaway.id)) {
            teamsId.push(teamByIdteamaway.id);
            newTeams.push(teamByIdteamaway);
          }
        }
      );

      setTeams(newTeams);

      const newGames = [];
      gamesQuery.data.games.nodes.map(
        ({
          teamByIdteamhome,
          teamByIdteamaway,
          scoreteamaway,
          scoreteamhome,
          roundByIdround,
          id,
        }) =>
          newGames.push({
            teamHomeId: teamByIdteamhome.id,
            teamHomeName: teamByIdteamhome.name,
            teamHomeSize: teamByIdteamhome.size,
            scoreTeamHome: scoreteamhome,
            teamAwayId: teamByIdteamaway.id,
            teamAwayName: teamByIdteamaway.name,
            teamAwaySize: teamByIdteamaway.size,
            scoreTeamAway: scoreteamaway,
            round: roundByIdround.round,
            id,
          })
      );

      setGames(newGames);
    }
  }, [gamesQuery.loading]);

  const DisplayPlanejada = () => {
    function processPlanned(game, teamId) {
      if (teamId === game.teamHomeId) {
        return 3;
      } else if (teamId === game.teamAwayId) {
        if (game.teamHomeSize === "S") {
          return 3;
        } else if (game.teamHomeSize === "M") {
          return 1;
        }
        return 0;
      }
      return 0;
    }

    function processGamePoints(game, teamId) {
      if (teamId === game.teamHomeId) {
        if (game.scoreTeamHome > game.scoreTeamAway) return 3;
        if (game.scoreTeamHome === game.scoreTeamAway) return 1;
        else return 0;
      } else if (teamId === game.teamAwayId) {
        if (game.scoreTeamAway > game.scoreTeamHome) return 3;
        if (game.scoreTeamAway === game.scoreTeamHome) return 1;
        else return 0;
      }
      return 0;
    }

    if (games.length === 0 || teams.length === 0) {
      return <p>Carregando...</p>;
    } else {
      let rows = [];
      let round = 0;
      teams.map(function (team) {
        let pointsPlanned = 0;
        let points = 0;

        games.forEach((game) => {
          if (
            game.scoreTeamHome !== null &&
            (team.id === game.teamHomeId || team.id === game.teamAwayId)
          ) {
            round = Math.max(round, game.round);
            pointsPlanned += processPlanned(game, team.id);
            points += processGamePoints(game, team.id);
          }
        });

        rows.push({
          teamId: team.id,
          team: team.name,
          pointsPlanned,
          points,
          percentagePlanned: (points / pointsPlanned) * 100,
        });
      });

      return (
        <div>
          <PlannedTable rows={rows} lastRound={round} teams={teams} />
        </div>
      );
    }
  };

  return (
    <div>
      <DisplayPlanejada />
    </div>
  );
}
