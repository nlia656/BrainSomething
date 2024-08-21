import "./HackPuzzle.css";
import React from 'react';
//image resources
import examplePuzzle from "../resources/images/examplepuzzle.png";
import exampleOrder from "../resources/images/exampleorder.png";

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
                <div>You will be first be given a set of number 1 to 4 in random order. Then a set of puzzles will appear with 2 questions. The order will disappear after 3 seconds.</div>
                <div>The answer to shape-text(3) and background-colour(4) is triangle green. From the order, (3) refers to the puzzle indicated with 3 (second from the left), and (4) refers to the rightmost card. Note the numbers in the center of the puzzle serve as just a distraction.</div>
                <button className="start-button" type="button">Start</button>
            </div>
        </div>
    )
}

export default ColourPuzzleInfo;