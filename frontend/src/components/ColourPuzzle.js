import "./HackPuzzle.css";
import HackPuzzle from "./HackPuzzle";
import OrderCards from "./OrderCards";
import React, {useState, useEffect} from 'react';
import ColourPuzzleHelper from './ColourPuzzleHelper';
import { Link } from "react-router-dom";

const PUZZLE_DISPLAY_TIME = 5000;

const ColourPuzzle = () => {
    const [showOrderCards, setShowOrderCards] = useState(true);
    const [timeOver, setTimeOver] = useState(false);

    const helper = new ColourPuzzleHelper();

    const randomOrderArray = helper.getRandomOrderArray();
    // timer for the initial order of the puzzle, should be new order everytime the game is played.
    useEffect(() => {
        // wait 3 seconds, then show the puzzle and start the 5-second timer
        const hideOrderCardsTimer = setTimeout(() => {
            setShowOrderCards(false);

            // hide the puzzle after 5 seconds
            helper.startTimer(PUZZLE_DISPLAY_TIME / 1000, () => {
                setShowOrderCards(true);
                setTimeOver(true);
            });
        }, 3000);

        // clean up timers when the component unmounts
        return () => {
            clearTimeout(hideOrderCardsTimer);
        };
    }, []);
    
    const restartGame = () => {
        window.location.reload()
    }

    if (timeOver) {
        return(
            <div className="end-screen">
                <div className="end-text">Time ran out. You lost.</div>
                <button onClick={restartGame} className="restart-button">Play again</button>
                <Link to="/colour-puzzle" className="restart-button">
                    <div className="info-text">Instructions</div>
                </Link>
            </div>
        )
    }

    if (showOrderCards) {
        return (
            <OrderCards
                first={randomOrderArray[0]}
                second={randomOrderArray[1]}
                third={randomOrderArray[2]}
                fourth={randomOrderArray[3]}
            />
        );
    }

    return <HackPuzzle />;
};

export default ColourPuzzle;