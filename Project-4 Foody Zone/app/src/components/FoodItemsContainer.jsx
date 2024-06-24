/*import { useEffect, useState } from "react";
import styles from "./FoodItemsContainer.module.css";
import FoodContainer from "./FoodContainer";

const FoodItemsContainer = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState("");
  const BASE_URL = "http://localhost:9000";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(BASE_URL);

        if (!response.ok) {
          setError(`HTTP error! status: ${response.status}`);
          return;
        }

        const data = await response.json();
        setData(data);
        console.log(data);
      } catch (error) {
        setError("Unable to Fetch Data");
      }
    };

    fetchData();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.foodItemsBgContainer}>
      {data.map((foodItem) => (
        <FoodContainer key={foodItem.name} foodItem={foodItem} url={BASE_URL} />
      ))}
    </div>
  );
};

export default FoodItemsContainer;*/

// import { useEffect, useState } from "react";
// import styles from "./FoodItemsContainer.module.css";
// import FoodContainer from "./FoodContainer";

// const FoodItemsContainer = ({ userQuery, selectButton }) => {
//   const [data, setData] = useState(null);
//   const [error, setError] = useState("");
//   const BASE_URL = "http://localhost:9000";

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch(BASE_URL);

//         if (!response.ok) {
//           setError(`HTTP error! status: ${response.status}`);
//           return;
//         }

//         const data = await response.json();
//         setData(data);
//       } catch (error) {
//         setError("Unable to Fetch Data");
//       }
//     };

//     fetchData();
//   }, []);

//   if (error) {
//     return <div className={styles.error}>{error}</div>;
//   }

//   if (!data) {
//     return <div className={styles.loading}>Loading...</div>;
//   }

//   let filteredData = data;
//   if (userQuery) {
//     filteredData = filteredData.filter((foodItem) =>
//       foodItem.name.toLowerCase().includes(userQuery.toLowerCase())
//     );
//   }
//   if (selectButton && selectButton !== "All") {
//     filteredData = filteredData.filter(
//       (foodItem) => foodItem.type === selectButton
//     );
//   }

//   return (
//     <div className={styles.foodItemsBgContainer}>
//       {filteredData.map((foodItem) => (
//         <FoodContainer key={foodItem.name} foodItem={foodItem} url={BASE_URL} />
//       ))}
//     </div>
//   );
// };

// export default FoodItemsContainer;

//--------------------------------------------------------------------------------

// import { useEffect, useState } from "react";
// import styles from "./FoodItemsContainer.module.css";
// import FoodContainer from "./FoodContainer";

// const FoodItemsContainer = ({ userQuery, selectButton }) => {
//   const [data, setData] = useState(null);
//   const [error, setError] = useState("");
//   const BASE_URL = "http://localhost:9000";

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch(BASE_URL);

//         if (!response.ok) {
//           setError(`HTTP error! status: ${response.status}`);
//           return;
//         }

//         const data = await response.json();
//         setData(data);
//       } catch (error) {
//         setError("Unable to Fetch Data");
//       }
//     };

//     fetchData();
//   }, []);

//   if (error) {
//     return <div className={styles.error}>{error}</div>;
//   }

//   if (!data) {
//     return <div className={styles.loading}>Loading...</div>;
//   }

//   // Filter data based on the search query and selected type
//   let filteredData = data;
//   if (userQuery) {
//     filteredData = filteredData.filter((foodItem) =>
//       foodItem.name.toLowerCase().includes(userQuery.toLowerCase())
//     );
//   }
//   if (selectButton && selectButton !== "All") {
//     filteredData = filteredData.filter(
//       (foodItem) => foodItem.type === selectButton.toLowerCase()
//     );
//   }

//   return (
//     <div className={styles.foodItemsBgContainer}>
//       {filteredData.map((foodItem) => (
//         <FoodContainer key={foodItem.name} foodItem={foodItem} url={BASE_URL} />
//       ))}
//     </div>
//   );
// };

// export default FoodItemsContainer;

import { useContext } from "react";
import { FoodContext } from "./store/FoodProvider";
import styles from "./FoodItemsContainer.module.css";
import FoodContainer from "./FoodContainer";

const FoodItemsContainer = () => {
  const { userQuery, selectButton, data, error, BASE_URL } =
    useContext(FoodContext);

  if (error) {
    return <div className={styles.error}>{error}</div>;
  }

  if (!data) {
    return <div className={styles.loading}>Loading...</div>;
  }

  let filteredData = data;
  if (userQuery) {
    filteredData = filteredData.filter((foodItem) =>
      foodItem.name.toLowerCase().includes(userQuery.toLowerCase())
    );
  }
  if (selectButton && selectButton !== "All") {
    filteredData = filteredData.filter(
      (foodItem) => foodItem.type === selectButton.toLowerCase()
    );
  }

  return (
    <div className={styles.foodItemsBgContainer}>
      {filteredData.map((foodItem) => (
        <FoodContainer key={foodItem.name} foodItem={foodItem} url={BASE_URL} />
      ))}
    </div>
  );
};

export default FoodItemsContainer;
