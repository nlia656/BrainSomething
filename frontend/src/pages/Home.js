import React from 'react'

// components
import Game1 from "../components/Game1"
import HackPuzzle from "../components/HackPuzzle"

const Home = () => {
    return (
        <div className="home">
            <div className="workouts">
                {/* Render the minigame component */}
                <HackPuzzle />
            </div>
        </div>
    )
}

export default Home
