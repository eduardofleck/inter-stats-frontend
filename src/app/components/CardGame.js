import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";

function CardGame(props) {
  const router = useRouter();
  const { t, i18n } = useTranslation();

  const moveToLink = () => {
    if (props.link) router.push(props.link);
  };

  return (
    <Card sx={{ minWidth: 275 }} key={props.game.id}>
      <div style={{ margin: "10px" }}>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {props.game.teamHome.name} {props.game.scoreTeamHome} x{" "}
          {props.game.scoreTeamAway} {props.game.teamAway.name}
        </Typography>
        <Typography sx={{ fontSize: 10 }} color="text.secondary" gutterBottom>
          Rodada: {props.game.round}
        </Typography>
        <Typography sx={{ fontSize: 10 }} color="text.secondary" gutterBottom>
          Estádio: {props.game.stadium}
        </Typography>
        <Typography sx={{ fontSize: 10 }} color="text.secondary" gutterBottom>
          Público: {props.game.attendance}
        </Typography>
        <Typography sx={{ fontSize: 10 }} color="text.secondary" gutterBottom>
          Data: {props.game.gameDate}
        </Typography>
      </div>
    </Card>
  );
}

export default CardGame;
