import React from "react";
import { Link } from "react-router-dom";

// resources
import dinosaurIcon from "../resources/images/dinosaur.png";
import eyeIcon from "../resources/images/eyeicon.png";
import reactionIcon from "../resources/images/reaction.png"; // Add an icon for the reaction game

// components
const Home = () => {
  return (
      <div className="home">
        <div className="cards-container">
          {/* Card for Game 1 */}
          <div className="card">
            <h3>Dino Jump</h3>
            <img src={dinosaurIcon} alt="Dinosaur" className="card-icon" />
            <p>A fun jumping game</p>
            <Link to="/dino-jump" className="play-link">
              Play Dino Jump
            </Link>
          </div>

          {/* Card for Reaction Game */}
          <div className="card">
            <h3>Reaction Game</h3>
            <img src={reactionIcon} alt="Reaction" className="card-icon" />
            <p>Test your reaction speed</p>
            <Link to="/reaction-game" className="play-link">
              Play Reaction Game
            </Link>
          </div>
          {/* Card for colour puzzle */}
        <div className="card">
          <h3>Colour Puzzle</h3>
          <img src={eyeIcon} alt="Eye" className="card-icon" />
          <p>A tricky observation game</p>
          <Link to="/colour-puzzle" className="play-link">
            Play Colour Puzzle
          </Link>
        </div>
        </div>
      </div>
  );
};

export default Home;
