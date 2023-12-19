import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import ConfirmButton2 from './practice_08/ConfirmButton';
const rootNode = document.getElementById('root');
const root = ReactDOM.createRoot(rootNode);

  root.render(
    <ConfirmButton2 />
  );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
