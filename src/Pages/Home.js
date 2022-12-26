import React, { useState } from "react";
import { getRecipe } from "../api";
import Card from "../Components/Card";
import NotFound from "../Components/NotFound";
import styles from "../Styles/home.module.css";

const Home = () => {
  const [input, setInput] = useState("");
  const [recipe, setRecipe] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const fetchRecipe = async () => {
      const response = await getRecipe(input);
      console.log(response.data);
      setRecipe(response.data);
      console.log(recipe.count);
      console.log(input);
    };
    fetchRecipe();
  };

  return (
    <div>
      <h1>Recipe Search</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Search a recipe"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className={styles.search}
        />
        <input type="submit" value="Search" className={styles.submitBtn} />
      </form>
      <div>
        {recipe.count === 0 ? <NotFound /> : <Card recipe={recipe.hits} />}
      </div>
    </div>
  );
};

export default Home;
