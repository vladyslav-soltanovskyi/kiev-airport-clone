import React, { FC } from "react";
import SwitcherLang from "ui/switcher-lang/SwitcherLang";
import TogglerTheme from "ui/toggler-theme/TogglerTheme";
import { HeaderContainer } from "./styles";

const Header: FC = () => {
  return (
    <HeaderContainer>
      <TogglerTheme />
      <SwitcherLang />
    </HeaderContainer>
  );
}

export default Header;