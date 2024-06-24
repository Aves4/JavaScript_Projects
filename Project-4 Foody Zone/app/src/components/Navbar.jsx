/*import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <>
      <nav className={styles.topContainer}>
        <div className={styles.logoContainer}>
          <img src="/FoodyZone.svg" alt="logo" />
          <input type="search" placeholder="Select Food..." />
        </div>
        <div className={styles.btnContainer}>
          <button>All</button>
          <button>BreakFast</button>
          <button>Lunch</button>
          <button>Dinner</button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;*/

// import styles from "./Navbar.module.css";

// const Navbar = ({ setUserQuery, setSelectButton }) => {
//   const handleUserInput = (e) => {
//     const inputValue = e.target.value;
//     console.log(e.target.value);
//     setUserQuery(inputValue);
//   };
//   const handleButtonClick = (type) => () => {
//     setSelectButton(type);
//   };
//   return (
//     <nav className={styles.topContainer}>
//       <div className={styles.logoContainer}>
//         <img src="/FoodyZone.svg" alt="logo" className={styles.logo} />
//         <input
//           type="search"
//           placeholder="Select Food..."
//           className={styles.searchInput}
//           onChange={handleUserInput}
//         />
//       </div>
//       <div className={styles.btnContainer}>
//         <button onClick={handleButtonClick("All")}>All</button>
//         <button onClick={handleButtonClick("Breakfast")}>Breakfast</button>
//         <button onClick={handleButtonClick("Lunch")}>Lunch</button>
//         <button onClick={handleButtonClick("Dinner")}>Dinner</button>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import { useContext } from "react";
import { FoodContext } from "./store/FoodProvider";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const { setUserQuery, setSelectButton } = useContext(FoodContext);

  const handleUserInput = (e) => {
    const inputValue = e.target.value;
    setUserQuery(inputValue);
  };

  const handleButtonClick = (type) => () => {
    setSelectButton(type);
  };

  return (
    <nav className={styles.topContainer}>
      <div className={styles.logoContainer}>
        <img src="/FoodyZone.svg" alt="logo" className={styles.logo} />
        <input
          type="search"
          placeholder="Select Food..."
          className={styles.searchInput}
          onChange={handleUserInput}
        />
      </div>
      <div className={styles.btnContainer}>
        <button onClick={handleButtonClick("All")}>All</button>
        <button onClick={handleButtonClick("Breakfast")}>Breakfast</button>
        <button onClick={handleButtonClick("Lunch")}>Lunch</button>
        <button onClick={handleButtonClick("Dinner")}>Dinner</button>
      </div>
    </nav>
  );
};

export default Navbar;
