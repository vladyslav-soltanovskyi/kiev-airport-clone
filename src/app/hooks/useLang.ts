import { useSearchParams } from "react-router-dom";
import qS from "query-string";
import i18n from "../../i18n";
import { getAcceptedLang, Langs } from "utils/Intl";

export const useLang = () => {
  const [params, setParams] = useSearchParams();
  const qParams = qS.parse(params.toString());
  const lang = getAcceptedLang(qParams) as Langs;

  const changeLanguage = (lang: Langs) => {
    i18n.changeLanguage(lang);
    setParams({
      ...qParams,
      lang
    });
  }

  return {
    changeLanguage,
    lang
  };
}
