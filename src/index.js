import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Tournaments from './routes/tournaments.js';
import Odds from './routes/Odds.js';
import MatchesRoute from './routes/matches.js';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
/* Thin scrollbar for Webkit browsers */
::-webkit-scrollbar {
    width: 5px;  /* for vertical scrollbars */
    height: 5px; /* for horizontal scrollbars */
}

::-webkit-scrollbar-thumb {
    background-color: #888; /* Change to any color; this is the thumb of the scrollbar */
}

::-webkit-scrollbar-thumb:hover {
    background-color: #555; /* Change color when hovering over the scrollbar thumb */
}
`


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <BrowserRouter basename="/react-app">
      <Routes>
        <Route path='/matches' element={ <MatchesRoute /> }/>
        <Route path='/tournaments' element={ <Tournaments /> }/>
        <Route path='/odds' element={ <Odds /> } />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
