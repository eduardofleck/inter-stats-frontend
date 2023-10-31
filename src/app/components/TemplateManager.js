import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import MenuIcon from "@mui/material/Menu";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Container from "@mui/material/Container";
import Link from "next/link";

export default function TemplateManager(props) {
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
              Inter Stats
            </Typography>
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
