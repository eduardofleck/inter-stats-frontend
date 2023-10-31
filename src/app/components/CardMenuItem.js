import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useRouter } from "next/router";

function CardMenuItem(props) {
  const router = useRouter();

  const moveToLink = () => {
    if (props.link) router.push(props.link);
  };

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {props.menuSuperior}
        </Typography>
        <Typography variant="body2">{props.message}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={moveToLink}>
          {props.button}
        </Button>
      </CardActions>
    </Card>
  );
}

export default CardMenuItem;
