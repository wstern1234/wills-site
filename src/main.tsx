import React from 'react';
import ReactDOM from 'react-dom/client';
import WillsSite from './components/wills-site.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <WillsSite config={CONFIG} />
  </React.StrictMode>,
);
