import { I18nextProvider } from "react-i18next";
import i18n from "../src/app/components/i18n";
import { withTranslation, Trans } from "react-i18next";
import TemplateManager from "../src/app/components/TemplateManager";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { red, white } from "@mui/material/colors";

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from "@apollo/client";

const client = new ApolloClient({
  uri: process.env.NEXT_GRAPHQL_URL,
  cache: new InMemoryCache(),
});

const theme = createTheme({
  palette: {
    primary: red,
    secondary: white,
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <I18nextProvider i18n={i18n}>
      <ApolloProvider client={client}>
        <ThemeProvider theme={theme}>
          <TemplateManager i18n={i18n} theme={theme}>
            <Component i18n={i18n} {...pageProps} />
          </TemplateManager>
        </ThemeProvider>
      </ApolloProvider>
    </I18nextProvider>
  );
}

export default withTranslation()(MyApp);
