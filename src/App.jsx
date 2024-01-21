import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Lazy-loaded components
const Home = lazy(() => import('./pages/Home'));
const SignIn = lazy(() => import('./pages/SignIn'));
const Buy = lazy(() => import('./pages/Buy'));
const Sell = lazy(() => import('./pages/Sell'));

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="Home"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <Home />
            </Suspense>
          }
        />
        <Route
          path="SignIn"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <SignIn />
            </Suspense>
          }
        />
        <Route
          path="Buy"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <Buy />
            </Suspense>
          }
        />
        <Route
          path="Sell"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <Sell />
            </Suspense>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
