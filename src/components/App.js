import { Routes, Route } from 'react-router-dom';

import './App.css';
import Header from "./Header";
import Home from "./Home";
import Jay from "./Jay";
import Jacquie from "./Jacquie";
import Jeremy from "./Jeremy";
import Jessica from "./Jessica";

function App() {
  return (
      <div className="app">
        <Header />
            <Routes>
              <Route path="/" element={<Home title="Welcome to Valatka.com" />} />
              <Route path="jay" element={<Jay />} />
              <Route path="jacquie" element={<Jacquie />} />
              <Route path="jeremy" element={<Jeremy />} />
              <Route path="jessica" element={<Jessica />} />
              <Route path="*" element={
                <div className="tc ph5 lh-copy">
                  <h1 className="f1 f-headline-l code mb3 fw9 dib tracked-tight light-purple">404</h1>
                  <h1 className="not-found">Sorry, we can't find the page you are looking for.</h1>
                </div>
              } />
            </Routes>
        <footer className="container">
          &copy;2000 - 2022 Valatka.com | All rights reserved. | Site Design by Jay!
        </footer>
      </div>
  );
}

export default App;
