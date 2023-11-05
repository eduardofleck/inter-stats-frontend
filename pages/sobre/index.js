import { useQuery, gql } from "@apollo/client";
import React, { useRef, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Contributor from "../../src/app/components/Contributor";
import GithubRepository from "../../src/app/components/GithubRepository";
import DevicesIcon from "@mui/icons-material/Devices";
import StorageIcon from "@mui/icons-material/Storage";
import ServerIcon from "@mui/icons-material/Lan";

export default function index() {
  const { t, i18n } = useTranslation();

  return (
    <div style={{ margin: "20px" }}>
      <Typography variant="h4" gutterBottom>
        {t("about.title")}
      </Typography>
      <div style={{ margin: "20px" }}>
        <Typography variant="h5" gutterBottom>
          {t("about.contributors")}
        </Typography>
        <Divider />
        <div style={{ margin: "20px" }}>
          <Contributor twitterAccount="eduardofleck" />
        </div>
        <Typography variant="h5" gutterBottom>
          {t("about.data")}
        </Typography>
        <Divider />
        <div style={{ margin: "20px" }}></div>
        <Typography variant="h5" gutterBottom>
          {t("about.github")}
        </Typography>
        <Divider />
        <div style={{ margin: "20px" }}>
          <GithubRepository
            repositoryTitle="Frontend"
            repositoryUrl="https://github.com/eduardofleck/inter-stats-frontend"
          />
          <GithubRepository
            repositoryTitle="Backend"
            repositoryUrl="https://github.com/eduardofleck/inter-stats-backend"
          />
          <GithubRepository
            repositoryTitle="Database"
            repositoryUrl="https://github.com/eduardofleck/interStats"
          />
        </div>
        <Typography variant="h5" gutterBottom>
          {t("about.frameworks")}
        </Typography>
        <Divider />
        <div
          style={{
            margin: "20px",
          }}
        >
          <div
            style={{
              display: "grid",
              gridAutoFlow: "column",
              gridAutoColumns: "30px auto",
            }}
          >
            <DevicesIcon />
            <Typography variant="subtitle1" gutterBottom>
              mui.com
            </Typography>
          </div>
          <div
            style={{
              display: "grid",
              gridAutoFlow: "column",
              gridAutoColumns: "30px auto",
            }}
          >
            <StorageIcon />
            <Typography variant="subtitle1" gutterBottom>
              Postgres
            </Typography>
          </div>
          <div
            style={{
              display: "grid",
              gridAutoFlow: "column",
              gridAutoColumns: "30px auto",
            }}
          >
            <StorageIcon />
            <Typography variant="subtitle1" gutterBottom>
              GraphQL
            </Typography>
          </div>
          <div
            style={{
              display: "grid",
              gridAutoFlow: "column",
              gridAutoColumns: "30px auto",
            }}
          >
            <ServerIcon />
            <Typography variant="subtitle1" gutterBottom>
              Heroku.com
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
}
