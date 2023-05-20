import { useParams } from "react-router";
import { Link } from "react-router-dom";

function RecipeDelete() {
    const {recipeId} = useParams();

    async function deleteMyRecipe() {
        try {
            await fetch(`http://localhost:3000/recipes/${recipeId}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application.json"
                }
            })
        } catch(err) {
            console.log(err);
        }
    }
    return(
        <>
            <h2>Are you sure your Hungry Guys won't eat this?</h2>
            <Link to='/recipes'>
                <button onClick={deleteMyRecipe}>Yes, they hated it!</button>
            </Link>
            <Link to={`/recipes/${recipeId}`}>
                <button>No, let's try it again!</button>
            </Link>
        </>
    )
}

export default RecipeDelete;