import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Music from './pages/music/Music';
import Navigation from './navigation/Navigation';
import './App.css'

function App() {
  return (
    <Router>
      <div className="App-margin"/>
      <Navigation/>
      <div className="App-margin"/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/music" element={<Music/>}/>
      </Routes>
    </Router>
    
  );
}

export default App;
