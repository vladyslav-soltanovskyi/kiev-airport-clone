import { breakpoints, lightTheme } from "./theme";

export type TBreakPoints = keyof typeof breakpoints;

export type IMaxMedia = {
  [key in TBreakPoints]: string;
}

export type IDefaultTheme = typeof lightTheme;