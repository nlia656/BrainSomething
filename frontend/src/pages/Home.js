import React from 'react'

// components
import Game1 from "../components/Game1"
import ColourPuzzle from "../components/ColourPuzzle"

const Home = () => {
    return (
        <div className="home">
            <div className="workouts">
                {/* Render the minigame component */}
                <ColourPuzzle/>
            </div>
        </div>
    )
}

export default Home
