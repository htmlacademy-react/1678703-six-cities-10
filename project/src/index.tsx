import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';

// const Setting = {
//   ERRORS_COUNT: 3,
// };
const quantityOffers = 313;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App quantityOffers={quantityOffers}/>
  </React.StrictMode>,
);
