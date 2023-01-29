import React, { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/layout/Layout';

const App: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
      </Route>
    </Routes>
  );
}

export default App;
