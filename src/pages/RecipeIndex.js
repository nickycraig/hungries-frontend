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
  
    function loaded() {
        return(
            <div class="grid grid-rows-2 grid-flow-col gap-4 pt-8 pb-8">
                <div class="pb-12">
                    <h2 className='text-2xl'>Soups</h2>
                        {recipes.filter(recipe => recipe.type === "soup").map((recipe, idx) => {
                            return(
                                <div key={idx}>
                                    <Link to={`/recipes/${recipe._id}`}>
                                        <h3 class="text-pink-500 text-lg">{recipe.name}</h3>
                                    </Link>
                                </div>
                            )
                        } )}
                </div> 
                <div class="pb-12">
                    <h2 className='text-2xl'>Salads</h2>
                        {recipes.filter(recipe => recipe.type === "salad").map((recipe, idx) => {
                            return(
                                <div key={idx}>
                                    <Link to={`/recipes/${recipe._id}`}>
                                        <h3 class="text-pink-500 text-lg">{recipe.name}</h3>
                                    </Link>
                                </div>
                            )
                        } )}
                </div>
                <div class="pb-12">
                    <h2 className='text-2xl'>Entrees</h2>
                        {recipes.filter(recipe => recipe.type === "entree").map((recipe, idx) => {
                            return(
                                <div key={idx}>
                                    <Link to={`/recipes/${recipe._id}`}>
                                        <h3 class="text-pink-500 text-lg">{recipe.name}</h3>
                                    </Link>
                                </div>
                            )
                        } )}
                </div>
                <div>
                    <h2 className='text-2xl'>Side Dishes</h2>
                        {recipes.filter(recipe => recipe.type === "side dish").map((recipe, idx) => {
                            return(
                                <div key={idx}>
                                    <Link to={`/recipes/${recipe._id}`}>
                                        <h3 class="text-pink-500 text-lg">{recipe.name}</h3>
                                    </Link>
                                </div>
                            )
                        } )}
                </div>
                <div>
                    <h2 className='text-2xl'>Appetizers</h2>
                        {recipes.filter(recipe => recipe.type === "appetizer").map((recipe, idx) => {
                            return(
                                <div key={idx}>
                                    <Link to={`/recipes/${recipe._id}`}>
                                        <h3 class="text-pink-500 text-lg">{recipe.name}</h3>
                                    </Link>
                                </div>
                            )
                        } )}
                </div>
                <div>
                    <h2 className='text-2xl'>Desserts</h2>
                        {recipes.filter(recipe => recipe.type === "dessert").map((recipe, idx) => {
                            return(
                                <div key={idx}>
                                    <Link to={`/recipes/${recipe._id}`}>
                                        <h3 class="text-pink-500 text-lg">{recipe.name}</h3>
                                    </Link>
                                </div>
                            )
                        } )}             
                </div>
            </div>
        )
    }

    function handleChange(e) {
        console.log(e.target);
        setRecipeForm((previousFormState) => ({
            ...previousFormState,
            [e.target.name]: e.target.value
        }))
    }
    
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
        <section class="bg-gray-100">
          <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
              <div class="lg:col-span-2 lg:py-12">
                <p class="max-w-xl text-xl">
                Use the form to add a new recipe to feed your Hungry Guys. Be sure to include some notes in the comments section: what you liked, what you changed or modified, etc. Let's eat!
                </p>
              </div>

      <div class="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
        <form onSubmit={handleSubmit} action="" class="space-y-4">
          <div>
            <label class="sr-only" for="name">Recipe</label>
            <input
              class="w-full rounded-lg border-gray-200 p-3 text-sm"
              placeholder="name of recipe"
              type="text"
              id="name"
              onChange={handleChange} 
            />
          </div>

          <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label class="sr-only" for="cuisine">Cuisine</label>
              <input
                class="w-full rounded-lg border-gray-200 p-3 text-sm"
                placeholder="chinese, vegan, etc."
                type="text"
                id="cuisine"
                onChange={handleChange}
              />
            </div>

            <div>
              <label class="sr-only" for="type">Type</label>
              <select
                class="w-full rounded-lg border-gray-200 p-3 text-sm"
                placeholder="recipe type"
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
            <label class="sr-only" for="comments">Comments</label>
            <textarea
              class="w-full rounded-lg border-gray-200 p-3 text-sm"
              placeholder="add comments here"
              rows="4"
              id="comments"
              onChange={handleChange}
            ></textarea>
          </div>

          <div>
            <label class="sr-only" for="image">Image</label>
            <input
              class="w-full rounded-lg border-gray-200 p-3 text-sm"
              placeholder="add image URL"
              type="text"
              id="image"
              onChange={handleChange} 
            />
          </div>
          <div>
            <label class="sr-only" for="recipeLink">Recipe Link</label>
            <input
              class="w-full rounded-lg border-gray-200 p-3 text-sm"
              placeholder="add recipe URL"
              type="text"
              id="recipeLink"
              onChange={handleChange} 
            />
          </div>
          <div class="mt-4">
            <button
              type="submit"
              class="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto"
            >
              Add new recipe
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
  {recipes.length ? loaded(recipes) : <h2>Loading...</h2>}
</section>
        // <section class="bg-gray-100"> 
        //     <form onSubmit={handleSubmit}>
        //         <label for="name">Recipe </label>
        //         <input type="text" name="name" id="name" onChange={handleChange} placeholder="Name of recipe"/>
        //         <br/>
        //         <label for="type">Type </label>
        //         <select name="type" id="type" onChange={handleChange}>
        //             <option value="soup">Soup</option>
        //             <option value="salad">Salad</option>
        //             <option value="entree">Entree</option>
        //             <option value="side dish">Side Dish</option>
        //             <option value="appetizer">Appetizer</option>
        //             <option value="dessert">Dessert</option>
        //         </select>
        //         <br/>
        //         <label for="cuisine">Cuisine </label>
        //         <input type="text" name="cuisine" id="cuisine" onChange={handleChange} placeholder="chinese, vegetarian, etc"/>
        //         <br/>
        //         <label for="comments">Comments </label>
        //         <input type="text" name="comments" id="comments" onChange={handleChange} placeholder="recipe notes/changes/suggestions"/>
        //         <br/>
        //         <label for="image">Image </label>
        //         <input type="text" name="image" id="image" onChange={handleChange} placeholder="upload image URL"/>
        //         <br/>
        //         <label for="recipeLink">Recipe Link </label>
        //         <input type="text" name="recipeLink" id="recipeLink" onChange={handleChange} placeholder="paste recipe URL"/>
        //         <br/>
        //         <button>Add new recipe</button>
        //     </form>
        //     {recipes.length ? loaded(recipes) : <h2>Loading...</h2>}
        // </section>
    )
}


export default RecipeIndex;