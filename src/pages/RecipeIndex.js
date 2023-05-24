import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

function RecipeIndex () {
    const [recipes, setRecipes] = useState([]);
    const [recipeForm, setRecipeForm] = useState({
        name: "",
        type: "",
        image: "",
        cuisine: [],
        comments: "",
        recipeLink: ""

    })

    async function getRecipes() {
        try {
            let myRecipes = await fetch('https://hungry-guys.onrender.com/recipes')
            myRecipes = await myRecipes.json();
            setRecipes(myRecipes);
            console.log(myRecipes);
        } catch(err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getRecipes();
    }, []);
    // console.log(recipes);
    // console.log(recipes.filter(recipe => recipe.type = "soup"));

    function loaded() {
        return(
            <>
            <h2>Soups</h2>
                {recipes.filter(recipe => recipe.type === "soup").map((recipe, idx) => {
                    return(
                        <div key={idx}>
                            <Link to={`/recipes/${recipe._id}`}>
                                <h3>{recipe.name}</h3>
                            </Link>
                        </div>
                    )
                } )}
           
            <h2>Salads</h2>
                {recipes.filter(recipe => recipe.type === "salad").map((recipe, idx) => {
                    return(
                        <div key={idx}>
                            <Link to={`/recipes/${recipe._id}`}>
                                <h3>{recipe.name}</h3>
                            </Link>
                        </div>
                    )
                } )}

            <h2>Entrees</h2>
                {recipes.filter(recipe => recipe.type === "entree").map((recipe, idx) => {
                    return(
                        <div key={idx}>
                            <Link to={`/recipes/${recipe._id}`}>
                                <h3>{recipe.name}</h3>
                            </Link>
                        </div>
                    )
                } )}

            <h2>Side Dishes</h2>
                {recipes.filter(recipe => recipe.type === "side dish").map((recipe, idx) => {
                    return(
                        <div key={idx}>
                            <Link to={`/recipes/${recipe._id}`}>
                                <h3>{recipe.name}</h3>
                            </Link>
                        </div>
                    )
                } )}

            <h2>Appetizers</h2>
                {recipes.filter(recipe => recipe.type === "appetizer").map((recipe, idx) => {
                    return(
                        <div key={idx}>
                            <Link to={`/recipes/${recipe._id}`}>
                                <h3>{recipe.name}</h3>
                            </Link>
                        </div>
                    )
                } )}

            <h2>Desserts</h2>
                {recipes.filter(recipe => recipe.type === "dessert").map((recipe, idx) => {
                    return(
                        <div key={idx}>
                            <Link to={`/recipes/${recipe._id}`}>
                                <h3>{recipe.name}</h3>
                            </Link>
                        </div>
                    )
                } )}
            </>
        )
    }

    function handleChange(e) {
        console.log(e.target);
        setRecipeForm((previousFormState) => ({
            ...previousFormState,
            [e.target.name]: e.target.value
        }))
    }
    // console.log(recipeForm);
    async function handleSubmit(e) {
        try {
            e.preventDefault();
            await fetch('http://localhost:3000/recipes', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(recipeForm)
            })
            getRecipes();
            e.target.reset();
        } catch(err) {
            console.log(err);
        }
    } 

    return(
        <>
            <form onSubmit={handleSubmit}>
                <label for="name">Recipe </label>
                <input type="text" name="name" id="name" onChange={handleChange} placeholder="Name of recipe"/>
                <br/>
                <label for="type">Type </label>
                <select name="type" id="type" onChange={handleChange}>
                    <option value="soup">Soup</option>
                    <option value="salad">Salad</option>
                    <option value="entree">Entree</option>
                    <option value="side dish">Side Dish</option>
                    <option value="appetizer">Appetizer</option>
                    <option value="dessert">Dessert</option>
                </select>
                <br/>
                <label for="image">Image </label>
                <input type="text" name="image" id="image" onChange={handleChange} placeholder="upload image URL"/>
                <br/>
                <label for="cuisine">Cuisine </label>
                <input type="text" name="cuisine" id="cuisine" onChange={handleChange} placeholder="chinese, vegetarian, etc"/>
                <br/>
                <label for="comments">Comments </label>
                <input type="text" name="comments" id="comments" onChange={handleChange} placeholder="recipe notes/changes/suggestions"/>
                <br/>
                <label for="recipeLink">Recipe Link </label>
                <input type="text" name="recipeLink" id="recipeLink" onChange={handleChange} placeholder="paste recipe URL"/>
                <br/>
                <button>Add new recipe</button>
            </form>
            {recipes.length ? loaded(recipes) : <h2>Loading...</h2>}
        </>
    )
}


export default RecipeIndex;