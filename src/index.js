import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import ShowPage from './practice_09/ShowPage';
import AttendanceBook from './chapter_10/AttendanceBook';
const rootNode = document.getElementById('root');
const root = ReactDOM.createRoot(rootNode);

  root.render(
    <AttendanceBook />
  );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
