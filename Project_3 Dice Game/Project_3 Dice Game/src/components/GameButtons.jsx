/*import { useState } from "react";
import styles from "./GameButtons.module.css";

const GameButtons = ({
  number,
  isClicked,
  setIsClicked,
  getValueWhenClicked,
}) => {
  const [click, setClick] = useState(false);
  const [activeButton, setActiveButton] = useState(null);

  const handleActiveButton = (buttonNumber) => {
    setActiveButton(buttonNumber);
  };
  return (
    <>
      <button
        onClick={() => {
          setClick(!click);
          setIsClicked(!click);
          getValueWhenClicked(number);
          handleActiveButton(number);
        }}
        className={`${styles.gameNumberButtons} ${
          activeButton === number ? styles.isClicked : ""
        }`}
      >
        {number}
      </button>
    </>
  );
};

export default GameButtons;*/

import styles from "./GameButtons.module.css";

const GameButtons = ({ number, activeButton, handleButtonClick }) => {
  return (
    <button
      onClick={() => handleButtonClick(number)}
      className={`${styles.gameNumberButtons} ${
        activeButton === number ? styles.isClicked : ""
      }`}
    >
      {number}
    </button>
  );
};

export default GameButtons;
