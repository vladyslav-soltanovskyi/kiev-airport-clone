import { createContext } from "react";
import { ThemeModes } from "styles/types";

export interface IThemeContextProps {
  setThemeMode: (theme: ThemeModes) => void;
  themeMode: ThemeModes,
  toggleTheme: () => void;
}


export const ThemeContext = createContext<IThemeContextProps>({
  setThemeMode: (theme: ThemeModes) => {},
  toggleTheme: () => {},
  themeMode: 'light',
});
