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
  background: "#e7efec",
  borderLight: "#d0d0d0",
};

const darkColors = {
  ...colors,
  background: "#404342",
};

const fontSizes = {
  h2: '70px',
  h2_lg: '60px',
  xs2: '12px',
  xs: '14px',
  sm: '16px',
  md: '18px',
  lg: '20px',
  xl: '22px',
  xl2: '24px',
  xl3: '26px',
};

const fontWeights = {
  light: '300',
  regular: '400',
  medium: '500',
  semibold: '600',
  bold: '700',
};

const lineHeights = {
  h2_lg: '80px',
  h2_md: '40px',
};

const spaces = {
  xs: '5px',
  sm: '10px',
  md: '15px',
  lg: '20px',
  xl: '25px',
  xl2: '30px',
  xl3: '35px',
  xl4: '40px',
  xl5: '45px',
  xl6: '50px',
  xl7: '55px',
  xl8: '60px',
  xl9: '65px',
  xl10: '70px',
  xl11: '75px',
  xl12: '80px',
};

const radiuses = {
  navItem: '60px',
  navItem_lg: '30px',
  btnSearch: '80px',
  btnSearch_h: '40px',
  circle: '50%',
};

const heights = {
  search: '50px',
};

const widths = {
  btnSearch: '200px',
  btnSearch_lg: '170px',
};

const shadows = {
  tableItem: 'box-shadow: 0 5px 10px rgb(0 0 0 / 20%)',
};

const borders = {
  dayContainer: `3px solid ${colors.borderLight}`,
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
  fontSizes,
  fontWeights,
  lineHeights,
  heights,
  widths,
  spaces,
  radiuses,
  shadows,
  borders,
  breakpoints,
  maxMedia,
};

const darkTheme = {
  colors: darkColors,
  fontSizes,
  fontWeights,
  lineHeights,
  heights,
  widths,
  spaces,
  radiuses,
  shadows,
  borders,
  breakpoints,
  maxMedia,
};

export { lightTheme, darkTheme };
