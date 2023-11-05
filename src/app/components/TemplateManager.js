import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import MenuIcon from "@mui/material/Menu";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Container from "@mui/material/Container";
import Link from "next/link";
import Button from "@mui/material/Button";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/router";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import Translate from "@mui/icons-material/Translate";
import React, { useRef, useEffect, useState } from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

export default function TemplateManager(props) {
  const { t, i18n } = useTranslation();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const setPortugese = () => {
    props.i18n.changeLanguage("pt");
  };
  const setEnglish = () => {
    props.i18n.changeLanguage("en");
  };

  return (
    <div>
      <AppBar position="fixed" color="primary" sx={{ top: "auto", top: 0 }}>
        <Toolbar>
          <Link href="/" style={{ color: "inherit", textDecoration: "none" }}>
            <img src="/logo-32x32.png"></img>
          </Link>
          <Typography
            sx={{ margin: "0px 0px 0px 10px" }}
            variant="h6"
            color="inherit"
            component="div"
          >
            {t("project.title")}
          </Typography>
          <Link
            href="/sobre"
            style={{
              color: "inherit",
              textDecoration: "none",
              position: "absolute",
              right: "30px",
            }}
          >
            <Typography
              sx={{ margin: "0px 0px 0px 10px" }}
              variant="subtitle1"
              color="inherit"
              component="div"
            >
              {t("generic.about")}
            </Typography>
          </Link>
        </Toolbar>
      </AppBar>

      <div
        style={{ display: "grid", gridAutoRows: "minmax(600px, auto) auto" }}
      >
        <main>
          <div style={{ ...props.theme.mixins.toolbar }} />
          <Container maxWidth="lg">
            <div
              style={{ minHeight: "fit-content", margin: "15px 0px 0px 0px" }}
            >
              {props.children}
            </div>
          </Container>
        </main>
        <footer style={{ height: "50px", textAlign: "center" }}>
          <Divider style={{ margin: "20px" }} />
          <div>
            <Typography variant="subtitle1" color="inherit" component="div">
              {t("project.title")} - 2023
            </Typography>
            <IconButton
              aria-controls={open ? "demo-positioned-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            >
              <Translate />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
            >
              <MenuItem onClick={setPortugese}>Português</MenuItem>
              <MenuItem onClick={setEnglish}>English</MenuItem>
            </Menu>
          </div>
        </footer>
      </div>
    </div>
  );
}
