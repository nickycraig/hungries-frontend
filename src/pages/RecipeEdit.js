import { useEffect, useState } from "react";
import { useParams } from 'react-router';
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom"

function RecipeEdit() {
    const { recipeId } = useParams();
    const [recipe, setRecipe] = useState(null);
    const navigate = useNavigate();
   

    useEffect(() => {
        async function getRecipe() {
            try {
                let myRecipe = await fetch(`https://hungry-guys.onrender.com/recipes/${recipeId}`);
                myRecipe = await myRecipe.json();
                setRecipe(myRecipe);
                console.log(myRecipe);
            } catch(err) {
                console.log(err);
            }
        }
        getRecipe();
    }, [recipeId]);
    
    function handleChange(e) {
        setRecipe((currentState) => ({
            ...currentState,
            [e.target.name]: e.target.value
        }))
    }

    async function handleSubmit(e) {
        try {
            await fetch(`https://hungry-guys.onrender.com/recipes/${recipeId}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(recipe)
            });
            return navigate(`/recipes/${recipeId}`);

        } catch(err) {
            console.log(err);
        }
    }

    function loaded() {
        return(
            <section class="bg-gray-100">
              <h2 class="text-2xl pt-8">Editing "{recipe.name}"</h2>
              <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
                <div class="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
                    <form onSubmit={handleSubmit} action="" class="space-y-4">
                        <div>
                            Recipe
                            <input class="w-full rounded-lg border-gray-200 p-3 text-sm" type="text" value={recipe.name} name="name" id="name" onChange={handleChange} />
                        </div>
                        <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
                            <div>
                                Cuisine 
                                <input class="w-full rounded-lg border-gray-200 p-3 text-sm" type="text" value={recipe.cuisine} name="cuisine" id="cuisine" onChange={handleChange} />
                            </div>
                            <div>
                                Type
                                    <select
                                    class="w-full rounded-lg border-gray-200 p-3 text-sm"
                                    placeholder="recipe type"
                                    name="type"
                                    id="type"
                                    onChange={handleChange}>
                                        <option value="soup">Soup</option>
                                        <option value="salad">Salad</option>
                                        <option value="entree">Entree</option>
                                        <option value="side dish">Side Dish</option>
                                        <option value="appetizer">Appetizer</option>
                                        <option value="dessert">Dessert</option>
                                    </select>
                            </div>
                        </div>
                        <div>
                            Comments <input class="w-full rounded-lg border-gray-200 p-3 text-sm" type="text" value={recipe.comments} name="comments" id="comments" onChange={handleChange} />
                        </div>
                        <div>
                            Image <input class="w-full rounded-lg border-gray-200 p-3 text-sm" type="text" value={recipe.image} name="image" id="image" onChange={handleChange} />
                        </div>
                        <div>
                            Recipe Link <input class="w-full rounded-lg border-gray-200 p-3 text-sm" type="text" value={recipe.recipeLink} name="recipeLink" id="recipeLink" onChange={handleChange} />
                        </div>
                        <div class="mt-4">
                            <Link to='/recipes'>
                            <button
                            type="submit"
                            class="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto"
                            >
                            Submit Changes
                            </button>
                            </Link>
                        </div>
                    </form>
                </div>
              </div>
            </section>

        )
    }

    return(
        <>
            {recipe ? loaded() : <h2>Loading...</h2>}
        </>
    )
}

export default RecipeEdit;