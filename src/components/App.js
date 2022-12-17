import { Routes, Route } from 'react-router-dom';

import './App.css';
import Header from "./Header";
import Home from "./Home";
import Jay from "./Jay";
import JayAbout from "./JayAbout";
import JayRecordings from "./JayRecordings";
import Jacquie from "./Jacquie";
import JacquieAbout from "./JacquieAbout";
import JacquieResume from "./JacquieResume";
import Jeremy from "./Jeremy";
import Jess from "./Jess";

function App() {
  return (
      <div className="app">
        <Header />
            <Routes>
              <Route path="/" element={<Home title="Welcome to Valatka.com" />} />
              <Route path="jay" element={<Jay />}>
                <Route path="recordings" element={<JayRecordings />} />
                <Route index element={<JayAbout />} />
              </Route>
              <Route path="jacquie" element={<Jacquie />}>
                <Route path="resume" element={<JacquieResume />} />
                <Route index element={<JacquieAbout />} />
              </Route>
              <Route path="jeremy" element={<Jeremy />} />
              <Route path="jess" element={<Jess />} />
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
