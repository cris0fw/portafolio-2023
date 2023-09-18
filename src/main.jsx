import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './style/global.scss';
import { ThemeProvider } from './context/ThemeContext.jsx';
import { LangProvider } from './context/LanguajeContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LangProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </LangProvider>
  </React.StrictMode>
);
