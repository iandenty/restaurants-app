import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const root = document.getElementById('root');

ReactDOM.render(<App />, root);
registerServiceWorker();

// Set CSS variables
const cssConfig = {
  maxWidth: 1126
};

root.style.setProperty("--spring", `${cssConfig.maxWidth}px`);
