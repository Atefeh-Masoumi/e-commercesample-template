import React from 'react';
import {createRoot} from 'react-dom/client';
import {StrictMode} from 'react';
import ReactDOM from 'react-dom';
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import './index.css';
import App from './App';

ReactDOM.render( // 👈️ deprecated starting React 18
  
    <App />,
  document.getElementById('root'),
);

