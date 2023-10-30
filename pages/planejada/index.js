// Import everything needed to use the `useQuery` hook
import { useQuery, gql } from "@apollo/client";
import React, { useRef, useEffect, useState } from "react";

const GET_ALL_GAMES = gql`
  query MyQuery {
    games(condition: { idchampionship: 1 }) {
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

const GET_ALL_TEAMS = gql`
  {
    teams {
      nodes {
        id
        name
        size
      }
    }
  }
`;

function DisplayTeamSizes() {
  const { loading, error, data } = useQuery(GET_ALL_TEAMS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return data.teams.nodes.map(({ id, name, size }) => (
    <div key={id}>
      <h3>
        {name} {size}
      </h3>
    </div>
  ));
}

export default function index() {
  const [teams, setTeams] = useState([]);
  const [games, setGames] = useState([]);

  const teamsQuery = useQuery(GET_ALL_TEAMS);
  const gamesQuery = useQuery(GET_ALL_GAMES);

  console.log("test");

  useEffect(() => {
    if (!teamsQuery.loading && teamsQuery.data) {
      const newTeams = [];
      teamsQuery.data.teams.nodes.map(({ id, name, size }) =>
        newTeams.push({ id, name, size })
      );

      setTeams(newTeams);
    }

    if (!gamesQuery.loading && gamesQuery.data) {
      console.log(gamesQuery.data);
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
  }, [teamsQuery.loading, gamesQuery.loading]);

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
      return teams.map(function (team) {
        let pointsPlanned = 0;
        let points = 0;
        games.forEach((game) => {
          if (
            game.scoreTeamHome !== null &&
            (team.id === game.teamHomeId || team.id === game.teamAwayId)
          ) {
            pointsPlanned += processPlanned(game, team.id);
            points += processGamePoints(game, team.id);
            console.log(
              `${game.round} - ${game.teamHomeName} ${game.scoreTeamHome} x ${game.scoreTeamAway} ${game.teamAwayName} - ${points}`
            );
          }
        });
        return (
          <h3 key={team.id}>
            {team.name} - {pointsPlanned} - {points}
          </h3>
        );
      });
    }
  };

  return (
    <div>
      <h1>TESTE</h1>
      <DisplayPlanejada />
    </div>
  );
}
