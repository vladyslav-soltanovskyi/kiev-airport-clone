import React, { FC, Suspense, useEffect } from 'react';
import { I18nextProvider } from 'react-i18next';
import { Navigate, Route, Routes } from 'react-router-dom';
import Arrivals from 'screens/arrivals/Arrivals';
import Departures from 'screens/departures/Departures';
import { useActions, useTypedSelector } from './app/hooks';
import i18n from './i18n';
import LoaderPage from 'ui/loader-page/LoaderPage';
import { getSelectedDateSelector } from 'store/flights/selectors';
import NotFound from 'screens/not-found/NotFound';

const Layout = React.lazy(() => import('components/layout/Layout'));

const App: FC = () => {
  const selectedDate = useTypedSelector(getSelectedDateSelector);
  const { fetchFlights } = useActions();

  useEffect(() => {
    fetchFlights(selectedDate);
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
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </I18nextProvider>
  );
}

export default App;
