import "../assets/bootstrap/css/bootstrap.min.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
import React from "react";
import IngredientsList from "./ingredients";
import Nav from "./navbar";
import Recipe from "./recipe";
import { getRecipeFromMistral } from "../../ai";
import "../index.css";
import GetRecipe from "./get-recipe";

export default function Main() {
  const [ingredients, setIngredients] = React.useState([]);
  const [recipe, setRecipe] = React.useState("");

  async function getRecipe() {
    const recipeMarkdown = await getRecipeFromMistral(ingredients);
    setRecipe(recipeMarkdown);
  }

  function addIngredient(formData) {
    const newIngredient = formData.get("ingredient");
    setIngredients((prevIngredients) => [...prevIngredients, newIngredient]);
  }

  return (
    <>
      <Nav />
      <main style={{ backgroundColor: "#DFDFDF" }}>
        <section
          style={{
            position: "relative",
            minHeight: "100vh",
            overflow: "hidden",
          }}
        >
          <spline-viewer
            url="https://prod.spline.design/mRKA7Il6udx4xfTr/scene.splinecode"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100vw",
              height: "110vh",
              zIndex: 0,
            }}
          ></spline-viewer>
          <div
            className="container-fluid m-0"
            style={{ position: "relative", zIndex: 1 }}
          >
            <form action={addIngredient}>
              <div className="row mt-5 mb-5 searchbar">
                <div className="col-10 col-md-8 col-lg-6 g-2 d-flex align-items-center gap-3">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="Add ingredient"
                    name="ingredient"
                  />
                  <button
                    style={{ whiteSpace: "nowrap", minWidth: "130px" }}
                    className="btn btn-dark"
                  >
                    Add ingredient
                  </button>
                </div>
              </div>
            </form>
            <div className="row justify-content-between">
              <div className="col-md-4 col-sm-12 justify-content-start">
                {ingredients.length > 0 && (
                  <IngredientsList ingredients={ingredients} />
                )}
              </div>
              <div className="get-recipe col-md-4 text-end col-sm-12">
                <GetRecipe ingredients={ingredients} getRecipe={getRecipe} />
              </div>
            </div>
            <div className="row mb-0 text-center align-items-center justify-content-center">
              {recipe && (<a href="#recipe" className="btn"><i style={{ fontSize: "2.5rem" }} className="bi bi-arrow-down-circle-fill"></i>Click Here</a>)}
            </div>
          </div>
        </section>
        <section id="recipe"className="container mb-5">
          <div  className="col-8 mx-auto">
            {recipe && <Recipe recipe={recipe} />}
          </div>
        </section>
      </main>
    </>
  );
}
