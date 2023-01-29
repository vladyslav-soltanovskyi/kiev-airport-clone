import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';
import Search from '../ui/search/Search';
import MainSection from './main-section/MainSection';

const Layout: FC = () => {
  return (
    <>
      <Search />
      <MainSection>
        <Outlet />
      </MainSection>
    </>
  );
}

export default Layout;