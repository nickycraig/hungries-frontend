import { useEffect, useState } from "react";
import { useParams } from 'react-router';
import { useNavigate } from "react-router-dom";

function RecipeEdit() {
    const { recipeId } = useParams();
    const [recipe, setRecipe] = useState(null);
    const navigate = useNavigate();
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

    useEffect(() => {
        getRecipe();
    }, []);
    
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
            <>
                <h2>Editing {recipe.name}</h2>
                <form onSubmit={handleSubmit}>
                    Recipe <input type="text" value={recipe.name} name="name" id="name" onChange={handleChange} />
                    <br/>
                    Type <input type="text" value={recipe.type} name="type" id="type" onChange={handleChange} />
                    <br/>
                    Image <input type="text" value={recipe.image} name="image" id="image" onChange={handleChange} />
                    <br/>
                    Cuisine <input type="text" value={recipe.cuisine} name="cuisine" id="cuisine" onChange={handleChange} />
                    <br/>
                    Comments <input type="text" value={recipe.comments} name="comments" id="comments" onChange={handleChange} />
                    <br/>
                    Recipe Link <input type="text" value={recipe.recipeLink} name="recipeLink" id="recipeLink" onChange={handleChange} />
                </form>
            </>

        )
    }

    return(
        <>
            {recipe ? loaded() : <h2>Loading...</h2>}
        </>
    )
}

export default RecipeEdit;