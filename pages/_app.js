import { I18nextProvider } from "react-i18next";
import i18n from "../src/app/components/i18n";
import { withTranslation, Trans } from "react-i18next";
import TemplateManager from "../src/app/components/TemplateManager";

function MyApp({ Component, pageProps }) {
  return (
    <I18nextProvider i18n={i18n}>
      <TemplateManager>
        <Component i18n={i18n} {...pageProps} />
      </TemplateManager>
    </I18nextProvider>
  );
}

export default withTranslation()(MyApp);
