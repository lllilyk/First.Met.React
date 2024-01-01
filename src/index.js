import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import ShowPage from './practice_09/ShowPage';
import Calculator from './chapter_12/Calculator';
import LoginLogout from './practice_09/ElementVariable';
const rootNode = document.getElementById('root');
const root = ReactDOM.createRoot(rootNode);

  root.render(
    <LoginLogout />
  );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
