import React from "react";
import { Link } from "react-router-dom";

//resources
import dinosaurIcon from "../resources/images/dinosaur.png";
import eyeIcon from "../resources/images/eyeicon.png";


const Home = () => {
  return (
    <div className="home">
      <div className="cards-container">
        {/* Card for Game 1 */}
        <div className="card">
          <h3>Game 1</h3>
          <img src={dinosaurIcon} alt="Dinosaur" className="card-icon" />
          <p>A fun jumping game</p>
          <Link to="/ColourPuzzle" className="play-link">
            Play Game 1
          </Link>
        </div>
        <div className="card">
          <h3>Colour Puzzle</h3>
          <img src={eyeIcon} alt="Eye" className="card-icon" />
          <p>A tricky observation game</p>
          <Link to="/colour-puzzle" className="play-link">
            Play
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
