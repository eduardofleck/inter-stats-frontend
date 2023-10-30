import { I18nextProvider } from "react-i18next";
import i18n from "../src/app/components/i18n";
import { withTranslation, Trans } from "react-i18next";
import TemplateManager from "../src/app/components/TemplateManager";
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

function MyApp({ Component, pageProps }) {
  return (
    <I18nextProvider i18n={i18n}>
      <ApolloProvider client={client}>
        <TemplateManager>
          <Component i18n={i18n} {...pageProps} />
        </TemplateManager>
      </ApolloProvider>
    </I18nextProvider>
  );
}

export default withTranslation()(MyApp);
