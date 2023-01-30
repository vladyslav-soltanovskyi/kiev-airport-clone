import React from "react";
import { useTheme } from "hooks/useTheme";
import { TogglerThemeContainer, TogglerThemeIcon } from "./styles";

const TogglerTheme = () => {
  const { themeMode, toggleTheme } = useTheme();
  const isDark = themeMode === 'dark';

  return (
    <TogglerThemeContainer onClick={toggleTheme}>
      <TogglerThemeIcon
        className={`fa-solid ${isDark ? 'fa-moon' : 'fa-sun'}`}
        active={!isDark}
      />
    </TogglerThemeContainer>
  );
}

export default TogglerTheme;