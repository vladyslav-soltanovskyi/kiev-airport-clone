import React, { FC, useState } from 'react';
import { ThemeProvider as ThemeProviderComponents } from 'styled-components';
import { darkTheme, lightTheme, GlobalStyles } from 'styles/index';
import { Themes } from './types';

type ThemeProviderProps = {
  children: React.ReactNode;
};

const themes: Themes  = {
  dark: darkTheme,
  light: lightTheme,
};

const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState('light');

  return (
    <ThemeProviderComponents theme={themes[theme]}>
      <GlobalStyles />
      {children}
    </ThemeProviderComponents>
  );
};

export { ThemeProvider };
