import styles from "./HomePage.module.css";

const HomePage = ({ setSelectedTab }) => (
  <div className={styles.homePageContainer}>
    <img src="images/dice.png" alt="dice" />
    <div className={styles.textContainer}>
      <h1>DICE GAME</h1>
      <div className={styles.buttonElement}>
        <button
          className={styles.homePageButton}
          onClick={() => setSelectedTab("GamePage")}
        >
          PLAY NOW
        </button>
      </div>
    </div>
  </div>
);

export default HomePage;
