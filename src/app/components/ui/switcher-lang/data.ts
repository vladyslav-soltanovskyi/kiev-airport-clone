import { Langs } from "utils/Intl";

export interface Lang {
  lang: Langs;
  flag: string;
}

export const langs: Lang[] = [
  {
    lang: 'uk',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Flag_of_Ukraine.svg/255px-Flag_of_Ukraine.svg.png'
  },
  {
    lang: 'en',
    flag: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/383px-Flag_of_the_United_States.svg.png'
  }
];