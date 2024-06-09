import React, { useState } from "react";
import { candidates } from "../../data";

import "./VotingCard.css";

const VotingCard = ({ id, img, name, index }) => {
  const [vote, setVote] = useState(new Array(candidates.length).fill(0));
  const [isVoted, setIsVoted] = useState(false);

  const handleVoteButton = () => {
    if (!isVoted) {
      const newVotes = [...vote];
      newVotes[index] += 1;
      setVote(newVotes);
      setIsVoted(true);
    } else {
      alert("You can only vote once.");
    }
  };

  return (
    <div className="voting-card" key={id}>
      <h4>The vote is {vote[index]}</h4>
      <img src={img} alt={name} />
      <h3>{name}</h3>
      <button name={name} onClick={handleVoteButton}>
        Vote for Him
      </button>
    </div>
  );
};

export default VotingCard;
