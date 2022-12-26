import styles from "../Styles/card.module.css";

const Card = ({ recipe }) => {
  return (
    <div className={styles.list}>
      {/* (?) will make sure the array exists */}
      {recipe?.map((dish, index) => (
        <div className={styles.card} key={index}>
          <div>
            <img src={dish.recipe.image} alt="food" className={styles.img} />
          </div>
          <div>
            <h2>{dish.recipe.label}</h2>
            <a href={dish.recipe.url}>
              <button className={styles.btn}>View Recipe</button>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
