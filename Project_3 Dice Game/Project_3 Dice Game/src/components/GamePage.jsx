/*import { useState } from "react";
import styles from "./GamePage.module.css";
import GameButtons from "./GameButtons";
import Rules from "./Rules";

const GamePage = () => {
  const [score, setScore] = useState(0);
  const [rules, setrules] = useState(false);
  const [randomNumber, setRandomNumber] = useState(1);
  const [isClicked, setIsClicked] = useState(false);
  const [valueWhenClicked, setValueWhenClicked] = useState(null);
  console.log(isClicked);

  const validateInputs = () => {
    if (isClicked) {
      const min = 1;
      const max = 6;
      const newRandomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
      setRandomNumber(newRandomNumber);

      if (valueWhenClicked === randomNumber) {
        setScore(score + randomNumber);
      }
      setIsClicked(false);
    }
  };

  const getValueWhenClicked = (value) => {
    setValueWhenClicked(value);
  };

  const numArr = [1, 2, 3, 4, 5, 6];

  return (
    <div>
      <div className={styles.scoreButtonContainer}>
        <div className={styles.scores}>
          <h1>{score}</h1>
          <h2>Score</h2>
        </div>
        <div>
          {numArr.map((value, index) => (
            <GameButtons
              number={value}
              key={index}
              isClicked={isClicked}
              setIsClicked={setIsClicked}
              getValueWhenClicked={getValueWhenClicked}
            ></GameButtons>
          ))}

          <h2>SELECT NUMBER</h2>
        </div>
      </div>

      <div className={styles.diceContainer}>
        <img
          src={`images/dice_${randomNumber}.png`}
          alt="single dice"
          onClick={validateInputs}
        />
        <p>Click on Dice to Roll</p>
        <div>
          <button className={styles.buttonResetStore}>Reset Score</button>
        </div>
        <button
          className={styles.buttonShowRules}
          onClick={() => setrules(!rules)}
        >
          Show Rules
        </button>
      </div>
      {rules && <Rules />}
    </div>
  );
};

export default GamePage;*/

/*import { useState } from "react";
import styles from "./GamePage.module.css";
import GameButtons from "./GameButtons";
import Rules from "./Rules";

const GamePage = () => {
  const [score, setScore] = useState(0);
  const [rules, setrules] = useState(false);
  const [randomNumber, setRandomNumber] = useState(1);
  const [isClicked, setIsClicked] = useState(false);
  const [valueWhenClicked, setValueWhenClicked] = useState(null);
  console.log(isClicked);

  const validateInputs = () => {
    if (isClicked) {
      const min = 1;
      const max = 6;
      const newRandomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

      setRandomNumber(newRandomNumber);

      // Use a callback to ensure the score is updated after the state has been set
      setTimeout(() => {
        if (valueWhenClicked === newRandomNumber) {
          setScore(score + newRandomNumber);
        }
        setIsClicked(false);
      }, 0);
    }
  };

  const getValueWhenClicked = (value) => {
    setValueWhenClicked(value);
  };

  const numArr = [1, 2, 3, 4, 5, 6];

  return (
    <div>
      <div className={styles.scoreButtonContainer}>
        <div className={styles.scores}>
          <h1>{score}</h1>
          <h2>Score</h2>
        </div>
        <div>
          {numArr.map((value, index) => (
            <GameButtons
              number={value}
              key={index}
              isClicked={isClicked}
              setIsClicked={setIsClicked}
              getValueWhenClicked={getValueWhenClicked}
            ></GameButtons>
          ))}

          <h2>SELECT NUMBER</h2>
        </div>
      </div>

      <div className={styles.diceContainer}>
        <img
          src={`images/dice_${randomNumber}.png`}
          alt="single dice"
          onClick={validateInputs}
        />
        <p>Click on Dice to Roll</p>
        <div>
          <button
            className={styles.buttonResetStore}
            onClick={() => setScore(0)}
          >
            Reset Score
          </button>
        </div>
        <button
          className={styles.buttonShowRules}
          onClick={() => setrules(!rules)}
        >
          Show Rules
        </button>
      </div>
      {rules && <Rules />}
    </div>
  );
};

export default GamePage;*/

import { useState } from "react";
import styles from "./GamePage.module.css";
import GameButtons from "./GameButtons";
import Rules from "./Rules";

