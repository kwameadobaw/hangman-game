import React from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";

const HomePage = () => {
    return (
        <div className="homepage">
            <h1>Welcome to the Hangman Game Portal</h1>
            <p>Select a category to start playing:</p>
            <div className="categories">
                <Link to="/football-teams" className="category">
                    Football Teams
                </Link>
                <Link to="/movie-titles" className="category">
                    Movie Titles
                </Link>
                <Link to="/computing" className="category">
                    Computing
                </Link>
                <Link to="/superheroes" className="category">
                    Superheroes
                </Link>
                <Link to="/celebrities" className="category">
                    Celebrities
                </Link>
                <Link to="/countries" className="category">
                    Countries
                </Link>
                <Link to="/mystery" className="category">
                    Mystery
                </Link>
            </div>
        </div>
    );
};

export default HomePage;
