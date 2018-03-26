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
  maxWidth: 1126,
  colors: {
    primary: '#00CCBC',
    secondary: '#ffffff',
  },
  fontColor: {
    primary: '#2E3333',
    secondary: '#00A396'
  }
};

root.style.setProperty("--spring", `${cssConfig.maxWidth}px`);
root.style.setProperty("--color-primary", cssConfig.colors.primary);
root.style.setProperty("--color-secondary", cssConfig.colors.secondary);
root.style.setProperty("--font-color-primary", cssConfig.fontColor.primary);
root.style.setProperty("--font-color-secondary", cssConfig.fontColor.secondary);
