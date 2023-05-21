import { useEffect, useState } from "react";
import { useParams } from 'react-router';

function RecipeEdit() {
    const { recipeId } = useParams;
    const [recipe, setRecipe] = useState(null);
    
    async function getRecipe() {
        try {
            let myRecipe = await fetch(`http://localhost:3000/recipes/${recipeId}`);
            myRecipe = await myRecipe.json();
            setRecipe(myRecipe);
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
            [e.target.name]: e.targe.value
        }))
    }

    async function handleSubmit(e) {
        try {
            await fetch(`http://localhost:3000/recipes/${recipeId}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(recipe)
            });
            
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
                    Type <input type="text" value={recipe.type} name="type" id="type" onChange={handleChange} />
                    Image <input type="text" value={recipe.image} name="image" id="image" onChange={handleChange} />
                    Cuisine <input type="text" value={recipe.cuisine} name="cuisine" id="cuisine" onChange={handleChange} />
                    Comments <input type="text" value={recipe.comments} name="comments" id="comments" onChange={handleChange} />
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