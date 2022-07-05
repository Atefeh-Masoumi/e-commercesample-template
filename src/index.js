import React from 'react';
import {createRoot} from 'react-dom/client';

import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import './index.css';
import App from './App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  
);

