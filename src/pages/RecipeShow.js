import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

function RecipeShow () {
    const [ recipe, setRecipe ] = useState(null);
    const { recipeId } = useParams();
    // console.log(recipeId);
    
    console.log(recipe);

    function recipeLoaded() {
        return(
            <>
                <h1 className="text-3xl mt-4">{recipe.name}</h1>
                <h4 class='text-xl mb-4'>({recipe.cuisine.join(', ')})</h4>
                <div className="flex flex-row justify-center">
                    <div>
                        <img src={recipe.image} alt='recipe' />
                    </div>
                    <div class='pl-4'>
                        <h4 class='text-2xl mb-2 mt-8'>Comments:</h4>
                        <p class='text-lg mb-4'>{recipe.comments}</p>
                        <div class='mb-10 text-pink-500'>
                            <a href={recipe.recipeLink}>Link to full recipe</a>
                        </div>
                        <div class="flex space-x-12 justify-center">
                            <div>
                                <Link to={`/recipes/${recipeId}/edit`}>
                                    <button 
                                    type="submit"
                                    class="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto">
                                    Edit Recipe</button>
                                </Link>
                            </div>
                            <div>
                                <Link to={`/recipes/${recipeId}/delete`}>
                                    <button 
                                    type="submit"
                                    class="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto">
                                    Delete Recipe</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }

    useEffect(() => {
        async function getRecipe() {
            try {
                let myRecipe = await fetch(`https://hungry-guys.onrender.com/recipes/${recipeId}`);
                myRecipe = await myRecipe.json();
                setRecipe(myRecipe);
            } catch(err) {
                console.log(err);
            }
        }
        getRecipe();
    }, [recipeId]);

    return(
        <>
            {recipe ? recipeLoaded() : <h2>Loading...</h2>}
        </>
    )

}


export default RecipeShow;