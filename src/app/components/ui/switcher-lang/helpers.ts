import queryString from "query-string";
import { getAcceptedLang } from "utils/Intl";
import { langs } from "./data";

export const getDefaultLang = () => {
  const params = queryString.parse(location.search);
  const lang = getAcceptedLang(params);

  return langs.find(langItem => langItem.lang === lang);
}