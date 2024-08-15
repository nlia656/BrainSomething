import React from "react";
import './HackPuzzle.css';

const PuzzleCard = ({cardColour, shapeColour, shapeType, shapeText, colourText, number, numberColour}) => {

    return (
        <div className="puzzle-card" style={{backgroundColor: cardColour}}>
            <div className={shapeType} style={{borderBottomColor: shapeType == "triangle" ? shapeColour : "transparent", backgroundColor: shapeType != "triangle" ? shapeColour : "transparent"}}>
                <div className="puzzle-text">{shapeText}</div>
                <div className="number" style={{color: numberColour}}>{number}</div>
                <div className="puzzle-text">{colourText}</div>
            </div>
        </div>

    )

}

export default PuzzleCard;