const GamePage = () => {
  const [score, setScore] = useState(0);
  const [rules, setRules] = useState(false);
  const [randomNumber, setRandomNumber] = useState(1);
  const [isClicked, setIsClicked] = useState(false);
  const [activeButton, setActiveButton] = useState(null);

  const [errorMessage, setErrorMessage] = useState("");

  console.log(isClicked);

  const validateInputs = () => {
    if (isClicked) {
      const min = 1;
      const max = 6;
      const newRandomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

      setRandomNumber(newRandomNumber);

      // Use a callback to ensure the score is updated after the state has been set
      setTimeout(() => {
        if (activeButton === newRandomNumber) {
          setScore(score + newRandomNumber);
        } else {
          setScore(score - newRandomNumber);
        }
        setIsClicked(false);
      }, 0);
    } else {
      setErrorMessage("Please select a Number First !");
    }
  };

  const handleButtonClick = (value) => {
    setIsClicked(true);
    setErrorMessage("");
    setActiveButton(value);
  };

  const numArr = [1, 2, 3, 4, 5, 6];

  return (
    <div>
      <div className={styles.scoreButtonContainer}>
        <div className={styles.scores}>
          <h1>{score}</h1>
          <h2>Score</h2>
        </div>
        <div>
          <div className={styles.errorMessageButtonsContainer}>
            {errorMessage && errorMessage}
            <div>
              {numArr.map((value) => (
                <GameButtons
                  number={value}
                  key={value}
                  activeButton={activeButton}
                  handleButtonClick={handleButtonClick}
                />
              ))}
            </div>
            <h2>SELECT NUMBER</h2>
          </div>
        </div>
      </div>

      <div className={styles.diceContainer}>
        <img
          src={`images/dice_${randomNumber}.png`}
          alt="single dice"
          onClick={validateInputs}
        />
        <p>Click on Dice to Roll</p>
        <div>
          <button
            className={styles.buttonResetStore}
            onClick={() => setScore(0)}
          >
            Reset Score
          </button>
        </div>
        <button
          className={styles.buttonShowRules}
          onClick={() => setRules(!rules)}
        >
          Show Rules
        </button>
      </div>
      {rules && <Rules />}
    </div>
  );
};

export default GamePage;

// GamePage.jsx

/*----------- STATE MANAGED USING USE REDUCER HOOK--------
import { useReducer } from "react";
import styles from "./GamePage.module.css";
import GameButtons from "./GameButtons";
import Rules from "./Rules";

// Define initial state
const initialState = {
  score: 0,
  rules: false,
  randomNumber: 1,
  isClicked: false,
  activeButton: null,
  errorMessage: "",
};

// Define reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case "SET_IS_CLICKED":
      return { ...state, isClicked: action.payload, errorMessage: "" };
    case "SET_ACTIVE_BUTTON":
      return { ...state, activeButton: action.payload };
    case "ROLL_DICE":
      const newRandomNumber = Math.floor(Math.random() * 6) + 1;
      const newScore =
        state.activeButton === newRandomNumber
          ? state.score + newRandomNumber
          : state.score - newRandomNumber;
      return {
        ...state,
        randomNumber: newRandomNumber,
        score: newScore,
        isClicked: false,
      };
    case "RESET_SCORE":
      return { ...state, score: 0 };
    case "TOGGLE_RULES":
      return { ...state, rules: !state.rules };
    case "SET_ERROR_MESSAGE":
      return { ...state, errorMessage: action.payload };
    default:
      return state;
  }
};

const GamePage = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const validateInputs = () => {
    if (state.isClicked) {
      dispatch({ type: "ROLL_DICE" });
    } else {
      dispatch({
        type: "SET_ERROR_MESSAGE",
        payload: "Please select a Number First!",
      });
    }
  };

  const handleButtonClick = (value) => {
    dispatch({ type: "SET_IS_CLICKED", payload: true });
    dispatch({ type: "SET_ACTIVE_BUTTON", payload: value });
  };

  const numArr = [1, 2, 3, 4, 5, 6];

  return (
    <div>
      <div className={styles.scoreButtonContainer}>
        <div className={styles.scores}>
          <h1>{state.score}</h1>
          <h2>Score</h2>
        </div>
        <div>
          <div className={styles.errorMessageButtonsContainer}>
            {state.errorMessage && state.errorMessage}
            <div>
              {numArr.map((value) => (
                <GameButtons
                  number={value}
                  key={value}
                  activeButton={state.activeButton}
                  handleButtonClick={handleButtonClick}
                />
              ))}
            </div>
            <h2>SELECT NUMBER</h2>
          </div>
        </div>
      </div>

      <div className={styles.diceContainer}>
        <img
          src={`images/dice_${state.randomNumber}.png`}
          alt="single dice"
          onClick={validateInputs}
        />
        <p>Click on Dice to Roll</p>
        <div>
          <button
            className={styles.buttonResetStore}
            onClick={() => dispatch({ type: "RESET_SCORE" })}
          >
            Reset Score
          </button>
        </div>
        <button
          className={styles.buttonShowRules}
          onClick={() => dispatch({ type: "TOGGLE_RULES" })}
        >
          Show Rules
        </button>
      </div>
      {state.rules && <Rules />}
    </div>
  );
};

export default GamePage;*/
