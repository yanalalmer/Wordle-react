import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// context
import { StateProvider } from './contexts/state';
import { UtilsProvider } from './contexts/utils';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StateProvider>
      <UtilsProvider>
        <App />
      </UtilsProvider>
    </StateProvider>
  </React.StrictMode>
);
