import React from 'react';
import ReactDOM from 'react-dom/client';
import {ThemeProvider} from "styled-components";
import App from './App';

const darkMode = {
    textColor: "Whitesmoke",
    background: "#111",
}

const lightMode = {
    textColor: "#111",
    background: "Whitesmoke"
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <ThemeProvider theme={darkMode}>
          <App />
      </ThemeProvider>
  </React.StrictMode>
);