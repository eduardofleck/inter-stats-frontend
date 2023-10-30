import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import MenuIcon from "@mui/material/Menu";
import { ThemeProvider, createTheme } from "@mui/material/styles";

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
            <img src="/logo-32x32.png"></img>
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
        <div>{props.children}</div>
      </main>
    </div>
  );
}
