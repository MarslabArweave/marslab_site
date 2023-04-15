import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import 'rsuite/dist/rsuite.css';
import './App.css';
import { Home } from './components/Home';

const App = () => {
  return (
    <div id="app">
      <div id="content">
        <Navigation />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </main>
      </div>
    </div>
  );
};

const HomePage = (props) => {
  return (
    <>
      <Home />
    </>
  );
};

export default App;