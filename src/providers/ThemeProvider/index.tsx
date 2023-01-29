import React, { FC } from 'react';
import { storage } from 'services/index';
import { ThemeProvider as ThemeProviderComponent } from 'styled-components';
import { themes, GlobalStyles, ThemeModes } from 'styles/index';
import { ThemeContext } from './context';

type ThemeProviderProps = {
  children: React.ReactNode;
};

const defaultTheme = (storage.getItem('theme') ?? 'light') as ThemeModes;

const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
  const [themeMode, setThemeMode] = React.useState<ThemeModes>(defaultTheme);

  const changeTheme = (themeMode: ThemeModes) => {
    storage.setItem('theme', themeMode);
    setThemeMode(themeMode);
  }

  const toggleTheme = () => {
    changeTheme(themeMode === 'light' ? 'dark' : 'light');
  }

  const valueThemeProvider = {
    toggleTheme,
    themeMode,
    setThemeMode: changeTheme
  }

  return (
    <ThemeContext.Provider value={valueThemeProvider}>
      <ThemeProviderComponent theme={themes[themeMode]}>
        <GlobalStyles />
        {children}
      </ThemeProviderComponent>
    </ThemeContext.Provider>
  );
};

export { ThemeProvider };
