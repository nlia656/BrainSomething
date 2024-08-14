import React from "react";
import './HackPuzzle.css';

const PuzzleCard = ({cardColour, shapeColour}) => {

    return (
        <div className="puzzle-card" style={{backgroundColor: cardColour}}>
            <div className="triangle" style={{borderBottomColor: shapeColour}}></div>
        </div>

    )

}

export default PuzzleCard;