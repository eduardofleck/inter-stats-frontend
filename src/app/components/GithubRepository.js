import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useRouter } from "next/router";
import GitHubIcon from "@mui/icons-material/GitHub";

function GithubRepository(props) {
  const router = useRouter();

  return (
    <div>
      <div
        style={{
          display: "grid",
          gridAutoFlow: "column",
          gridAutoColumns: "30px auto",
        }}
      >
        <GitHubIcon />
        <Typography variant="subtitle1" gutterBottom>
          {props.repositoryTitle}
        </Typography>
      </div>
      <Typography
        variant="subtitle1"
        gutterBottom
        style={{ margin: "0px 0px 10px 10px" }}
      >
        <a
          href={props.repositoryUrl}
          title="test"
          style={{
            textDecoration: "none",
            textDecorationColor: "black",
          }}
        >
          {props.repositoryUrl}
        </a>
      </Typography>
    </div>
  );
}

export default GithubRepository;
