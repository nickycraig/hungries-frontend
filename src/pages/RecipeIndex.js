import { useState, useEffect } from 'react';

function RecipeIndex () {
    const [recipes, setRecipes] = useState([]);

    async function getRecipes() {
        try {
            let myRecipes = await fetch('http://localhost:3000/recipes')
            myRecipes = await myRecipes.json();
            setRecipes(myRecipes);
        } catch(err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getRecipes();
    }, []);

    console.log(recipes);

    function loaded() {
        return(
            <>
                {recipes.map((recipe, idx) => {
                        return(
                            <div key={idx}>
                                <h3>{recipe.name}</h3>
                            </div>
                        )
                })}
           
            </>
        )
    }

    return(
        <>
            <form>
                <label for="name">Recipe </label>
                <input type="text" name="recipe" id="name" placeholder="Name of recipe"/>
                <br/>
                <label for="type">Type </label>
                <select name="type" id="type">
                    <option value="soup">Soup</option>
                    <option value="salad">Salad</option>
                    <option value="entree">Entree</option>
                    <option value="side dish">Side Dish</option>
                    <option value="appetizer">Appetizer</option>
                    <option value="dessert">Dessert</option>
                </select>
                <br/>
                <label for="image">Image </label>
                <input type="text" name="image" id="image" placeholder="upload image URL"/>
                <br/>
                <label for="cuisine">Cuisine </label>
                <input type="text" name="cuisine" id="cuisine" placeholder="chinese, vegetarian, etc"/>
                <br/>
                <label for="comments">Comments </label>
                <input type="text" name="comments" id="comments" placeholder="recipe notes/changes/suggestions"/>
                <br/>
                <label for="recipeLink">Recipe Link </label>
                <input type="text" name="recipeLink" id="recipeLink" placeholder="chinese, vegetarian, etc"/>
                <br/>
            </form>
            {recipes.length ? loaded(recipes) : <h2>Loading...</h2>}
        </>
    )
}


export default RecipeIndex;