import React, { useEffect, useState } from 'react';
import './HackPuzzle.css';
import PuzzleCard from "../components/PuzzleCard"

const HackPuzzle  = () =>{
    const SHAPES = ["circle", "triangle", "square", "rectangle"]
    //const cards = []
    const COLOURS = ["white", "black", "red", "blue","green", "yellow", "pink"]
    //these dummy arrays should be replaced once we have the ranomiser for these
    const dummyCardColours = ["gray", "purple", "blue", "#067910"];
    const dummyShapeColours = ["green", "white", "black", "red"];
    const dummyShapeType = ["triangle", "rectangle", "square", "circle"];
    const dummyShapeText = ["square", "triangle", "circle", "rectangle"];
    const dummyColourText = ["red", "green", "blue", "purple"];
    const dummyNumber = ["1","2","3","4"];
    const dummyNumberColours = ["purple", "yellow", "white", "blue"];
    

    return (
        <div className="card-collection">
            <PuzzleCard 
                cardColour={dummyCardColours[0]}
                shapeColour={dummyShapeColours[0]}
                shapeType={dummyShapeType[0]}
                shapeText={dummyShapeText[0]}
                colourText={dummyColourText[0]}
                number={dummyNumber[0]}
                numberColour={dummyNumberColours[0]}
            />
            <PuzzleCard 
                cardColour={dummyCardColours[1]}
                shapeColour={dummyShapeColours[1]}
                shapeType={dummyShapeType[1]}
                shapeText={dummyShapeText[1]}
                colourText={dummyColourText[1]}
                number={dummyNumber[1]}
                numberColour={dummyNumberColours[1]}
            />
            <PuzzleCard 
                cardColour={dummyCardColours[2]}
                shapeColour={dummyShapeColours[2]}
                shapeType={dummyShapeType[2]}
                shapeText={dummyShapeText[2]}
                colourText={dummyColourText[2]}
                number={dummyNumber[2]}
                numberColour={dummyNumberColours[2]}
            />
            <PuzzleCard 
                cardColour={dummyCardColours[3]}
                shapeColour={dummyShapeColours[3]}
                shapeType={dummyShapeType[3]}
                shapeText={dummyShapeText[3]}
                colourText={dummyColourText[3]}
                number={dummyNumber[3]}
                numberColour={dummyNumberColours[3]}
            />
        </div>
    )
}

export default HackPuzzle;