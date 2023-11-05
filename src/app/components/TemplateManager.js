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

export default function TemplateManager(props) {
  const { t, i18n } = useTranslation();

  const theme = createTheme({
    palette: {
      primary: {
        main: "#ffffff",
      },
    },
  });

  return (
    <div>
      <ThemeProvider theme={theme}>
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
      </ThemeProvider>
      <main>
        <div style={theme.mixins.toolbar} />
        <Container maxWidth="lg">
          <div style={{ margin: "15px 0px 0px 0px" }}>{props.children}</div>
        </Container>
      </main>
    </div>
  );
}
