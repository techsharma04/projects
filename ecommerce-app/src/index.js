import React from 'react';
import ReactDOM from 'react-dom/client';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import './index.css';
import './styles/Header.css';
import './styles/Navbar.css';
import './styles/StarRating.css';
import './styles/Products.css';
import './styles/Footer.css';
import './styles/SingleProduct.css';
import { store } from './reduxx/store.js'
import { Provider } from 'react-redux'
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
  </React.StrictMode>
);
