import React, { useState, lazy, Suspense } from 'react';
import SearchParams from './SearchParams';
import { Router } from '@reach/router';
import ThemeContext from './ThemeContext';
import NavBar from './NavBar';

const Details = lazy(() => import('./Details'));

const App = () => {
  const themeHook = useState('darkblue');
  return (
    <ThemeContext.Provider value={themeHook}>
      <div>
        <NavBar />
        <Suspense fallback={<h1>loading...</h1>}>
          <Router>
            <SearchParams path="/" />
            <Details path="/details/:id" />
          </Router>
        </Suspense>
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
