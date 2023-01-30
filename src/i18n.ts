import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'
import HttpApi from 'i18next-http-backend' 
import { getAcceptedLang } from 'utils/Intl';
import qS from "query-string";

const params = qS.parse(window.location.search)

const LANG_KEY: string = getAcceptedLang(params);

i18next
  .use(initReactI18next)
  .use(HttpApi)
  .init(
    {
      backend: {
        loadPath: './locales/{{lng}}/{{ns}}.json'
      },
      lng: LANG_KEY,
      supportedLngs: ["en", "uk"]
  })

export default i18next