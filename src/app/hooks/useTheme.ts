import { ThemeContext } from 'providers/ThemeProvider/context';
import { useContext } from 'react';

export const useTheme = () => useContext(ThemeContext);