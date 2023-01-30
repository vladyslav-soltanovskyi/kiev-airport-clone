import { IMaxMedia, TBreakPoints } from "./types";

const colors = {
  primary: "#1eb7ee",
  primaryLight: "#73d2f0",
  primaryDark: "rgba(0,102,135,.1)",
  secondary: "#63c745",
  white: "#fff",
  text: "#212529",
  textDark: "#212529",
  textLight: "#95989a",
  textLightSecondary: "#b8b9b9",
  background: "#e7efec",
  backgroundLight: "#fff",
  borderLight: "#d0d0d0",
};

const darkColors = {
  ...colors,
  background: "#2a2d2c",
  backgroundLight: "#5c5c5c",
  text: "#eee",
  textLight: "#bbb",
  primaryDark: "rgb(223 223 223 / 10%)",
};

const shadows = {
  tableItem: 'box-shadow: 0 5px 10px rgb(0 0 0 / 20%)',
};

const borders = {
  dayContainer: `3px solid ${colors.borderLight}`,
  dayContainerActive: `3px solid ${colors.primary}`,
};

export const breakpoints = {
  xs: 480,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1400,
};

const maxMedia = Object.keys(breakpoints).reduce(
  (obj, breakpoint) => {
    const bp = breakpoint as TBreakPoints;
    obj[bp] = `@media (max-width: ${breakpoints[bp]}px)`
    return obj;
  }, {} as IMaxMedia
);

const lightTheme = {
  colors,
  shadows,
  borders,
  maxMedia,
};

const darkTheme = {
  colors: darkColors,
  shadows,
  borders,
  maxMedia,
};

export { lightTheme, darkTheme };

export const themes  = {
  dark: darkTheme,
  light: lightTheme,
};