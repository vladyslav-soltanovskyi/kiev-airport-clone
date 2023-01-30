import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';
import Search from 'ui/search/Search';
import Header from './header/Header';
import MainSection from './main-section/MainSection';

const Layout: FC = () => {
  return (
    <>
      <Header />
      <Search />
      <MainSection>
        <Outlet />
      </MainSection>
    </>
  );
}

export default Layout;