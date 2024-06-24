// import Navbar from "./components/Navbar";
// import "./App.css";
// import FoodItemsContainer from "./components/FoodItemsContainer";
// import { FoodProvider } from "./components/store/FoodProvider";

// // const App = () => {

// //   return (
// //     <>
// //       <Navbar
// //         userQurey={userQuery}
// //         setUserQuery={setUserQuery}
// //         setSelectButton={setSelectButton}
// //       />
// //       <FoodItemsContainer userQuery={userQuery} selectButton={selectButton} />
// //     </>
// //   );
// // };

// // export default App;

import Navbar from "./components/Navbar";
import "./App.css";
import FoodItemsContainer from "./components/FoodItemsContainer";
import { FoodProvider } from "./components/store/FoodProvider";

const App = () => {
  return (
    <FoodProvider>
      <Navbar />
      <FoodItemsContainer />
    </FoodProvider>
  );
};

export default App;
