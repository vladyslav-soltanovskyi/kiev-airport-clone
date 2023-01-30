import React, { FC, Suspense, useEffect } from 'react';
import { I18nextProvider } from 'react-i18next';
import { Navigate, Route, Routes } from 'react-router-dom';
import Arrivals from 'screens/arrivals/Arrivals';
import Departures from 'screens/departures/Departures';
import Layout from 'components/layout/Layout';
import { useActions } from './app/hooks';
import i18n from './i18n';
import LoaderPage from 'ui/loader-page/LoaderPage';
import { formatDateQuery, getDateByParams } from 'utils/dates';

const App: FC = () => {
  const { fetchFlights } = useActions();
  const defaultDay = getDateByParams();

  useEffect(() => {
    fetchFlights(defaultDay);
  }, []);

  return (
    <I18nextProvider i18n={i18n}>
      <Suspense fallback={<LoaderPage />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Navigate to="/arrivals" />} />
            <Route path="/arrivals" element={<Arrivals />}></Route>
            <Route path="/departures" element={<Departures />}></Route>
          </Route>
          <Route path="*" element={<div>not Found</div>} />
        </Routes>
      </Suspense>
    </I18nextProvider>
  );
}

export default App;
