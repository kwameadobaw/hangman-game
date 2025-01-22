import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Import Link from React Router
import HangmanCanvas from "./HangmanCanvas";
import "./HangmanGame.css";
import wordsData from "./celebrities.json"; // Import JSON data

const Celebrities = () => {
    const [word, setWord] = useState("");
    const [guessedLetters, setGuessedLetters] = useState([]);
    const [mistakes, setMistakes] = useState(0);

    useEffect(() => {
        resetGame();
    }, []);

    useEffect(() => {
        const handleKeyPress = (event) => {
            const letter = event.key.toUpperCase();
            if (/^[A-Z]$/.test(letter)) {  // Only proceed if letter is A-Z
                handleGuess(letter);
            }
        };

        // Add event listener for keydown events
        window.addEventListener("keydown", handleKeyPress);

        // Cleanup event listener on component unmount
        return () => {
            window.removeEventListener("keydown", handleKeyPress);
        };
    }, [guessedLetters, mistakes]);

    const chooseRandomWord = () => {
        // Choose randomly between words and phrases
        const allWords = [...wordsData.words, ...wordsData.phrases];
        const randomIndex = Math.floor(Math.random() * allWords.length);
        return allWords[randomIndex].toUpperCase();
    };

    const handleGuess = (letter) => {
        if (!guessedLetters.includes(letter)) {
            setGuessedLetters([...guessedLetters, letter]);
            if (!word.includes(letter)) {
                setMistakes(mistakes + 1);
            }
        }
    };

    const isGameWon = () => {
        return word
            .split("")
            .every((letter) => guessedLetters.includes(letter) || letter === " ");
    };

    const isGameLost = () => {
        return mistakes >= 6;
    };

    const resetGame = () => {
        setWord(chooseRandomWord());
        setGuessedLetters([]);
        setMistakes(0);
    };

    return (
        <div className="hangman-container">
            <h1>Celebrities</h1>
            <h5>
                Hangman is a word-guessing game. Start a new game, guess letters
                to reveal the word, and avoid drawing the hangman by making
                incorrect guesses. Win by guessing the word before the hangman
                is complete. You have 6 lives. Have fun!
            </h5>
            <HangmanCanvas mistakes={mistakes} />
            <div className="word-display">
                {word.split("").map((letter, index) => (
                    <span key={index} className="letter">
                        {guessedLetters.includes(letter) || letter === " " ? letter : "_"}
                    </span>
                ))}
            </div>
            <div className="keyboard">
                {Array.from(Array(26)).map((_, index) => (
                    <button
                        key={index}
                        onClick={() =>
                            handleGuess(String.fromCharCode(65 + index))
                        }
                        disabled={guessedLetters.includes(
                            String.fromCharCode(65 + index)
                        )}
                    >
                        {String.fromCharCode(65 + index)}
                    </button>
                ))}
            </div>
            {isGameWon() && <p className="result-message">You won!</p>}
            {isGameLost() && (
                <p className="result-message">You lost! The word was: {word}</p>
            )}
            <button className="new-game-button" onClick={resetGame}>
                New Game
            </button>
            <Link to="/" className="home-button">
                Go to Homepage
            </Link>
        </div>
    );
};

export default Celebrities;