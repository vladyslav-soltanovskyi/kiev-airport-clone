import React, { FC, useRef, useState } from "react";
import { useClickOutside } from "hooks/useClickOutside";
import { getDefaultLang } from "./helpers";
import {
  FlagImg,
  LangList,
  LangListContainer,
  LangItem,
  SwitcherLangConatainer,
  LangListItem
} from "./styles";
import { Lang, langs } from "./data";
import queryString from "query-string";
import { useSearchParams } from "react-router-dom";
import { useLang } from "hooks/useLang";

const defaultLang = getDefaultLang();

const SwitcherLang: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const selectContainerRef = useRef<HTMLDivElement>(null);
  const [params, setParams] = useSearchParams();
  const { changeLanguage } = useLang();
  const [selectedLang, setSelectedLang] = useState(defaultLang);
  
  const toggling = () => setIsOpen(!isOpen);

  const close = () => setIsOpen(false);

  const changeLang = (lang: Lang) => {
    const queryParams = queryString.parse(params.toString());

    setSelectedLang(lang);
    changeLanguage(lang.lang)
    setParams({
      ...queryParams,
      lang: lang.lang
    })
  }

  const restLangs = langs.filter(lang => lang.lang !== selectedLang?.lang)

  useClickOutside(selectContainerRef, close);

  return (
    <SwitcherLangConatainer
      ref={selectContainerRef}
    >
      <LangItem
        onClick={toggling}
      >
        <FlagImg src={selectedLang?.flag} alt={`select lang ${selectedLang?.lang}`} />
      </LangItem>
      {isOpen && (
        <LangListContainer>
          <LangList>
            {restLangs.map(lang => (
              <LangListItem
                key={lang.lang}
                onClick={() => changeLang(lang)}
              >
                <FlagImg src={lang.flag} alt={`lang ${lang.lang}`} />
              </LangListItem>
            ))}
          </LangList>
        </LangListContainer>
      )}
    </SwitcherLangConatainer>
  );
}

export default SwitcherLang;