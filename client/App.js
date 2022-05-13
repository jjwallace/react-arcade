import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import * as serviceWorker from './serviceWorker';

import Home from "./pages/Home";
import Game from "./pages/Game";

//import logo from './logo.svg';
import './App.css';

export default function App() {

  return (
    <Router>
      <Game />
      {/* <Routes>
        <Route path="/" element={<Game />} />
        <Route path="/game" element={<Game />} />
      </Routes> */}
    </Router>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();