import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './HomePage';
import HangmanGame from './HangmanGame';
import FootballTeams from './FootballTeams';
import MovieTitles from './MovieTitles';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/computing" element={<HangmanGame category="Computing" />} />
                    <Route path="/football-teams" element={<FootballTeams />} />
                    <Route path="/movie-titles" element={<MovieTitles />} />
                    <Route path="*" element={<div>Page not found!</div>} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
