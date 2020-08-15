import React, { useState, lazy, Suspense } from 'react';
import { render } from 'react-dom';
import { Router } from '@reach/router';
import NavBar from './NavBar';
import ThemeContext from './ThemeContext';

const Details = lazy(() => import('./Details'));
const SearchParams = lazy(() => import('./SearchParams'));

const App = () => {
  const themeHook = useState('rebeccapurple');

  return (
    <React.StrictMode>
      <ThemeContext.Provider value={themeHook}>
        <div>
          <NavBar />
          <Suspense fallback={<h1>loading route...</h1>}>
            <Router>
              <SearchParams path="/" />
              <Details path="/details/:id" />
            </Router>
          </Suspense>
        </div>
      </ThemeContext.Provider>
    </React.StrictMode>
  );
};

render(<App />, document.getElementById('root'));
