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
    

    return (
        <div className="card-collection">
            <PuzzleCard 
                cardColour={dummyCardColours[0]}
                shapeColour={dummyShapeColours[0]}
                shapeType={dummyShapeType[0]}
            />
            <PuzzleCard 
                cardColour={dummyCardColours[1]}
                shapeColour={dummyShapeColours[1]}
                shapeType={dummyShapeType[1]}
            />
            <PuzzleCard 
                cardColour={dummyCardColours[2]}
                shapeColour={dummyShapeColours[2]}
                shapeType={dummyShapeType[2]}
            />
            <PuzzleCard 
                cardColour={dummyCardColours[3]}
                shapeColour={dummyShapeColours[3]}
                shapeType={dummyShapeType[3]}
            />
        </div>
    )
}

export default HackPuzzle;