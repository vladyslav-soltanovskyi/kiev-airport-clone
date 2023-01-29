import { breakpoints, lightTheme, themes } from "./theme";

export type TBreakPoints = keyof typeof breakpoints;

export type IMaxMedia = {
  [key in TBreakPoints]: string;
}

export type IDefaultTheme = typeof lightTheme;

export type Themes = typeof themes;

export type ThemeModes = keyof Themes;