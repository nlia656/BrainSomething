import "./HackPuzzle.css";
import React from 'react';
//image resources
import examplePuzzle from "../resources/images/examplepuzzle.png";
import exampleOrder from "../resources/images/exampleorder.png";
import { Link } from "react-router-dom";

const ColourPuzzleInfo = () => {

    return (
        <div className="information-slides">
            <div className="example-layout">
                <img src={exampleOrder} alt="examplePuzzle" className="example-image"/>
                <div>Order</div>
                <img src={examplePuzzle} alt="examplePuzzle" className="example-image"/>
                <div>Puzzle</div>
            </div>
            <div className="example-layout">
                <p>You will be first be given a set of number 1 to 4 in random order. Then a set of puzzles will appear with 2 questions. The order will disappear after 3 seconds.</p>
                <p>The answer to shape-text(3) and background-colour(4) is triangle green. From the order, (3) refers to the puzzle indicated with 3 (second from the left), and (4) refers to the rightmost card. Note the numbers in the center of the puzzle serve as just a distraction.</p>
                <Link to="/colour-puzzle/start" className="play-link">
                    Play
                </Link>
            </div>
        </div>
    )
}

export default ColourPuzzleInfo;