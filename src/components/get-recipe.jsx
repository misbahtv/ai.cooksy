import "../assets/bootstrap/css/bootstrap.min.css";


export default function GetRecipe(props) {
    return(
         props.ingredients.length > 3 && (
        <div className="border border-dark rounded-5 mt-5 p-5 text-center">
          <div>
            <h3>Ready for a recipe?</h3>
            <p>Generate a recipe from your list of ingredients.</p>
          </div>
          <button className="btn btn-dark" onClick={props.getRecipe}>Get a recipe</button>
        </div>)
    )}