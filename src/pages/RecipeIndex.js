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
            <h2>Soups</h2>
                {recipes.map((recipe, idx) => {
                    if (recipes[idx].type === "soup") {
                        return(
                            <div key={idx}>
                                <h3>{recipes[idx].name}</h3>
                            </div>
                        )
                    }
                })}
            
            <h2>Salads</h2>
                {recipes.map((recipe, idx) => {
                    if (recipes[idx].type === "salad") {
                        return(
                            <div key={idx}>
                                <h3>{recipes[idx].name}</h3>
                            </div>
                        )
                    }
                })}
            
            <h2>Appetizers</h2>
                {recipes.map((recipe, idx) => {
                    if (recipes[idx].type === "appetizer") {
                        return(
                            <div key={idx}>
                                <h3>{recipes[idx].name}</h3>
                            </div>
                        )
                    }
                })}

            <h2>Entrees</h2>
                {recipes.map((recipe, idx) => {
                    if (recipes[idx].type === "entree") {
                        return(
                            <div key={idx}>
                                <h3>{recipes[idx].name}</h3>
                            </div>
                        )
                    }
                })}

            <h2>Side Dishes</h2>
                {recipes.map((recipe, idx) => {
                    if (recipes[idx].type === "side dish") {
                        return(
                            <div key={idx}>
                                <h3>{recipes[idx].name}</h3>
                            </div>
                        )
                    }
                })}

            <h2>Desserts</h2>
                {recipes.map((recipe, idx) => {
                    if (recipes[idx].type === "dessert") {
                        return(
                            <div key={idx}>
                                <h3>{recipes[idx].name}</h3>
                            </div>
                        )
                    }
                })}
            </>
        )
    }

    return(
        <>
            {recipes ? loaded() : <h2>Loading...</h2>}
        </>
    )
}


export default RecipeIndex;