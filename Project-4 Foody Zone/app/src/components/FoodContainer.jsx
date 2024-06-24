/*image: "/images/egg.png",
name: "Boilded Egg",
price: 10,
text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
type: "breakfast"*/

/*import styles from "./FoodContainer.module.css";
const FoodContainer = ({ foodItem, url }) => {
  return (
    <>
      <div className={styles.foodItemContainer}>
        <img src={url + foodItem.image} alt="food Image" />
        {console.log(url + foodItem.image)}
        <div>
          <h2>{foodItem.name}</h2>
          <p>{foodItem.text}</p>
          <button>{foodItem.price}</button>
        </div>
      </div>
    </>
  );
};

export default FoodContainer;*/

/*import styles from "./FoodContainer.module.css";

const FoodContainer = ({ foodItem, url }) => {
  return (
    <div className={styles.foodItemContainer}>
      <img src={url + foodItem.image} alt="food" className={styles.foodImage} />
      <div className={styles.foodDetails}>
        <h2>{foodItem.name}</h2>
        <p>{foodItem.text}</p>
        <button className={styles.priceButton}>{foodItem.price}</button>
      </div>
    </div>
  );
};

export default FoodContainer;*/

import styles from "./FoodContainer.module.css";

const FoodContainer = ({ foodItem, url }) => {
  return (
    <div className={styles.foodItemContainer}>
      <img
        src={url + foodItem.image}
        alt={foodItem.name}
        className={styles.foodImage}
      />
      <div className={styles.foodDetails}>
        <h2 className={styles.foodName}>{foodItem.name}</h2>
        <p className={styles.foodDescription}>{foodItem.text}</p>
        <div className={styles.priceContainer}>
          <button className={styles.priceButton}>$ {foodItem.price}.00</button>
        </div>
      </div>
    </div>
  );
};

export default FoodContainer;
