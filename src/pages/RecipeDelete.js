import { useParams } from "react-router";
import { Link } from "react-router-dom";

function RecipeDelete() {
    const {recipeId} = useParams();

    async function deleteMyRecipe() {
        try {
            await fetch(`https://hungry-guys.onrender.com/recipes/${recipeId}`, {
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
        <div class="bg-gray-100">
            <h2 class="text-2xl pt-4 pb-6">Are you sure your Hungry Guys won't eat this?</h2>
            <div class="flex justify-center">
                <img src="https://d1qxviojg2h5lt.cloudfront.net/images/01EXB718T4RFFY2XWQ685GWKWH/TotinosSNL.webp" alt="vanessa byer with totinos" />
            </div>
                <div class="flex space-x-12 justify-center mt-10 pb-12">
                    <div>
                        <Link to='/recipes'>
                            <button onClick={deleteMyRecipe} class="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto">Yes, they hated it!</button>
                        </Link>
                    </div>
                    <div>
                        <Link to={`/recipes/${recipeId}`}>
                            <button class="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto">No, let's try it again!</button>
                        </Link>
                    </div>
                </div>
        </div>
    )
}

export default RecipeDelete;