import greeksalad from "../images/greek salad.jpg";

import Card from "./UI/Card";
import styles from "./FoodItem.module.css";

const FoodItem = () => {
  return (
    <Card>
      <img className={styles.img} src={greeksalad} alt="greek salad" />
      <div>
        <div>
          <h3>Greek Salad</h3>
          <h3> $ 12.99</h3>
        </div>
        <p>
          The famous greek salad of crispy lettuce, peppers, olives and our
          Chicago style feta cheese, garnished with crunchy garlic and rosemary
          croutons.
        </p>
        <button>Order a delivery</button>
      </div>
    </Card>
  );
};

export default FoodItem;
