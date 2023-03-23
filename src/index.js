import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import configureStore from './store';
import {Provider} from 'react-redux';

const store = configureStore()

if (process.env.NODE_ENV !== "production") {
  window.store = store
}

function Root() {
  return (
      <BrowserRouter>
        <App />
      </BrowserRouter>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Root />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);