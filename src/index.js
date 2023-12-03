import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import LogIn from './chapter_11/LogIn';
import MainPage from './chapter_15/MainPage';

const rootNode = document.getElementById('root');
const root = ReactDOM.createRoot(rootNode);

  root.render(
    <MainPage />
  );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
