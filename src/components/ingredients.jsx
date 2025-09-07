import "../assets/bootstrap/css/bootstrap.min.css";
import React from "react";

export default function IngredientsList(props) {
  const ingredientsListItems = props.ingredients.map((ingredient) => (
    <li key={ingredient}>{ingredient}</li>
  ));
  return (
    <section>
      <div className="border border-dark rounded-5 mt-5 p-5">
        <h4>Ingredients on hand:</h4>
        <ul className="ingredients-list" aria-live="polite">
          {ingredientsListItems}
        </ul>
      </div>
    </section>
  );
}
