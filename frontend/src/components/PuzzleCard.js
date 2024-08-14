import React from "react";
import './HackPuzzle.css';

const PuzzleCard = ({cardColour, shapeColour, shapeType}) => {

    return (
        <div className="puzzle-card" style={{backgroundColor: cardColour}}>
            <div className={shapeType} style={{borderBottomColor: shapeType == "triangle" ? shapeColour : "transparent", backgroundColor: shapeType != "triangle" ? shapeColour : "transparent"}}>
            </div>
        </div>

    )

}

export default PuzzleCard;