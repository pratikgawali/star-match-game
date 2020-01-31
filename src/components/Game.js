import React, { useState, useEffect } from "react";
import PlayButton from "./PlayButton";
import mathUtils from "./../math-utils";
import StarsDisplay from "./StarsDisplay";
import PlayAgain from "./PlayAgain";
import Timer from "./Timer";

const useGameState = () => {
  const [availableNumbers, setAvailableNumbers] = useState(
    mathUtils.range(1, 9)
  );
  const [starsCount, setStarsCount] = useState(
    mathUtils.random(availableNumbers)
  );
  const [candidateNumbers, setCandidateNumbers] = useState([]);
  const [secondsLeft, setSecondsLeft] = useState(10);

  useEffect(() => {
    if (secondsLeft > 0 && availableNumbers.length > 0) {
      const timerId = setTimeout(() => setSecondsLeft(secondsLeft - 1), 1000);
      return () => clearTimeout(timerId);
    }
  });

  const setGameState = newCandidateNumbers => {
    if (mathUtils.sum(newCandidateNumbers) === starsCount) {
      const newAvailableNumbers = availableNumbers.filter(
        n => !newCandidateNumbers.includes(n)
      );
      setStarsCount(mathUtils.random(newAvailableNumbers));
      setAvailableNumbers(newAvailableNumbers);
      setCandidateNumbers([]);
    } else {
      setCandidateNumbers(newCandidateNumbers);
    }
  };

  return {
    starsCount,
    availableNumbers,
    candidateNumbers,
    secondsLeft,
    setGameState
  };
};

const Game = props => {
  const {
    starsCount,
    availableNumbers,
    candidateNumbers,
    secondsLeft,
    setGameState
  } = useGameState();

  const gameStatus = availableNumbers.length === 0 ? "won" : secondsLeft === 0 ? "lost" : "active";

  const candidateAreWrong = mathUtils.sum(candidateNumbers) > starsCount;

  const numberStatus = number => {
    if (!availableNumbers.includes(number)) {
      return "used";
    }

    if (candidateNumbers.includes(number)) {
      return candidateAreWrong ? "wrong" : "candidate";
    }

    return "available";
  };

  const onNumberClick = (number, currStatus) => {
    if (currStatus === "used" || secondsLeft === 0) {
      return;
    }

    const newCandidateNumbers =
      currStatus === "available"
        ? candidateNumbers.concat(number)
        : candidateNumbers.filter(n => n !== number);

    setGameState(newCandidateNumbers);
  };

  return (
    <div style={{ maxWidth: "500px", margin: "0 auto" }}>
      <div style={{ color: "#666", margin: "20px", textAlign: "center" }}>
        Pick 1 or more numbers that sum to the number of stars
      </div>
      <div style={{ display: "flex" }}>
        <div
          style={{
            textAlign: "center",
            width: "50%",
            border: "thin solid #ddd"
          }}
        >
          {gameStatus === "active" ? (
            <StarsDisplay count={starsCount} />
          ) : (
            <PlayAgain gameStatus={gameStatus} onClick={props.startNewGame} />
          )}
        </div>
        <div
          style={{
            textAlign: "center",
            width: "50%",
            border: "thin solid #ddd",
            padding: "10px"
          }}
        >
          {mathUtils.range(1, 9).map(number => (
            <PlayButton
              key={number}
              value={number}
              status={numberStatus(number)}
              onClick={onNumberClick}
            />
          ))}
        </div>
      </div>
      <Timer timeRemaining={secondsLeft}/>
    </div>
  );
};

export default Game;