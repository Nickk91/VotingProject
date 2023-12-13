import React from "react";
import data from "../data/candidates";
import "../styles/genrealpagestyling.css";
import "../styles/votingpagestyle.css";
import { useState } from "react";

const VotingPage = () => {
  const [pikachuVotes, setPikachuVotes] = useState(data[0].amount);
  const [BulbasaurVotes, setBulbasaurVotes] = useState(data[1].amount);
  const [Charmander, setCharmanderVotes] = useState(data[2].amount);
  const [Squirtle, setSquirtleVotes] = useState(data[3].amount);

  const handleClick = (candidate) => {
    const updatedData = data.map((c) =>
      c.name === candidate.name ? { ...c, amount: c.amount + 1 } : c
    );

    if (!user.hasVoted) {
      switch (candidate.name) {
        case "Pikachu":
          setPikachuVotes((prevVotes) => prevVotes + 1);
          break;
        case "Bulbasaur":
          setBulbasaurVotes((prevVotes) => prevVotes + 1);
          break;
        case "Charmander":
          setCharmanderVotes((prevVotes) => prevVotes + 1);
          break;
        case "Squirtle":
          setSquirtleVotes((prevVotes) => prevVotes + 1);
          break;
        default:
          break;
      }

      localStorage.setItem("data", JSON.stringify(updatedData));

      user.hasVoted = true;
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      console.log("User has already voted!");
    }
  };
  return (
    <div className="votingpage page">
      <div className="cards-container">
        {data.map((candidate, index) => (
          <div className="card-container" key={index}>
            <img src={candidate.image} alt="${candidate.name} photo" />
            <h3>Party: {candidate.name}</h3>
            <br />
            <p>Amount of votes: {candidate.amount}</p>
            <br />
            <button
              key={candidate.name}
              onClick={() => {
                handleClick(candidate);
              }}
            >
              Vote for{" "}
              <span className={`${candidate.name} tag`}>{candidate.name}</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VotingPage;
