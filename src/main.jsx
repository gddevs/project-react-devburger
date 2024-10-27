import React from 'react';
import ReactDOM from 'react-dom/client';

import { Login } from './containers/Login';
import globalStyles from './styles/globalStyles';

ReactDOM.createRoot(document.getElementById('root')).render(
  <ReactStrictMode>
    <Login />
    // eslint-disable-next-line react/jsx-no-undef
    <GlobalStyles />
  </ReactStrictMode>,
);
