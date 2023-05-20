import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

function RecipeShow () {
    const [ recipe, setRecipe ] = useState(null);
    const { recipeId } = useParams();
    console.log(recipeId);
    async function getRecipe() {
        try {
            let myRecipe = await fetch(`http://localhost:3000/recipes/${recipeId}`);
            myRecipe = await myRecipe.json();
            setRecipe(myRecipe);
        } catch(err) {
            console.log(err);
        }
    }
    console.log(recipe);

    function recipeLoaded() {
        return(
            <>
                <h2>{recipe.name}</h2>
                <h4>({recipe.cuisine.join(', ')})</h4>
                <img src={recipe.image} alt='recipe' />
                <h4>Comments:</h4>
                <p>{recipe.comments}</p>
                <a href={recipe.recipeLink}>Link to full recipe</a>
                <br/>
                <br/>
                <Link to={`/recipes/${recipeId}/edit`}>
                    <button>Edit Recipe</button>
                </Link>
                <Link to={`/recipes/${recipeId}/delete`}>
                    <button>Delete Recipe</button>
                </Link>
            </>
        )
    }

    useEffect(() => {
        getRecipe();
    }, []);

    return(
        <>
            {recipe ? recipeLoaded() : <h2>Loading...</h2>}
        </>
    )

}


export default RecipeShow;