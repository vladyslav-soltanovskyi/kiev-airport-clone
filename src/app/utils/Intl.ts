import { ParsedQuery } from "query-string";

const acceptedLangs = ["en", "uk"];
const defaultLang = "en";

export type Langs = "en" | "uk";

export const getAcceptedLang = (params: ParsedQuery<string>) => {
  const qLang = Array.isArray(params.lang) ? '' : params.lang;
  const langParam = (qLang ?? defaultLang);
  const acceptedLang = acceptedLangs.includes(langParam) ? langParam : defaultLang;

  return acceptedLang
}