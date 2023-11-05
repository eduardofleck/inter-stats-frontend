import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useRouter } from "next/router";
import TwitterIcon from "@mui/icons-material/Twitter";

function Contributor(props) {
  const router = useRouter();

  return (
    <div style={{ display: "grid", gridAutoFlow: "column dense" }}>
      <div
        style={{
          display: "grid",
          gridAutoFlow: "column",
          gridAutoColumns: "30px auto",
        }}
      >
        <TwitterIcon />
        <a
          href={`https://www.twitter.com/${props.twitterAccount}`}
          title="test"
          style={{
            textDecoration: "none",
            textDecorationColor: "black",
          }}
        >
          <Typography variant="subtitle1" gutterBottom>
            {props.twitterAccount}
          </Typography>
        </a>
      </div>
    </div>
  );
}

export default Contributor;
